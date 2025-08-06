// Dell Products Data
const dellProducts = [
    {
        id: 1,
        model: "XPS 13",
        chip: "Intel Core i7-1165G7",
        year: 2021,
        screen: "13.4\" FHD+ InfinityEdge",
        ram: "16GB",
        storage: "512GB SSD",
        condition: "Excellent",
        battery: "88%",
        price: 699,
        originalPrice: 1299,
        image: "https://m.media-amazon.com/images/I/81ZRWXB8l9L._UF1000,1000_QL80_.jpg",
        colors: ["Platinum Silver", "Frost White"]
    },
    {
        id: 2,
        model: "Latitude 5420",
        chip: "Intel Core i5-1145G7",
        year: 2021,
        screen: "14\" FHD",
        ram: "8GB",
        storage: "256GB SSD",
        condition: "Good",
        battery: "82%",
        price: 399,
        originalPrice: 1099,
        image: "https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-5420/media-gallery/la5420nt_cnb_00000ff090_gy_5000x5000_gettyimages-1254825733.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=557&qlt=100,1&resMode=sharp2&size=557,320&chrss=full",
        colors: ["Gray"]
    },
    {
        id: 3,
        model: "XPS 15",
        chip: "Intel Core i9-12900HK",
        year: 2022,
        screen: "15.6\" UHD+ OLED",
        ram: "32GB",
        storage: "1TB SSD",
        condition: "Like New",
        battery: "94%",
        price: 1299,
        originalPrice: 2499,
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/touch-black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3778&hei=2323&qlt=100,1&resMode=sharp2&size=3778,2323&chrss=full&imwidth=5000",
        colors: ["Platinum Silver", "Frost White"]
    },
    {
        id: 4,
        model: "Precision 5570",
        chip: "Intel Core i7-12800H",
        year: 2022,
        screen: "15.6\" UHD+",
        ram: "16GB",
        storage: "512GB SSD",
        condition: "Excellent",
        battery: "91%",
        price: 999,
        originalPrice: 1999,
        image: "https://m.media-amazon.com/images/I/71BLL5WRNiL.jpg",
        colors: ["Gray"]
    }
];

// DOM Elements
const productsGrid = document.getElementById('dell-products-grid');
const loadingElement = document.getElementById('loading');

// Display Products
function displayProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No Dell laptops found</h3>
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
        "Platinum Silver": "#e2e2e2",
        "Frost White": "#f5f5f5",
        "Gray": "#535150",
        "Black": "#171717"
    };
    return colors[colorName] || "#ccc";
}

// Initialize the page
function initPage() {
    // Show loading state initially
    loadingElement.style.display = 'flex';
    
    // Simulate data loading
    setTimeout(() => {
        displayProducts(dellProducts);
        loadingElement.style.display = 'none';
    }, 800);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'dell.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);