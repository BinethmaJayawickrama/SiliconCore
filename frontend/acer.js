// Acer Products Data
const acerProducts = [
    {
        id: 1,
        model: "Swift 3 SF314",
        processor: "Intel Core i7-1165G7",
        year: 2021,
        screen: "14\" FHD IPS",
        ram: "16GB LPDDR4X",
        storage: "512GB NVMe SSD",
        condition: "Excellent",
        battery: "91%",
        price: 599,
        originalPrice: 999,
        image: "https://crdms.images.consumerreports.org/prod/products/cr/models/406326-14-inch-laptops-acer-swift-3-sf314-512-52mz-10029590.png",
        colors: ["Silver", "Gold"]
    },
    {
        id: 2,
        model: "Predator Helios 300",
        processor: "Intel Core i7-11800H",
        year: 2021,
        screen: "15.6\" QHD 165Hz",
        ram: "16GB DDR4",
        storage: "1TB NVMe SSD",
        condition: "Good",
        battery: "87%",
        price: 999,
        originalPrice: 1599,
        image: "https://i5.walmartimages.com/asr/a8a08af7-fb31-49ca-8de3-2e7e268720a3_1.95fac757f3094c2e7a558c729a5d85b9.jpeg",
        colors: ["Black"]
    },
    {
        id: 3,
        model: "Aspire 5 A515",
        processor: "AMD Ryzen 5 5500U",
        year: 2021,
        screen: "15.6\" FHD IPS",
        ram: "8GB DDR4",
        storage: "512GB NVMe SSD",
        condition: "Good",
        battery: "89%",
        price: 449,
        originalPrice: 699,
        image: "https://lap.lk/wp-content/uploads/2024/01/1-25-1.jpg",
        colors: ["Silver"]
    },
    {
        id: 4,
        model: "Spin 5 SP513",
        processor: "Intel Core i5-1135G7",
        year: 2021,
        screen: "13.5\" 2K IPS Touch",
        ram: "8GB LPDDR4X",
        storage: "512GB NVMe SSD",
        condition: "Excellent",
        battery: "93%",
        price: 649,
        originalPrice: 1099,
        image: "https://laptopmedia.com/wp-content/uploads/2017/06/Acer-Spin-5-SP513-1.jpg",
        colors: ["Gray"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('acer-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Acer Laptops found</h3>
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
        "Silver": "#C0C0C0",
        "Gold": "#FFD700",
        "Black": "#000000",
        "Gray": "#808080"
    };
    return colors[colorName] || "#83B81A";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(acerProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'acer-laptops.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);