from flask import Flask, render_template, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import uuid
from datetime import datetime
import requests
from PIL import Image, ImageDraw, ImageFont
import random

app = Flask(__name__)
CORS(app)


# Configuration
app.config['GENERATIONS_FOLDER'] = 'static/generations'
os.makedirs(app.config['GENERATIONS_FOLDER'], exist_ok=True)

# In-memory storage (replace with database in production)
generations_db = []

def generate_image_with_ai(prompt, style, width, height, seed):
    """Generate image using AI service with enhanced error handling"""
    generation_id = str(uuid.uuid4())
    file_path = os.path.join(app.config['GENERATIONS_FOLDER'], f"image_{generation_id}.png")

    try:
        encoded_prompt = requests.utils.quote(f"{prompt}, {style} style")
        ai_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width={width}&height={height}&seed={seed or random.randint(1, 10000)}&model=flux&enhance=true"

        response = requests.get(ai_url, timeout=30)
        response.raise_for_status()

        with open(file_path, "wb") as f:
            f.write(response.content)

        return file_path

    except Exception as e:
        print(f"Error generating AI image: {e}")
        return create_fallback_image(prompt, style, width, height, file_path)

def create_fallback_image(prompt, style, width, height, file_path):
    """Create a detailed fallback image"""
    try:
        color_schemes = {
            "sunset": [(255, 94, 77), (255, 154, 0), (255, 206, 84)],
            "ocean": [(64, 224, 208), (0, 191, 255), (30, 144, 255)],
            "forest": [(34, 139, 34), (85, 107, 47), (107, 142, 35)],
            "night": [(25, 25, 112), (72, 61, 139), (106, 90, 205)],
            "city": [(105, 105, 105), (169, 169, 169), (220, 220, 220)],
            "default": [(73, 109, 137), (100, 149, 237), (135, 206, 235)],
        }

        color_scheme = color_schemes["default"]
        for keyword, scheme in color_schemes.items():
            if keyword in prompt.lower():
                color_scheme = scheme
                break

        img = Image.new("RGB", (width, height), color_scheme[0])
        draw = ImageDraw.Draw(img)

        for i in range(height):
            ratio = i / height
            r = int(color_scheme[0][0] * (1 - ratio) + color_scheme[1][0] * ratio)
            g = int(color_scheme[0][1] * (1 - ratio) + color_scheme[1][1] * ratio)
            b = int(color_scheme[0][2] * (1 - ratio) + color_scheme[1][2] * ratio)
            draw.line([(0, i), (width, i)], fill=(r, g, b))

        add_style_elements(draw, width, height, style, prompt)
        img.save(file_path)
        return file_path
    except Exception as e:
        print(f"Error creating fallback image: {e}")
        img = Image.new("RGB", (width, height), (70, 130, 180))
        img.save(file_path)
        return file_path

def add_style_elements(draw, width, height, style, prompt):
    """Add decorative elements based on style"""
    try:
        try:
            # Try to load a font
            font_path = os.path.join(os.path.dirname(__file__), 'static', 'fonts', 'Arial.ttf')
            if os.path.exists(font_path):
                font = ImageFont.truetype(font_path, min(width // 20, 24))
            else:
                font = ImageFont.load_default()
        except:
            font = ImageFont.load_default()

        if style == "artistic":
            for _ in range(random.randint(3, 8)):
                x = random.randint(0, width)
                y = random.randint(0, height)
                radius = random.randint(20, min(width, height) // 4)
                color = (
                    random.randint(100, 255),
                    random.randint(100, 255),
                    random.randint(100, 255),
                )
                draw.ellipse([x - radius, y - radius, x + radius, y + radius], fill=color)

        elif style == "anime":
            face_x, face_y = width // 2, height // 2
            face_radius = min(width, height) // 3
            draw.ellipse([face_x - face_radius, face_y - face_radius, face_x + face_radius, face_y + face_radius], fill=(255, 220, 180))
            
            eye_radius = face_radius // 4
            draw.ellipse([face_x - face_radius // 2 - eye_radius, face_y - eye_radius, face_x - face_radius // 2 + eye_radius, face_y + eye_radius], fill=(255, 255, 255))
            draw.ellipse([face_x + face_radius // 2 - eye_radius, face_y - eye_radius, face_x + face_radius // 2 + eye_radius, face_y + eye_radius], fill=(255, 255, 255))
            
            draw.arc([face_x - face_radius // 2, face_y + face_radius // 3, face_x + face_radius // 2, face_y + face_radius // 2], 0, 180, fill=(0, 0, 0), width=3)

        words = prompt.split()[:6]
        text = " ".join(words)
        
        # Get text size using textbbox for newer PIL versions
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        text_x = (width - text_width) // 2
        text_y = (height - text_height) // 2

        shadow_color = (0, 0, 0)
        text_color = (255, 255, 255)
        for dx in [-1, 0, 1]:
            for dy in [-1, 0, 1]:
                if dx != 0 or dy != 0:
                    draw.text((text_x + dx, text_y + dy), text, fill=shadow_color, font=font)
        draw.text((text_x, text_y), text, fill=text_color, font=font)

        style_text = f"Style: {style.title()}"
        draw.text((10, height - 30), style_text, fill=(255, 255, 255), font=font)

    except Exception as e:
        print(f"Error adding style elements: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/generate/image', methods=['POST'])
def generate_image():
    try:
        data = request.json
        prompt = data.get('prompt')
        style = data.get('style', 'realistic')
        width = int(data.get('width', 512))
        height = int(data.get('height', 512))
        seed = data.get('seed', random.randint(1, 10000))

        if not prompt:
            return jsonify({"success": False, "message": "Prompt is required"}), 400

        file_path = generate_image_with_ai(prompt, style, width, height, seed)
        relative_path = os.path.relpath(file_path, 'static').replace('\\', '/')

        generation = {
            "id": str(uuid.uuid4()),
            "type": "image",
            "prompt": prompt,
            "timestamp": datetime.now().isoformat(),
            "file_path": f"/static/{relative_path}",
            "metadata": {
                "style": style,
                "width": width,
                "height": height,
                "seed": seed
            }
        }

        generations_db.append(generation)

        return jsonify({
            "success": True,
            "generation_id": generation["id"],
            "file_url": generation["file_path"],
            "prompt": prompt,
            "metadata": generation["metadata"]
        })

    except Exception as e:
        return jsonify({"success": False, "message": f"Error: {str(e)}"}), 500

@app.route('/api/generations')
def get_generations():
    return jsonify({"generations": generations_db[-50:]})

@app.route('/api/generation/<generation_id>')
def get_generation(generation_id):
    generation = next((g for g in generations_db if g["id"] == generation_id), None)
    if not generation:
        return jsonify({"error": "Generation not found"}), 404
    return jsonify(generation)

@app.route('/api/generation/<generation_id>', methods=['DELETE'])
def delete_generation(generation_id):
    global generations_db
    generation = next((g for g in generations_db if g["id"] == generation_id), None)
    if not generation:
        return jsonify({"error": "Generation not found"}), 404

    try:
        file_path = generation["file_path"].lstrip('/')
        if os.path.exists(file_path):
            os.remove(file_path)
    except Exception as e:
        print(f"Error deleting file: {e}")

    generations_db = [g for g in generations_db if g["id"] != generation_id]
    return jsonify({"success": True})

@app.route('/static/generations/<filename>')
def serve_generation(filename):
    return send_from_directory(app.config['GENERATIONS_FOLDER'], filename)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)