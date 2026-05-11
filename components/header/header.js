// Reusable Header Component Injector
// Safely loads component without CORS issues on local file:// protocol

document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.getElementById('header-component');
    if (headerContainer) {
        // Detect if we are in the root directory or a subdirectory
        // This project uses a body ID of 'home' for the root index.html
        const isRoot = document.body.id === 'home';
        const prefix = isRoot ? '' : '../';
        
        const headerHTML = `
<header>
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
                <a href="${prefix}Services/index.html" id="nav-services" class="dropdown-toggle">Coverages <i class="fas fa-plus" style="font-size: 0.7rem; margin-left: 5px;"></i></a>
                <ul class="dropdown-menu">
                    <li><a href="${prefix}General-Liability-Insurance/index.html">General Liability Insurance</a></li>
                    <li><a href="${prefix}Services/index.html#auto">Auto Insurance</a></li>
                    <li><a href="${prefix}Services/index.html#classic-cars">Classic Cars</a></li>
                    <li><a href="${prefix}Services/index.html#commercial">Commercial</a></li>
                    <li><a href="${prefix}Services/index.html#dwelling">Dwelling</a></li>
                    <li><a href="${prefix}Services/index.html#home-owners">Home Owners</a></li>
                    <li><a href="${prefix}Services/index.html#jewelry">Jewelry</a></li>
                    <li><a href="${prefix}Services/index.html#motorcycle">Motorcycle</a></li>
                    <li><a href="${prefix}Services/index.html#natural-disaster">Natural Disaster</a></li>
                    <li><a href="${prefix}Services/index.html#renters">Renters</a></li>
                    <li><a href="${prefix}Services/index.html#umbrella">Umbrella</a></li>
                    <li><a href="${prefix}Services/index.html#watercraft">Watercraft</a></li>
                </ul>
            </li>
            <li><a href="${prefix}Forms/index.html" id="nav-forms">Forms</a></li>
            <li><a href="${prefix}Contact/index.html" id="nav-contact">Contact Us</a></li>
            
            <!-- Mobile Actions (Hidden on Desktop) -->
            <li class="mobile-only-action"><a href="${prefix}Quote/index.html" class="btn-quote-mobile">Get a Quote</a></li>
        </ul>

        <div class="header-actions">
            <a href="${prefix}Quote/index.html" class="btn-quote" style="background: #0088CC; padding: 12px 25px; border-radius: 4px; font-weight: 700; text-transform: none; font-size: 1rem;">Get a Quote</a>
            <a href="#" class="btn-login" style="background: #0088CC; color: white; padding: 12px 25px; border-radius: 4px; font-weight: 700; text-decoration: none; font-size: 1rem;">Customer login</a>
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
        if (dropdownToggle && window.innerWidth <= 768) {
            dropdownToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const parent = dropdownToggle.parentElement;
                parent.classList.toggle('active-dropdown');
            });
        }
    }
});
