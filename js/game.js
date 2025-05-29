// Game page functionality module
class GamePage {
    constructor() {
        this.gameId = null;
        this.currentGame = null;
        this.isFullscreen = false;
        this.init();
    }

    // Initialize
    init() {
        this.gameId = this.getGameIdFromUrl();
        if (this.gameId) {
            this.loadGame();
            this.loadRelatedGames();
        } else {
            this.showError('Game ID not found');
        }
    }

    // Get game ID from URL
    getGameIdFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    // Load game
    loadGame() {
        this.currentGame = gameData.getGameById(this.gameId);
        
        if (!this.currentGame) {
            this.showError('Game not found');
            return;
        }

        this.displayGameInfo();
        this.loadGameFrame();
    }

    // Display game information
    displayGameInfo() {
        const game = this.currentGame;
        
        // Update page title
        document.title = `${game.title} - GameHub`;
        document.getElementById('gameTitle').textContent = `${game.title} - GameHub`;
        
        // Update game title
        document.getElementById('gameDisplayTitle').textContent = game.title;
        
        // Update rating
        document.getElementById('gameRating').textContent = game.rating;
        document.getElementById('gameStars').innerHTML = this.generateStars(game.rating);
        document.getElementById('ratingCount').textContent = `(${Math.floor(Math.random() * 500) + 100} ratings)`;
        
        // Update play count
        document.getElementById('gamePlays').textContent = this.formatNumber(game.plays);
        
        // Update release date
        document.getElementById('gameDate').textContent = game.releaseDate || 'Unknown';
        
        // Update developer
        document.getElementById('gameDeveloper').textContent = game.developer || 'Unknown';
        
        // Update game description
        document.getElementById('gameDescription').textContent = game.description;
        
        // Update instructions
        document.getElementById('gameInstructions').innerHTML = `<p>${game.instructions || 'No instructions available'}</p>`;
        
        // Update game tags
        this.displayGameTags(game.tags);
    }

    // Display game tags
    displayGameTags(tags) {
        const container = document.getElementById('gameTags');
        container.innerHTML = tags.map(tag => `<span class="game-tag">${tag}</span>`).join('');
    }

    // Load game frame
    loadGameFrame() {
        const gameFrame = document.getElementById('gameFrame');
        const game = this.currentGame;
        
        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = game.gameUrl;
        iframe.title = game.title;
        iframe.allowFullscreen = true;
        iframe.allow = 'fullscreen';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        
        // Listen for iframe load
        iframe.onload = () => {
            // Hide loading animation
            const loading = gameFrame.querySelector('.loading-placeholder');
            if (loading) {
                loading.style.display = 'none';
            }
        };
        
        iframe.onerror = () => {
            this.showGameError();
        };
        
        // Add iframe to container
        gameFrame.appendChild(iframe);
    }

    // Show game loading error
    showGameError() {
        const gameFrame = document.getElementById('gameFrame');
        gameFrame.innerHTML = `
            <div class="error-placeholder">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Game failed to load</h3>
                <p>Sorry, the game is temporarily unavailable. Please try again later.</p>
                <button class="retry-btn" onclick="location.reload()">Reload</button>
            </div>
        `;
    }

    // Load related games
    loadRelatedGames() {
        const game = this.currentGame;
        const category = game.category;
        
        // Get other games from same category
        const relatedGames = gameData.getGamesByCategory(category)
            .filter(g => g.id !== this.gameId)
            .slice(0, 4);
        
        this.displayRelatedGames(relatedGames);
    }

    // Display related games
    displayRelatedGames(games) {
        const container = document.getElementById('relatedGames');
        
        if (games.length === 0) {
            container.innerHTML = '<div class="no-games">No related games available</div>';
            return;
        }
        
        container.innerHTML = games.map(game => this.createGameCard(game)).join('');
    }

    // Create game card
    createGameCard(game) {
        const stars = this.generateStars(game.rating);
        const formattedPlays = this.formatNumber(game.plays);
        
        return `
            <div class="game-card" onclick="playGame('${game.id}')">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.title}" loading="lazy" 
                         onerror="this.src='https://via.placeholder.com/300x180/e2e8f0/64748b?text=Image+Failed'">
                    ${game.featured ? '<div class="featured-badge">Featured</div>' : ''}
                    ${game.hot ? '<div class="hot-badge">Hot</div>' : ''}
                    ${game.new ? '<div class="new-badge">New</div>' : ''}
                    <div class="game-overlay">
                        <div class="play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-description">${this.truncateText(game.description, 80)}</p>
                    <div class="game-meta">
                        <div class="game-rating">
                            ${stars}
                            <span>${game.rating}</span>
                        </div>
                        <div class="game-plays">${formattedPlays} plays</div>
                    </div>
                    <div class="game-tags">
                        ${game.tags.slice(0, 2).map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                    </div>
                    <button class="play-game-btn" onclick="event.stopPropagation(); playGame('${game.id}')">
                        <i class="fas fa-play"></i> Play Now
                    </button>
                </div>
            </div>
        `;
    }

    // Truncate text
    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    // Generate star rating
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }

        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }

        return stars;
    }

    // Format numbers
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // Show error message
    showError(message) {
        document.body.innerHTML = `
            <div class="error-page">
                <div class="error-content">
                    <i class="fas fa-exclamation-circle"></i>
                    <h1>Oops! Something went wrong</h1>
                    <p>${message}</p>
                    <a href="index.html" class="btn-home">Back to Home</a>
                </div>
            </div>
        `;
    }
}

// Global function: Toggle fullscreen mode
function toggleFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    const gameFrame = document.getElementById('gameFrame');
    const fullscreenFrame = document.getElementById('fullscreenFrame');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    if (!overlay.classList.contains('active')) {
        // Enter fullscreen
        const iframe = gameFrame.querySelector('iframe');
        if (iframe) {
            const clonedIframe = iframe.cloneNode(true);
            fullscreenFrame.appendChild(clonedIframe);
        }
        
        overlay.classList.add('active');
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
        document.body.style.overflow = 'hidden';
    } else {
        exitFullscreen();
    }
}

// Exit fullscreen mode
function exitFullscreen() {
    const overlay = document.getElementById('fullscreenOverlay');
    const fullscreenFrame = document.getElementById('fullscreenFrame');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    
    overlay.classList.remove('active');
    fullscreenFrame.innerHTML = '';
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
    document.body.style.overflow = '';
}

// Refresh game
function refreshGame() {
    const gameFrame = document.getElementById('gameFrame');
    const iframe = gameFrame.querySelector('iframe');
    
    if (iframe) {
        // Show loading animation
        const loading = document.createElement('div');
        loading.className = 'loading-placeholder';
        loading.innerHTML = `
            <div class="spinner"></div>
            <p>Reloading game...</p>
        `;
        
        iframe.style.display = 'none';
        gameFrame.appendChild(loading);
        
        // Reload iframe
        setTimeout(() => {
            iframe.src = iframe.src;
            iframe.style.display = 'block';
            loading.remove();
        }, 1000);
    }
}

// Share game
function shareGame() {
    const game = window.gamePage?.currentGame;
    if (!game) return;
    
    const shareData = {
        title: game.title,
        text: game.description,
        url: window.location.href
    };
    
    // If Web Share API is supported
    if (navigator.share) {
        navigator.share(shareData).catch(err => {
            console.log('Share failed:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

// Fallback share method
function fallbackShare() {
    // Copy link to clipboard
    copyGameLink();
}

// Copy game link
function copyGameLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied to clipboard!');
        }).catch(() => {
            fallbackCopyText(url);
        });
    } else {
        fallbackCopyText(url);
    }
}

// Fallback copy method
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showToast('Link copied to clipboard!');
    } catch (err) {
        showToast('Copy failed, please copy manually');
    }
    
    document.body.removeChild(textArea);
}

// Share to Twitter
function shareToTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Share to Facebook
function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Share to Reddit
function shareToReddit() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const shareUrl = `https://reddit.com/submit?url=${url}&title=${title}`;
    
    window.open(shareUrl, '_blank', 'width=600,height=600');
}

// Show toast message
function showToast(message) {
    const existingToast = document.getElementById('successToast');
    if (existingToast) {
        const messageSpan = existingToast.querySelector('#toastMessage');
        messageSpan.textContent = message;
        existingToast.classList.add('show');
        
        setTimeout(() => {
            existingToast.classList.remove('show');
        }, 3000);
        return;
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Play game function (global)
function playGame(gameId) {
    window.location.href = `game.html?id=${gameId}`;
}

// Page load initialization
document.addEventListener('DOMContentLoaded', () => {
    window.gamePage = new GamePage();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            exitFullscreen();
        } else if (e.key === 'F11') {
            e.preventDefault();
            toggleFullscreen();
        }
    });
});

// Add styles
const gamePageStyles = `
    <style>
        .error-page {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        
        .error-content {
            padding: 40px;
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }
        
        .error-content i {
            font-size: 4rem;
            margin-bottom: 20px;
            color: #ef4444;
        }
        
        .error-content h1 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }
        
        .error-content p {
            font-size: 1.1rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        
        .btn-home {
            background: linear-gradient(45deg, #10b981, #059669);
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .btn-home:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }
        
        .error-placeholder {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            color: white;
            text-align: center;
            padding: 40px;
        }
        
        .error-placeholder i {
            font-size: 3rem;
            margin-bottom: 20px;
            color: #ef4444;
        }
        
        .error-placeholder h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }
        
        .error-placeholder p {
            margin-bottom: 20px;
            opacity: 0.8;
        }
        
        .retry-btn {
            background: #4f46e5;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .retry-btn:hover {
            background: #4338ca;
            transform: translateY(-1px);
        }
        
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: linear-gradient(45deg, #10b981, #059669);
            color: white;
            padding: 15px 25px;
            border-radius: 25px;
            font-size: 0.9rem;
            z-index: 10000;
            transition: all 0.3s ease;
            opacity: 0;
            display: flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
        }
        
        .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        
        .toast i {
            font-size: 1.1rem;
        }
        
        .no-games {
            text-align: center;
            padding: 40px 20px;
            color: #64748b;
            font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
            .toast {
                left: 20px;
                right: 20px;
                transform: translateX(0) translateY(100px);
            }
            
            .toast.show {
                transform: translateX(0) translateY(0);
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', gamePageStyles); 