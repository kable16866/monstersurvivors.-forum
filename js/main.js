// Main page functionality module
class GameSite {
    constructor() {
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.heroSlideIndex = 0;
        this.heroSlides = [];
        this.init();
    }

    // Initialize
    init() {
        this.loadGames();
        this.bindEvents();
        this.setupNavigation();
        this.initHeroSlider();
    }

    // Load game content
    loadGames() {
        this.loadHotGames();
        this.loadNewGames();
        this.loadRecommendedGames();
        this.loadFeaturedGames();
    }

    // Load hot games
    loadHotGames() {
        const hotGames = gameData.getHotGames(6);
        this.renderGames(hotGames, 'hotGames');
    }

    // Load new games
    loadNewGames() {
        const newGames = gameData.getNewGames(6);
        this.renderGames(newGames, 'newGames');
    }

    // Load recommended games
    loadRecommendedGames() {
        const recommendedGames = gameData.getRecommendedGames(6);
        this.renderGames(recommendedGames, 'recommendedGames');
    }

    // Load featured games
    loadFeaturedGames() {
        const featuredGames = gameData.getFeaturedGames(6);
        this.renderGames(featuredGames, 'featuredGames');
    }

    // Initialize hero slider
    initHeroSlider() {
        this.heroSlides = document.querySelectorAll('.hero-slide');
        if (this.heroSlides.length > 1) {
            setInterval(() => {
                this.nextSlide();
            }, 5000); // Auto-advance every 5 seconds
        }
    }

    // Show specific slide
    showSlide(index) {
        this.heroSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        
        const navButtons = document.querySelectorAll('.hero-nav-btn');
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
        });
        
        this.heroSlideIndex = index;
    }

    // Next slide
    nextSlide() {
        this.heroSlideIndex = (this.heroSlideIndex + 1) % this.heroSlides.length;
        this.showSlide(this.heroSlideIndex);
    }

    // Render game cards
    renderGames(games, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (games.length === 0) {
            container.innerHTML = '<div class="no-games">No games available</div>';
            return;
        }

        container.innerHTML = games.map(game => this.createGameCard(game)).join('');
    }

    // Create game card HTML
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
                    <p class="game-description">${this.truncateText(game.description, 100)}</p>
                    <div class="game-meta">
                        <div class="game-rating">
                            ${stars}
                            <span>${game.rating}</span>
                        </div>
                        <div class="game-plays">${formattedPlays} plays</div>
                    </div>
                    <div class="game-tags">
                        ${game.tags.slice(0, 3).map(tag => `<span class="game-tag">${tag}</span>`).join('')}
                    </div>
                    <button class="play-game-btn" onclick="event.stopPropagation(); playGame('${game.id}')">
                        <i class="fas fa-play"></i> Play Now
                    </button>
                </div>
            </div>
        `;
    }

    // Truncate text to specified length
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

    // Bind events
    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }

        // Search button
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                this.performSearch();
            });
        }

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });

        // Category card clicks
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const categoryName = e.currentTarget.onclick.toString().match(/'([^']+)'/);
                if (categoryName) {
                    this.filterByCategory(categoryName[1]);
                }
            });
        });
    }

    // Setup navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                if (category) {
                    this.setActiveCategory(category);
                    this.filterGamesByCategory(category);
                }
            });
        });
    }

    // Set active category
    setActiveCategory(category) {
        this.currentCategory = category;
        
        // Update navigation link states
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.category === category) {
                link.classList.add('active');
            }
        });
    }

    // Filter games by category
    filterGamesByCategory(category) {
        const games = gameData.getGamesByCategory(category);
        
        // Reload games in each section
        const hotGames = games.filter(game => game.hot).slice(0, 6);
        const newGames = games.filter(game => game.new).slice(0, 6);
        const recommendedGames = games.filter(game => game.recommended).slice(0, 6);
        const featuredGames = games.filter(game => game.featured).slice(0, 6);

        this.renderGames(hotGames, 'hotGames');
        this.renderGames(newGames, 'newGames');
        this.renderGames(recommendedGames, 'recommendedGames');
        this.renderGames(featuredGames, 'featuredGames');
    }

    // Handle search input
    handleSearch(query) {
        this.searchQuery = query;
        
        // Real-time search suggestions (optional)
        if (query.length > 1) {
            this.showSearchSuggestions(query);
        } else {
            this.hideSearchSuggestions();
        }
    }

    // Perform search
    performSearch() {
        const query = this.searchQuery.trim();
        if (query) {
            // Redirect to search results page
            window.location.href = `category.html?search=${encodeURIComponent(query)}`;
        }
    }

    // Show search suggestions
    showSearchSuggestions(query) {
        const suggestions = gameData.searchGames(query).slice(0, 5);
        console.log('Search suggestions:', suggestions);
    }

    // Hide search suggestions
    hideSearchSuggestions() {
        // Hide search suggestions
    }
}

// Global function: Play game
function playGame(gameId) {
    const game = gameData.getGameById(gameId);
    if (game) {
        // Increment play count
        game.plays += 1;
        
        // Redirect to game page
        window.location.href = `game.html?id=${gameId}`;
    } else {
        console.error('Game not found:', gameId);
        alert('Sorry, this game is not available at the moment.');
    }
}

// Global function: Search games
function searchGames() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `category.html?search=${encodeURIComponent(query)}`;
        }
    }
}

// Global function: Show specific hero slide
function showSlide(index) {
    if (window.gameSite) {
        window.gameSite.showSlide(index);
    }
}

// Global function: Filter by category
function filterByCategory(category) {
    window.location.href = `category.html?category=${category}`;
}

// Page load initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize game site
    window.gameSite = new GameSite();
    
    // Add page load animation
    document.body.classList.add('loaded');
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all game cards and sections
    document.querySelectorAll('.game-card, .section-block, .category-card').forEach(el => {
        observer.observe(el);
    });
});

// Add additional CSS styles
const additionalStyles = `
    <style>
        .featured-badge, .hot-badge, .new-badge {
            position: absolute;
            top: 10px;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 600;
            color: white;
            z-index: 10;
        }
        
        .featured-badge {
            right: 10px;
            background: linear-gradient(45deg, #f59e0b, #d97706);
        }
        
        .hot-badge {
            left: 10px;
            background: linear-gradient(45deg, #ef4444, #dc2626);
        }
        
        .new-badge {
            right: 10px;
            background: linear-gradient(45deg, #10b981, #059669);
        }
        
        .no-games {
            text-align: center;
            padding: 40px 20px;
            color: #64748b;
            font-size: 1.1rem;
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
        }
        
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            gap: 15px;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        body.loaded {
            animation: fadeInUp 0.8s ease-out;
        }
        
        .hero-nav {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }
        
        .hero-nav-btn {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .hero-nav-btn.active {
            background: white;
            transform: scale(1.2);
        }
        
        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .category-card {
            background: white;
            border-radius: 15px;
            padding: 30px 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .category-card:hover {
            transform: translateY(-5px);
            border-color: #4f46e5;
            box-shadow: 0 8px 25px rgba(79, 70, 229, 0.2);
        }
        
        .category-card i {
            font-size: 2.5rem;
            color: #4f46e5;
            margin-bottom: 15px;
        }
        
        .category-card h3 {
            margin: 0 0 10px 0;
            color: #1e293b;
            font-size: 1.2rem;
        }
        
        .category-card p {
            margin: 0;
            color: #64748b;
            font-size: 0.9rem;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 15px;
        }
        
        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #4f46e5, #7c3aed);
            color: white;
            border-radius: 50%;
            text-decoration: none;
            transition: transform 0.3s ease;
        }
        
        .social-links a:hover {
            transform: translateY(-3px);
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .category-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 15px;
            }
            
            .category-card {
                padding: 20px 15px;
            }
            
            .hero-nav {
                margin-top: 15px;
            }
        }
    </style>
`;

// Add styles to head
document.head.insertAdjacentHTML('beforeend', additionalStyles); 