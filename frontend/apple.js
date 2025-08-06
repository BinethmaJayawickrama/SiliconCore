// Apple Products Data
const appleProducts = [
    {
        id: 1,
        model: "MacBook Air",
        chip: "M2 Chip",
        year: 2022,
        screen: "13.6\" Liquid Retina",
        ram: "8GB",
        storage: "256GB SSD",
        condition: "Excellent",
        battery: "92%",
        price: 799,
        originalPrice: 1199,
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606",
        colors: ["Silver", "Space Gray", "Gold", "Midnight"]
    },
    {
        id: 2,
        model: "MacBook Pro",
        chip: "M1 Pro",
        year: 2021,
        screen: "14\" Liquid Retina XDR",
        ram: "16GB",
        storage: "512GB SSD",
        condition: "Like New",
        battery: "95%",
        price: 1299,
        originalPrice: 1999,
        image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
        colors: ["Silver", "Space Gray"]
    },
    {
        id: 3,
        model: "MacBook Air",
        chip: "M1 Chip",
        year: 2020,
        screen: "13.3\" Retina",
        ram: "8GB",
        storage: "256GB SSD",
        condition: "Good",
        battery: "87%",
        price: 649,
        originalPrice: 999,
        image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111883_macbookair.png",
        colors: ["Gold", "Silver", "Space Gray"]
    },
    {
        id: 4,
        model: "MacBook Pro",
        chip: "M2 Max",
        year: 2023,
        screen: "16\" Liquid Retina XDR",
        ram: "32GB",
        storage: "1TB SSD",
        condition: "Excellent",
        battery: "98%",
        price: 2499,
        originalPrice: 3499,
        image: "https://cdn.shopify.com/s/files/1/0306/8677/files/apple-macbook-pro-14-inch-macbook-pro-14-inch-m3-pro-11-core-space-black-2023-excellent-46542734623036.jpg",
        colors: ["Silver", "Space Gray"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('apple-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No MacBooks found</h3>
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
                <h3>${product.model} ${product.year}</h3>
                <div class="product-chip">${product.chip}</div>
                <div class="product-specs">
                    <div class="spec">
                        <i class="fas fa-tv"></i>
                        <span>${product.screen}</span>
                    </div>
                    <div class="spec">
                        <i class="fas fa-memory"></i>
                        <span>${product.ram} RAM</span>
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
        "Silver": "#e2e2e2",
        "Space Gray": "#535150",
        "Gold": "#f5e5cd",
        "Midnight": "#171e27",
        "Rose Gold": "#fad7bd"
    };
    return colors[colorName] || "#ccc";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(appleProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'apple.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);