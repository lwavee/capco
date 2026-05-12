// Premium Header Component Injector
// Safely loads component without CORS issues on local file:// protocol

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-component');
    if (headerContainer) {
        // Detect if we are on the root home page or in a subdirectory
        const isHome = document.body.id === 'home' && !window.location.pathname.includes('/Home/');
        const prefix = isHome ? '' : '../';
        
        const headerHTML = `
<header id="main-header">
    <nav>
        <a href="${prefix}index.html" class="logo-container">
            <img src="${prefix}capco%20logo.png" alt="Capital & Co Insurance Services">
        </a>
        
        <!-- Mobile Toggle Button -->
        <div class="mobile-menu-toggle" id="mobile-toggle">
            <i class="fas fa-bars"></i>
        </div>

        <ul class="nav-links" id="nav-menu">
            <li><a href="${prefix}index.html" id="nav-home">Home</a></li>
            <li><a href="${prefix}About_us/index.html" id="nav-about">About Us</a></li>
            <li class="dropdown">
                <a href="${prefix}Services/index.html" id="nav-services" class="dropdown-toggle">Coverages <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-left: 5px;"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${prefix}General-Liability-Insurance/index.html" id="nav-gl-insurance">General Liability</a></li>
                    <li><a href="${prefix}Auto-Insurance/index.html" id="nav-auto-insurance">Auto Insurance</a></li>
                    <li><a href="${prefix}Classic-Cars/index.html" id="nav-classic-cars">Classic Cars</a></li>
                    <li><a href="${prefix}Commercial-Insurance/index.html" id="nav-commercial-insurance">Commercial</a></li>
                    <li><a href="${prefix}Dwelling-Insurance/index.html" id="nav-dwelling-insurance">Dwelling</a></li>
                    <li><a href="${prefix}Home-Owners/index.html" id="nav-home-owners">Home Owners</a></li>
                    <li><a href="${prefix}Jewelry/index.html" id="nav-jewelry-insurance">Jewelry</a></li>
                    <li><a href="${prefix}Motorcycle/index.html" id="nav-motorcycle-insurance">Motorcycle</a></li>
                    <li><a href="${prefix}Natural-Disaster/index.html" id="nav-natural-disaster">Natural Disaster</a></li>
                    <li><a href="${prefix}Renters/index.html" id="nav-renters-insurance">Renters</a></li>
                    <li><a href="${prefix}Umbrella/index.html" id="nav-umbrella-insurance">Umbrella</a></li>
                    <li><a href="${prefix}Watercraft/index.html" id="nav-watercraft-insurance">Watercraft</a></li>
                </ul>
            </li>
            <li><a href="${prefix}Contact/index.html" id="nav-contact">Contact Us</a></li>
            
            <!-- Mobile Actions (Hidden on Desktop) -->
            <li class="mobile-only-action"><a href="${prefix}Quote/index.html" class="btn-quote-mobile">Get a Quote</a></li>
        </ul>

        <div class="header-actions">
            <span class="license-pill">CA Lic #6002332</span>
            <a href="${prefix}Quote/index.html" class="btn-primary">Get a Quote</a>
        </div>
    </nav>
</header>
`;

        headerContainer.innerHTML = headerHTML;
        
        // Active state management based on body ID
        const pageId = document.body.id;
        if (pageId && document.getElementById('nav-' + pageId)) {
            document.getElementById('nav-' + pageId).classList.add('active');
        }

        // Scroll Effect for Header
        const mainHeader = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });

        // Trigger scroll once on load in case page is already scrolled
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        }

        // Mobile Menu Logic
        const toggleBtn = document.getElementById('mobile-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('show');
                const icon = toggleBtn.querySelector('i');
                if (navMenu.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }

        // Dropdown Logic for Mobile
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdownToggle && window.innerWidth <= 900) {
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = dropdownToggle.parentElement;
                parent.classList.toggle('active-dropdown');
            });
        }
    }
});
