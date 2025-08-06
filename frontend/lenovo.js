// Lenovo Products Data
const lenovoProducts = [
    {
        id: 1,
        model: "ThinkPad X1 Carbon Gen 9",
        processor: "Intel Core i7-1165G7",
        year: 2021,
        screen: "14\" FHD IPS",
        ram: "16GB LPDDR4x",
        storage: "512GB NVMe SSD",
        condition: "Excellent",
        battery: "93%",
        price: 899,
        originalPrice: 1899,
        image: "https://m.media-amazon.com/images/I/51FOmWwmqaL.jpg",
        colors: ["Black"]
    },
    {
        id: 2,
        model: "ThinkPad T14 Gen 2",
        processor: "Intel Core i5-1135G7",
        year: 2021,
        screen: "14\" FHD IPS",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        condition: "Good",
        battery: "89%",
        price: 649,
        originalPrice: 1399,
        image: "https://laptopmedia.com/wp-content/uploads/2021/02/1-23-e1614151069983.jpg",
        colors: ["Black"]
    },
    {
        id: 3,
        model: "Yoga 9i Gen 7",
        processor: "Intel Core i7-1260P",
        year: 2022,
        screen: "14\" 4K OLED Touch",
        ram: "16GB LPDDR5",
        storage: "1TB NVMe SSD",
        condition: "Like New",
        battery: "97%",
        price: 1099,
        originalPrice: 2199,
        image: "https://m.media-amazon.com/images/I/51II68yyVYL._UF894,1000_QL80_.jpg",
        colors: ["Shadow Black", "Storm Grey"]
    },
    {
        id: 4,
        model: "Legion 5 Pro",
        processor: "AMD Ryzen 7 5800H",
        year: 2021,
        screen: "16\" QHD 165Hz",
        ram: "16GB DDR4",
        storage: "1TB NVMe SSD",
        condition: "Excellent",
        battery: "91%",
        price: 999,
        originalPrice: 1799,
        image: "https://images-cdn.ubuy.co.in/633ffa0e52ed294bab4e3ea2-lenovo-legion-5-pro-gaming-laptop.jpg",
        colors: ["Storm Grey"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('lenovo-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Lenovo Laptops found</h3>
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
        "Black": "#000000",
        "Shadow Black": "#2A2A2A",
        "Storm Grey": "#6B6B6B",
        "Titanium": "#878681"
    };
    return colors[colorName] || "#E2231A";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(lenovoProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'lenovo-laptops.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);