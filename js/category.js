// 分类页面JavaScript功能
let currentCategory = 'all';
let currentSort = 'popularity';
let currentRatingFilter = 0;
let currentTagFilter = '';
let currentViewMode = 'grid';
let filteredGames = [];
let displayedGamesCount = 0;
const gamesPerPage = 12;

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initializePage();
    
    // 设置事件监听器
    setupEventListeners();
    
    // 加载游戏数据
    loadAndDisplayGames();
});

// 初始化页面
function initializePage() {
    // 从URL参数获取初始分类
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    const typeParam = urlParams.get('type');
    
    if (categoryParam) {
        currentCategory = categoryParam;
        setActiveCategory(categoryParam);
    }
    
    if (typeParam) {
        // 根据type参数设置排序
        switch(typeParam) {
            case 'hot':
                currentSort = 'popularity';
                break;
            case 'new':
                currentSort = 'newest';
                break;
            case 'recommended':
                currentSort = 'rating';
                break;
        }
        document.getElementById('sortSelect').value = currentSort;
    }
}

// 设置事件监听器
function setupEventListeners() {
    // 分类标签点击事件
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            selectCategory(category);
        });
    });
    
    // 筛选选项变化事件
    document.getElementById('sortSelect').addEventListener('change', function() {
        currentSort = this.value;
        loadAndDisplayGames();
    });
    
    document.getElementById('ratingFilter').addEventListener('change', function() {
        currentRatingFilter = parseFloat(this.value);
        loadAndDisplayGames();
    });
    
    document.getElementById('tagFilter').addEventListener('change', function() {
        currentTagFilter = this.value;
        loadAndDisplayGames();
    });
    
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            searchGames(query);
        });
    }
}

// 选择分类
function selectCategory(category) {
    currentCategory = category;
    setActiveCategory(category);
    loadAndDisplayGames();
    
    // 更新URL
    const url = new URL(window.location);
    if (category === 'all') {
        url.searchParams.delete('category');
    } else {
        url.searchParams.set('category', category);
    }
    window.history.replaceState({}, '', url);
}

// 设置活跃分类标签
function setActiveCategory(category) {
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

// 加载并显示游戏
function loadAndDisplayGames() {
    showLoadingSkeleton();
    
    setTimeout(() => {
        // 获取筛选后的游戏
        filteredGames = getFilteredGames();
        
        // 重置显示计数
        displayedGamesCount = 0;
        
        // 显示游戏
        displayGames(true);
        
        // 更新结果统计
        updateResultsCount();
        
        // 更新加载更多按钮状态
        updateLoadMoreButton();
        
    }, 500); // 模拟加载时间
}

// 获取筛选后的游戏
function getFilteredGames() {
    let games = gameData.getGamesByCategory(currentCategory);
    
    // 应用评分筛选
    if (currentRatingFilter > 0) {
        games = games.filter(game => game.rating >= currentRatingFilter);
    }
    
    // 应用标签筛选
    if (currentTagFilter) {
        games = games.filter(game => 
            game.tags.some(tag => tag.includes(currentTagFilter))
        );
    }
    
    // 应用排序
    games = sortGames(games, currentSort);
    
    return games;
}

// 排序游戏
function sortGames(games, sortType) {
    const gamesCopy = [...games];
    
    switch(sortType) {
        case 'popularity':
            return gamesCopy.sort((a, b) => b.plays - a.plays);
        case 'rating':
            return gamesCopy.sort((a, b) => b.rating - a.rating);
        case 'newest':
            return gamesCopy.sort((a, b) => {
                // 假设新游戏在数组中的位置靠后
                const aIndex = gameData.games.indexOf(a);
                const bIndex = gameData.games.indexOf(b);
                return bIndex - aIndex;
            });
        case 'name':
            return gamesCopy.sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
        default:
            return gamesCopy;
    }
}

// 显示游戏
function displayGames(isInitial = false) {
    const container = document.getElementById('gamesContainer');
    
    if (isInitial) {
        container.innerHTML = '';
        displayedGamesCount = 0;
    }
    
    if (filteredGames.length === 0) {
        showNoResults();
        return;
    }
    
    hideNoResults();
    
    const startIndex = displayedGamesCount;
    const endIndex = Math.min(startIndex + gamesPerPage, filteredGames.length);
    const gamesToShow = filteredGames.slice(startIndex, endIndex);
    
    // 生成游戏卡片HTML
    const gamesHtml = gamesToShow.map(game => generateGameCardHtml(game)).join('');
    
    if (isInitial) {
        container.innerHTML = gamesHtml;
    } else {
        container.insertAdjacentHTML('beforeend', gamesHtml);
    }
    
    displayedGamesCount = endIndex;
    
    // 添加动画效果
    setTimeout(() => {
        const newCards = container.querySelectorAll('.game-card:not(.animated)');
        newCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in', 'animated');
            }, index * 100);
        });
    }, 100);
}

// 生成游戏卡片HTML
function generateGameCardHtml(game) {
    if (currentViewMode === 'list') {
        return `
            <div class="game-card" onclick="playGame('${game.id}')">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.title}" loading="lazy">
                </div>
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-stats">
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <span>${game.rating}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-play"></i>
                            <span>${formatPlayCount(game.plays)}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-tag"></i>
                            <span>${gameData.categories[game.category]}</span>
                        </div>
                    </div>
                    <div class="game-meta">
                        <span class="game-category">${gameData.categories[game.category]}</span>
                        <div class="game-rating">
                            <i class="fas fa-star"></i>
                            <span>${game.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return gameUtils.generateGameCard(game);
    }
}

// 显示加载骨架屏
function showLoadingSkeleton() {
    const container = document.getElementById('gamesContainer');
    const skeletonHtml = Array(6).fill().map(() => `
        <div class="game-skeleton">
            <div class="skeleton-image"></div>
            <div class="skeleton-content">
                <div class="skeleton-title"></div>
                <div class="skeleton-text"></div>
                <div class="skeleton-text"></div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `<div class="loading-games">${skeletonHtml}</div>`;
}

// 显示无结果消息
function showNoResults() {
    document.getElementById('noResults').style.display = 'block';
    document.getElementById('gamesContainer').innerHTML = '';
    document.querySelector('.load-more-container').style.display = 'none';
}

// 隐藏无结果消息
function hideNoResults() {
    document.getElementById('noResults').style.display = 'none';
    document.querySelector('.load-more-container').style.display = 'block';
}

// 更新结果统计
function updateResultsCount() {
    const countElement = document.getElementById('resultsCount');
    const totalCount = filteredGames.length;
    const displayedCount = Math.min(displayedGamesCount, totalCount);
    
    if (totalCount === 0) {
        countElement.textContent = '未找到匹配的游戏';
    } else {
        countElement.textContent = `显示 ${displayedCount} / ${totalCount} 个游戏`;
    }
}

// 更新加载更多按钮状态
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hasMore = displayedGamesCount < filteredGames.length;
    
    loadMoreBtn.disabled = !hasMore;
    loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
    
    if (hasMore) {
        const remaining = filteredGames.length - displayedGamesCount;
        loadMoreBtn.innerHTML = `<i class="fas fa-plus"></i> 加载更多游戏 (${remaining})`;
    }
}

// 加载更多游戏
function loadMoreGames() {
    if (displayedGamesCount < filteredGames.length) {
        displayGames(false);
        updateResultsCount();
        updateLoadMoreButton();
    }
}

// 设置视图模式
function setViewMode(mode) {
    currentViewMode = mode;
    
    // 更新按钮状态
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        if (btn.getAttribute('data-view') === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // 更新容器类名
    const container = document.getElementById('gamesContainer');
    container.className = `games-container ${mode}-view`;
    
    // 重新显示游戏
    displayGames(true);
}

// 清除所有筛选
function clearAllFilters() {
    currentSort = 'popularity';
    currentRatingFilter = 0;
    currentTagFilter = '';
    
    document.getElementById('sortSelect').value = currentSort;
    document.getElementById('ratingFilter').value = currentRatingFilter;
    document.getElementById('tagFilter').value = currentTagFilter;
    
    loadAndDisplayGames();
}

// 重置筛选
function resetFilters() {
    currentCategory = 'all';
    setActiveCategory('all');
    clearAllFilters();
}

// 搜索游戏
function searchGames(query) {
    if (!query) {
        loadAndDisplayGames();
        return;
    }
    
    showLoadingSkeleton();
    
    setTimeout(() => {
        const searchResults = gameData.searchGames(query);
        filteredGames = sortGames(searchResults, currentSort);
        displayedGamesCount = 0;
        displayGames(true);
        updateResultsCount();
        updateLoadMoreButton();
        
        // 高亮搜索关键词
        highlightSearchTerms(query);
    }, 300);
}

// 高亮搜索关键词
function highlightSearchTerms(query) {
    const cards = document.querySelectorAll('.game-card');
    cards.forEach(card => {
        const title = card.querySelector('.game-title');
        const description = card.querySelector('.game-description');
        
        if (title) {
            title.innerHTML = highlightText(title.textContent, query);
        }
        if (description) {
            description.innerHTML = highlightText(description.textContent, query);
        }
    });
}

// 高亮文本
function highlightText(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// 播放游戏
function playGame(gameId) {
    window.location.href = `game.html?id=${gameId}`;
}

// 格式化播放次数
function formatPlayCount(count) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// 性能优化：虚拟滚动（当游戏数量很大时）
class VirtualScroll {
    constructor(container, items, itemHeight, renderItem) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.renderItem = renderItem;
        this.visibleStart = 0;
        this.visibleEnd = 0;
        this.totalHeight = items.length * itemHeight;
        
        this.init();
    }
    
    init() {
        this.container.style.height = `${this.totalHeight}px`;
        this.container.style.position = 'relative';
        
        this.updateVisibleItems();
        this.bindEvents();
    }
    
    updateVisibleItems() {
        const scrollTop = this.container.scrollTop;
        const containerHeight = this.container.clientHeight;
        
        this.visibleStart = Math.floor(scrollTop / this.itemHeight);
        this.visibleEnd = Math.min(
            this.visibleStart + Math.ceil(containerHeight / this.itemHeight) + 1,
            this.items.length
        );
        
        this.render();
    }
    
    render() {
        const fragment = document.createDocumentFragment();
        
        for (let i = this.visibleStart; i < this.visibleEnd; i++) {
            const item = this.items[i];
            const element = this.renderItem(item);
            element.style.position = 'absolute';
            element.style.top = `${i * this.itemHeight}px`;
            fragment.appendChild(element);
        }
        
        this.container.innerHTML = '';
        this.container.appendChild(fragment);
    }
    
    bindEvents() {
        this.container.addEventListener('scroll', () => {
            this.updateVisibleItems();
        });
    }
}

// 导出到全局作用域的函数
window.selectCategory = selectCategory;
window.setViewMode = setViewMode;
window.clearAllFilters = clearAllFilters;
window.resetFilters = resetFilters;
window.loadMoreGames = loadMoreGames;
window.playGame = playGame;
window.searchGames = searchGames; 