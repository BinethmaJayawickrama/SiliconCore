// ASUS Products Data
const asusProducts = [
    {
        id: 1,
        model: "ZenBook 14 UX425",
        processor: "Intel Core i7-1165G7",
        year: 2021,
        screen: "14\" FHD IPS",
        ram: "16GB LPDDR4x",
        storage: "512GB NVMe SSD",
        condition: "Excellent",
        battery: "92%",
        price: 799,
        originalPrice: 1399,
        image: "https://laptopmedia.com/wp-content/uploads/2020/07/download-e1611567906621.jpg",
        colors: ["Pine Grey", "Lilac Mist"]
    },
    {
        id: 2,
        model: "ROG Zephyrus G14",
        processor: "AMD Ryzen 9 5900HS",
        year: 2021,
        screen: "14\" QHD 120Hz",
        ram: "16GB DDR4",
        storage: "1TB NVMe SSD",
        condition: "Good",
        battery: "89%",
        price: 1099,
        originalPrice: 1799,
        image: "https://m.media-amazon.com/images/I/61LaJn-RayL._AC_SL1500_.jpg",
        colors: ["Moonlight White", "Eclipse Grey"]
    },
    {
        id: 3,
        model: "VivoBook S15",
        processor: "Intel Core i5-1135G7",
        year: 2021,
        screen: "15.6\" FHD IPS",
        ram: "8GB DDR4",
        storage: "512GB NVMe SSD",
        condition: "Good",
        battery: "87%",
        price: 599,
        originalPrice: 899,
        image: "https://laptopmedia.com/wp-content/uploads/2019/09/1-9.png",
        colors: ["Indie Black", "Dreamy White"]
    },
    {
        id: 4,
        model: "ROG Strix G17",
        processor: "AMD Ryzen 7 6800H",
        year: 2022,
        screen: "17.3\" FHD 144Hz",
        ram: "16GB DDR5",
        storage: "1TB NVMe SSD",
        condition: "Excellent",
        battery: "94%",
        price: 1299,
        originalPrice: 1999,
        image: "https://www.lklk.lk/storage/files/lk/1184/thumb-816x460-861f14d38689333374929d9bdf426784.jpg",
        colors: ["Black"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('asus-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No ASUS Laptops found</h3>
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
        "Pine Grey": "#4B4F54",
        "Lilac Mist": "#B5AEBE",
        "Moonlight White": "#F0F0F0",
        "Eclipse Grey": "#5A5A5A",
        "Indie Black": "#2A2A2A",
        "Dreamy White": "#F5F5F5"
    };
    return colors[colorName] || "#00539B";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(asusProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'asus-laptops.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);