// Style Categories Data
const styleCategories = {
    trending: [
        { id: 'flux-realism', name: 'Flux Realism', description: 'Ultra-realistic AI photography', icon: 'fa-fire', color: 'text-red-500' },
        { id: 'midjourney-v6', name: 'Midjourney Style', description: 'Popular AI art aesthetic', icon: 'fa-rocket', color: 'text-purple-500' },
        { id: 'stable-diffusion-xl', name: 'SDXL Quality', description: 'High-quality detailed images', icon: 'fa-star', color: 'text-blue-500' },
        { id: 'dalle-3', name: 'DALL-E 3 Style', description: 'Creative compositions', icon: 'fa-robot', color: 'text-green-500' }
    ],
    photographic: [
        { id: 'photorealistic', name: 'Photorealistic', description: 'Ultra-realistic photography', icon: 'fa-camera', color: 'text-gray-500' },
        { id: 'portrait', name: 'Portrait', description: 'Professional portrait style', icon: 'fa-user', color: 'text-pink-500' },
        { id: 'landscape', name: 'Landscape', description: 'Natural landscape photography', icon: 'fa-mountain', color: 'text-green-500' },
        { id: 'street', name: 'Street', description: 'Urban street photography', icon: 'fa-city', color: 'text-yellow-500' },
        { id: 'macro', name: 'Macro', description: 'Close-up photography', icon: 'fa-search-plus', color: 'text-indigo-500' }
    ],
    artistic: [
        { id: 'oil-painting', name: 'Oil Painting', description: 'Classical oil painting style', icon: 'fa-paint-roller', color: 'text-yellow-600' },
        { id: 'watercolor', name: 'Watercolor', description: 'Soft watercolor painting', icon: 'fa-water', color: 'text-blue-400' },
        { id: 'sketch', name: 'Sketch', description: 'Pencil sketch artwork', icon: 'fa-pencil', color: 'text-gray-700' },
        { id: 'impressionist', name: 'Impressionist', description: 'Impressionist painting style', icon: 'fa-sun', color: 'text-orange-400' },
        { id: 'cubism', name: 'Cubism', description: 'Geometric abstract style', icon: 'fa-cube', color: 'text-red-400' }
    ],
    digital: [
        { id: 'digital-art', name: 'Digital Art', description: 'Modern digital artwork', icon: 'fa-laptop-code', color: 'text-blue-500' },
        { id: 'cyberpunk', name: 'Cyberpunk', description: 'Futuristic neon aesthetic', icon: 'fa-gamepad', color: 'text-pink-500' },
        { id: 'anime', name: 'Anime', description: 'Japanese anime style', icon: 'fa-gamepad', color: 'text-red-500' },
        { id: '3d-render', name: '3D Render', description: 'Photorealistic 3D rendering', icon: 'fa-cube', color: 'text-purple-500' },
        { id: 'low-poly', name: 'Low Poly', description: 'Polygonal 3D style', icon: 'fa-shapes', color: 'text-green-500' }
    ],
    fantasy: [
        { id: 'fantasy-art', name: 'Fantasy Art', description: 'Magical fantasy illustrations', icon: 'fa-dragon', color: 'text-red-500' },
        { id: 'mythical', name: 'Mythical', description: 'Legendary creatures and gods', icon: 'fa-hat-wizard', color: 'text-purple-500' },
        { id: 'dreamlike', name: 'Dreamlike', description: 'Surreal dreamscapes', icon: 'fa-cloud-moon', color: 'text-blue-400' },
        { id: 'storybook', name: 'Storybook', description: 'Children book illustrations', icon: 'fa-book-open', color: 'text-yellow-500' },
        { id: 'steampunk', name: 'Steampunk', description: 'Victorian futuristic style', icon: 'fa-cogs', color: 'text-amber-600' }
    ],
    minimalist: [
        { id: 'minimal', name: 'Minimal', description: 'Simple and clean designs', icon: 'fa-square', color: 'text-gray-500' },
        { id: 'line-art', name: 'Line Art', description: 'Elegant line drawings', icon: 'fa-pen', color: 'text-black' },
        { id: 'monochrome', name: 'Monochrome', description: 'Black and white aesthetics', icon: 'fa-moon', color: 'text-gray-700' },
        { id: 'flat-design', name: 'Flat Design', description: 'Modern flat illustrations', icon: 'fa-layer-group', color: 'text-blue-500' },
        { id: 'negative-space', name: 'Negative Space', description: 'Creative use of empty space', icon: 'fa-expand', color: 'text-purple-500' }
    ],
    vintage: [
        { id: 'retro', name: 'Retro', description: '50s-80s nostalgic style', icon: 'fa-record-vinyl', color: 'text-red-500' },
        { id: 'vintage-photo', name: 'Vintage Photo', description: 'Old photograph effect', icon: 'fa-camera-retro', color: 'text-amber-600' },
        { id: 'poster', name: 'Vintage Poster', description: 'Classic poster design', icon: 'fa-newspaper', color: 'text-yellow-500' },
        { id: 'sepia', name: 'Sepia Tone', description: 'Antique brown tones', icon: 'fa-image', color: 'text-amber-700' },
        { id: 'polaroid', name: 'Polaroid', description: 'Instant photo style', icon: 'fa-camera', color: 'text-white' }
    ],
    futuristic: [
        { id: 'sci-fi', name: 'Sci-Fi', description: 'Futuristic technology', icon: 'fa-robot', color: 'text-blue-400' },
        { id: 'cyber', name: 'Cyber', description: 'Neon cyberpunk aesthetic', icon: 'fa-city', color: 'text-pink-500' },
        { id: 'holographic', name: 'Holographic', description: 'Futuristic holograms', icon: 'fa-project-diagram', color: 'text-green-400' },
        { id: 'neo', name: 'Neo-Futurism', description: 'Modern futuristic design', icon: 'fa-atom', color: 'text-purple-400' },
        { id: 'biomechanical', name: 'Biomechanical', description: 'Organic machine hybrid', icon: 'fa-cogs', color: 'text-red-500' }
    ],
    abstract: [
        { id: 'abstract-art', name: 'Abstract Art', description: 'Non-representational artwork', icon: 'fa-paint-brush', color: 'text-red-500' },
        { id: 'fluid-art', name: 'Fluid Art', description: 'Colorful flowing patterns', icon: 'fa-tint', color: 'text-blue-500' },
        { id: 'geometric', name: 'Geometric', description: 'Mathematical shapes and patterns', icon: 'fa-shapes', color: 'text-purple-500' },
        { id: 'surreal', name: 'Surreal', description: 'Dreamlike bizarre imagery', icon: 'fa-cloud', color: 'text-pink-500' },
        { id: 'expressionist', name: 'Expressionist', description: 'Emotional distorted forms', icon: 'fa-theater-masks', color: 'text-yellow-500' }
    ],
    comic: [
        { id: 'comic-book', name: 'Comic Book', description: 'Classic comic style', icon: 'fa-book', color: 'text-red-500' },
        { id: 'manga', name: 'Manga', description: 'Japanese comic style', icon: 'fa-book-open', color: 'text-black' },
        { id: 'cartoon', name: 'Cartoon', description: 'Exaggerated cartoon style', icon: 'fa-smile', color: 'text-blue-500' },
        { id: 'pixel-art', name: 'Pixel Art', description: 'Retro pixel graphics', icon: 'fa-gamepad', color: 'text-green-500' },
        { id: 'vector-art', name: 'Vector Art', description: 'Clean scalable graphics', icon: 'fa-vector-square', color: 'text-purple-500' }
    ]
};

// Global state
let generations = [];
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentCategory = 'trending';
let currentStyle = 'flux-realism';
let currentPrompt = '';
let searchTerm = '';

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const chatMessages = document.getElementById('chatMessages');
const styleCategorySelect = document.getElementById('styleCategorySelect');
const styleOptionsContainer = document.getElementById('styleOptionsContainer');
const searchChat = document.getElementById('searchChat');
const searchChatMobile = document.getElementById('searchChatMobile');
const advancedSettingsBtn = document.getElementById('advancedSettingsBtn');
const advancedSettingsContent = document.getElementById('advancedSettingsContent');
const advancedSettingsIcon = document.getElementById('advancedSettingsIcon');
const aspectRatioBtns = document.querySelectorAll('.aspect-ratio-btn');
const imageViewer = document.getElementById('imageViewer');
const viewedImage = document.getElementById('viewedImage');
const imagePrompt = document.getElementById('imagePrompt');
const generateImageBtn = document.getElementById('generateImageBtn');

// Initialize theme
function initTheme() {
    document.documentElement.classList.add(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

// Toggle theme
function toggleTheme() {
    if (currentTheme === 'dark') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        currentTheme = 'light';
    } else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        currentTheme = 'dark';
    }
    localStorage.setItem('theme', currentTheme);
}

// Toggle sidebar on mobile
function toggleSidebar() {
    sidebar.classList.toggle('sidebar-open');
}

// Toggle advanced settings
function toggleAdvancedSettings() {
    const isExpanded = advancedSettingsContent.style.maxHeight !== '0px';
    if (isExpanded) {
        advancedSettingsContent.style.maxHeight = '0';
        advancedSettingsIcon.classList.remove('fa-chevron-up');
        advancedSettingsIcon.classList.add('fa-chevron-down');
    } else {
        advancedSettingsContent.style.maxHeight = advancedSettingsContent.scrollHeight + 'px';
        advancedSettingsIcon.classList.remove('fa-chevron-down');
        advancedSettingsIcon.classList.add('fa-chevron-up');
    }
}

// Set aspect ratio
function setAspectRatio(width, height) {
    document.getElementById('imageWidth').value = width;
    document.getElementById('imageHeight').value = height;

    aspectRatioBtns.forEach(btn => {
        const btnWidth = parseInt(btn.dataset.width);
        const btnHeight = parseInt(btn.dataset.height);
        if (btnWidth === width && btnHeight === height) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

// Render style options based on selected category
function renderStyleOptions() {
    styleOptionsContainer.innerHTML = '';
    const styles = styleCategories[currentCategory];

    styles.forEach(style => {
        const option = document.createElement('button');
        option.className = `modern-option w-full p-3 rounded-lg text-left flex items-start ${currentStyle === style.id ? 'selected ' + currentCategory : ''}`;
        option.innerHTML = `
            <div class="style-icon ${style.color}">
                <i class="fas ${style.icon}"></i>
            </div>
            <div>
                <div class="font-medium">${style.name}</div>
                <div class="text-xs opacity-70">${style.description}</div>
            </div>
        `;
        option.addEventListener('click', () => {
            currentStyle = style.id;
            renderStyleOptions();
        });
        styleOptionsContainer.appendChild(option);
    });
}

// Add message to chat
function addMessage(text, isUser = true, imageUrl = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`;

    const messageContent = document.createElement('div');
    messageContent.className = isUser ? 'user-message' : 'ai-message';
    messageContent.style.maxWidth = 'max-content';

    if (imageUrl) {
        messageContent.innerHTML = `
            <div class="p-3 rounded-lg">
                <div class="image-container">
                    <img src="${imageUrl}" alt="Generated image" class="rounded-lg max-h-64">
                    <div class="image-actions">
                        <button class="action-btn" onclick="viewImage('${imageUrl}')" data-tooltip="View">
                            <i class="fas fa-expand"></i>
                        </button>
                        <button class="action-btn" onclick="downloadImage('${imageUrl}')" data-tooltip="Download">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="action-btn" onclick="shareImage('${imageUrl}', '${text}')" data-tooltip="Share">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        messageContent.innerHTML = `
            <div class="p-3 rounded-lg">
                ${text}
                ${isUser ? `<i class="fas fa-edit edit-prompt" onclick="editPrompt('${text.replace(/'/g, "\\'")}')"></i>` : ''}
            </div>
        `;
    }

    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show loading skeleton
function showLoadingSkeleton() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message flex justify-start mb-4';

    const skeletonDiv = document.createElement('div');
    skeletonDiv.className = 'ai-message p-3 rounded-lg';
    skeletonDiv.style.maxWidth = 'max-content';
    skeletonDiv.innerHTML = `
        <div class="flex items-center space-x-2 mb-3">
            <div class="skeleton w-8 h-8 rounded-full"></div>
            <div class="skeleton w-24 h-4 rounded"></div>
        </div>
        <div class="skeleton w-64 h-48 rounded-lg"></div>
    `;

    messageDiv.appendChild(skeletonDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv;
}

// Show error message
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message flex justify-start mb-4';

    const errorDiv = document.createElement('div');
    errorDiv.className = 'ai-message p-3 rounded-lg';
    errorDiv.innerHTML = `<div class="text-red-500"><i class="fas fa-exclamation-circle mr-2"></i>${message}</div>`;

    messageDiv.appendChild(errorDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// View image in modal
function viewImage(url) {
    viewedImage.src = url;
    imageViewer.classList.add('active');
}

// Close image viewer
function closeImageViewer() {
    imageViewer.classList.remove('active');
}

// Download image
function downloadImage(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-image-${Date.now()}.png`;
    a.click();
}

// Share image
function shareImage(url, prompt) {
    const shareUrl = window.location.origin + url;
    if (navigator.share) {
        navigator.share({
            title: 'AI Generated Image',
            text: prompt,
            url: shareUrl
        }).catch(err => {
            console.log('Error sharing:', err);
            copyToClipboard(shareUrl);
        });
    } else {
        copyToClipboard(shareUrl);
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showErrorMessage('Link copied to clipboard!');
    });
}

// Edit prompt
function editPrompt(prompt) {
    imagePrompt.value = prompt;
    imagePrompt.focus();
    imagePrompt.style.height = 'auto';
    imagePrompt.style.height = (imagePrompt.scrollHeight) + 'px';
}

// Search chat messages
function searchMessages() {
    const messages = chatMessages.querySelectorAll('.chat-message');
    const term = searchTerm.toLowerCase();

    messages.forEach(message => {
        const content = message.textContent.toLowerCase();
        if (content.includes(term)) {
            message.style.display = 'flex';
            message.classList.add('bg-yellow-100/20', 'dark:bg-yellow-900/20');
        } else {
            message.style.display = 'none';
            message.classList.remove('bg-yellow-100/20', 'dark:bg-yellow-900/20');
        }
    });
}

// Generate image
async function generateImage() {
    const prompt = imagePrompt.value.trim();
    if (!prompt) {
        showErrorMessage('Please enter a description for your image');
        return;
    }

    currentPrompt = prompt;
    addMessage(prompt, true);
    const loadingElement = showLoadingSkeleton();

    const request = {
        prompt: prompt,
        style: currentStyle,
        width: parseInt(document.getElementById('imageWidth').value),
        height: parseInt(document.getElementById('imageHeight').value)
    };

    try {
        const response = await fetch('/api/generate/image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        });

        const result = await response.json();

        if (result.success) {
            chatMessages.removeChild(loadingElement);
            addMessage('', false, result.file_url);
            imagePrompt.value = '';

            generations.unshift({
                id: result.generation_id,
                prompt: prompt,
                file_path: result.file_url,
                timestamp: new Date().toISOString(),
                style: request.style
            });
        } else {
            showErrorMessage(result.message || 'Failed to generate image. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        showErrorMessage('Failed to connect to the server. Please check your connection.');
    }
}

// Initialize the app
function init() {
    styleCategorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        renderStyleOptions();
    });

    aspectRatioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const width = parseInt(btn.dataset.width);
            const height = parseInt(btn.dataset.height);
            setAspectRatio(width, height);
        });
    });

    setAspectRatio(512, 512);
    renderStyleOptions();
    initTheme();

    generateImageBtn.addEventListener('click', generateImage);
    themeToggle.addEventListener('click', toggleTheme);
    sidebarToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
    advancedSettingsBtn.addEventListener('click', toggleAdvancedSettings);

    searchChat.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        searchMessages();
    });

    searchChatMobile.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        searchMessages();
    });

    imagePrompt.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            generateImage();
        }
    });

    imagePrompt.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    imageViewer.addEventListener('click', (e) => {
        if (e.target === imageViewer) {
            closeImageViewer();
        }
    });
}

// Make functions available globally for inline handlers
window.viewImage = viewImage;
window.downloadImage = downloadImage;
window.shareImage = shareImage;
window.editPrompt = editPrompt;
window.closeImageViewer = closeImageViewer;

// Start the app
init();