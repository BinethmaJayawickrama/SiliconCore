// Enhanced Brand Data
const brandsData = [
    {
        id: 1,
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        models: ["MacBook Air", "MacBook Pro", "MacBook"],
        priceFrom: 499,
        priceTo: 1499,
        newPriceFrom: 999,
        newPriceTo: 2499,
        rating: 4.8,
        stock: 42
    },
    {
        id: 2,
        name: "Dell",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
        models: ["XPS", "Latitude", "Inspiron", "Vostro"],
        priceFrom: 299,
        priceTo: 999,
        newPriceFrom: 599,
        newPriceTo: 1999,
        rating: 4.5,
        stock: 38
    },
    {
        id: 3,
        name: "HP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
        models: ["EliteBook", "ProBook", "Pavilion", "Envy"],
        priceFrom: 249,
        priceTo: 899,
        newPriceFrom: 499,
        newPriceTo: 1799,
        rating: 4.3,
        stock: 56
    },
    {
        id: 4,
        name: "Lenovo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png",
        models: ["ThinkPad", "Yoga", "IdeaPad", "Legion"],
        priceFrom: 279,
        priceTo: 1099,
        newPriceFrom: 549,
        newPriceTo: 2199,
        rating: 4.6,
        stock: 47
    },
    {
        id: 5,
        name: "ASUS",
        logo: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png",
        models: ["ZenBook", "VivoBook", "ROG", "TUF"],
        priceFrom: 349,
        priceTo: 1299,
        newPriceFrom: 699,
        newPriceTo: 2499,
        rating: 4.4,
        stock: 33
    },
    {
        id: 6,
        name: "Acer",
        logo: "https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo.png",
        models: ["Aspire", "Swift", "Predator", "Nitro"],
        priceFrom: 199,
        priceTo: 899,
        newPriceFrom: 399,
        newPriceTo: 1799,
        rating: 4.2,
        stock: 29
    },
    {
        id: 7,
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        models: ["Surface Laptop", "Surface Pro", "Surface Book"],
        priceFrom: 599,
        priceTo: 1399,
        newPriceFrom: 999,
        newPriceTo: 2499,
        rating: 4.7,
        stock: 18
    },
    {
        id: 8,
        name: "Razer",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Razer_logo.svg",
        models: ["Blade", "Blade Pro", "Blade Stealth"],
        priceFrom: 999,
        priceTo: 1999,
        newPriceFrom: 1799,
        newPriceTo: 3499,
        rating: 4.9,
        stock: 12
    }
];

// DOM Elements
const brandsGrid = document.getElementById('brands-grid');
const comparisonChart = document.getElementById('comparison-chart');

// Display Brands
function displayBrands(brands) {
    brandsGrid.innerHTML = '';
    
    if (brands.length === 0) {
        brandsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No brands found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    brands.forEach(brand => {
        const savings = Math.round(((brand.newPriceFrom - brand.priceFrom) / brand.newPriceFrom * 100));
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
            <div class="brand-logo">
                <img src="${brand.logo}" alt="${brand.name} logo">
            </div>
            <div class="brand-info">
                <h3>${brand.name}</h3>
                <div class="brand-meta">
                    <span class="rating">
                        <i class="fas fa-star"></i> ${brand.rating}
                    </span>
                    <span class="stock">
                        <i class="fas fa-box-open"></i> ${brand.stock} in stock
                    </span>
                </div>
                <p class="brand-models">${brand.models.join(', ')}</p>
                <div class="price-range">
                    <div class="price-from">
                        <div class="price-label">From</div>
                        <div class="price-amount">$${brand.priceFrom}</div>
                    </div>
                    <div class="price-to">
                        <div class="price-label">To</div>
                        <div class="price-amount">$${brand.priceTo}</div>
                    </div>
                </div>
                <a href="${brand.name.toLowerCase()}.html" class="brand-btn">View ${brand.name} Laptops</a>
            </div>
        `;
        brandsGrid.appendChild(brandCard);
    });
}

// Display Price Comparison
function displayPriceComparison(brands) {
    comparisonChart.innerHTML = '';
    
    brands.forEach(brand => {
        const savings = Math.round(((brand.newPriceFrom - brand.priceFrom) / brand.newPriceFrom * 100));
        
        const chartRow = document.createElement('div');
        chartRow.className = 'chart-row';
        chartRow.innerHTML = `
            <div class="chart-brand">${brand.name}</div>
            <div class="chart-price original-price">$${brand.newPriceFrom}</div>
            <div class="chart-price our-price">$${brand.priceFrom}</div>
            <div class="chart-savings">${savings}%</div>
        `;
        comparisonChart.appendChild(chartRow);
    });
}

// Initialize the page
function initPage() {
    displayBrands(brandsData);
    displayPriceComparison(brandsData);
    
    // Highlight current page in navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === 'brands.html') {
            link.classList.add('active');
        }
    });
}

// When DOM is fully loaded
document.addEventListener('DOMContentLoaded', initPage);