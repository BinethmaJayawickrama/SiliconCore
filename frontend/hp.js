// HP Products Data
const hpProducts = [
    {
        id: 1,
        model: "HP EliteBook 840 G8",
        processor: "Intel Core i7-1165G7",
        year: 2021,
        screen: "14\" FHD IPS",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        condition: "Excellent",
        battery: "94%",
        price: 699,
        originalPrice: 1599,
        image: "https://m.media-amazon.com/images/I/715LNG70-KL._AC_SL1441_.jpg",
        colors: ["Silver"]
    },
    {
        id: 2,
        model: "HP ProBook 450 G8",
        processor: "Intel Core i5-1135G7",
        year: 2021,
        screen: "15.6\" FHD",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        condition: "Good",
        battery: "88%",
        price: 549,
        originalPrice: 1199,
        image: "https://m.media-amazon.com/images/I/61nkN0ClxkL._AC_SL1395_.jpg",
        colors: ["Silver"]
    },
    {
        id: 3,
        model: "HP Spectre x360 14",
        processor: "Intel Core i7-1165G7",
        year: 2021,
        screen: "13.5\" 3K2K OLED Touch",
        ram: "16GB DDR4",
        storage: "1TB SSD",
        condition: "Excellent",
        battery: "92%",
        price: 899,
        originalPrice: 1799,
        image: "https://www.techspot.com/images/products/2020/laptops/org/2023-12-18-product-2.jpg",
        colors: ["Nightfall Black", "Poseidon Blue"]
    },
    {
        id: 4,
        model: "HP ZBook Firefly 15 G8",
        processor: "Intel Core i7-1185G7",
        year: 2021,
        screen: "15.6\" FHD IPS",
        ram: "32GB DDR4",
        storage: "1TB NVMe SSD",
        condition: "Like New",
        battery: "96%",
        price: 1099,
        originalPrice: 2299,
        image: "https://www.asifcomputers.com/wp-content/uploads/2022/04/HP-ZBOOK-FireFly-15-G8-1200x900.jpg",
        colors: ["Silver"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('hp-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No HP Laptops found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const savings = Math.round(((product.originalPrice - product.price) / product.originalPrice * 100));
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.model} ${product.year}" loading="lazy">
                <div class="condition-badge ${product.condition.toLowerCase().replace(' ', '-')}">
                    ${product.condition}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.model}</h3>
                <div class="product-chip">${product.processor}</div>
                <div class="product-specs">
                    <div class="spec">
                        <i class="fas fa-tv"></i>
                        <span>${product.screen}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-memory"></i>
                        <span>${product.ram}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-hdd"></i>
                        <span>${product.storage}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-battery-three-quarters"></i>
                        <span>${product.battery} Battery</span>
                    </div>
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => 
                        `<span class="color-dot" style="background-color: ${getColorHex(color)}"></span>`
                    ).join('')}
                </div>
                <div class="product-pricing">
                    <div class="original-price">$${product.originalPrice}</div>
                    <div class="current-price">$${product.price}</div>
                    <div class="savings-badge">Save ${savings}%</div>
                </div>
                <button class="cta-button">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Helper function to get color hex values
function getColorHex(colorName) {
    const colors = {
        "Silver": "#c0c0c0",
        "Nightfall Black": "#1a1a1a",
        "Poseidon Blue": "#1e3a8a",
        "Natural Silver": "#d3d3d3"
    };
    return colors[colorName] || "#0096D6";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(hpProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'hp-laptops.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);