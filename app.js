// Auto Docker Website - Custom JavaScript
// Enhanced functionality for smooth user experience

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    
    function openMobileMenu() {
        mobileMenu.classList.remove('hidden');
        document.body.classList.add('menu-open');
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('menu-open');
    }
    
    if (mobileMenuBtn && mobileMenu) {
        // Open mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileMenu();
        });
        
        // Close button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeMobileMenu();
            });
        }
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking on the backdrop
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                closeMobileMenu();
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for sticky header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Dark mode toggle (optional, if you want to add a toggle button)
    function initDarkMode() {
        const darkModePreference = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (darkModePreference === 'dark' || (!darkModePreference && prefersDark)) {
            document.documentElement.classList.add('dark');
        } else if (darkModePreference === 'light') {
            document.documentElement.classList.remove('dark');
        }
    }
    
    initDarkMode();
    
    // Track external link clicks (for analytics)
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            const href = this.getAttribute('href');
            console.log('External link clicked:', href);
            // Add your analytics tracking here
            // Example: gtag('event', 'click', { 'event_category': 'external_link', 'event_label': href });
        });
    });
    
    // Add click tracking for CTA buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            console.log('Button clicked:', buttonText);
            // Add your analytics tracking here
            // Example: gtag('event', 'click', { 'event_category': 'button', 'event_label': buttonText });
        });
    });
    
    // Preload critical images
    function preloadImages() {
        const images = [
            // Add any critical images here
            // '/images/hero-bg.jpg',
            // '/images/logo.png'
        ];
        
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    preloadImages();
    
    // Handle keyboard navigation
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    });
    
    // Add loading indicator for buttons with external links
    document.querySelectorAll('button[onclick*="location.href"]').forEach(button => {
        button.addEventListener('click', function() {
            const originalHTML = this.innerHTML;
            this.disabled = true;
            this.style.opacity = '0.7';
            this.innerHTML = '<span class="material-symbols-outlined animate-spin">autorenew</span>';
            
            // Reset after navigation (in case it fails)
            setTimeout(() => {
                this.disabled = false;
                this.style.opacity = '1';
                this.innerHTML = originalHTML;
            }, 3000);
        });
    });
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log('Page load time:', pageLoadTime + 'ms');
                
                // Send to analytics if needed
                // Example: gtag('event', 'timing_complete', { 'name': 'load', 'value': pageLoadTime });
            }, 0);
        });
    }
    
    // Add copy-to-clipboard functionality for code blocks (if needed)
    document.querySelectorAll('pre code').forEach((codeBlock) => {
        const button = document.createElement('button');
        button.className = 'absolute top-2 right-2 px-3 py-1 bg-primary/20 hover:bg-primary/30 text-primary text-xs rounded transition-all';
        button.textContent = 'Copy';
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(codeBlock.textContent);
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
        
        const pre = codeBlock.parentElement;
        if (pre.tagName === 'PRE') {
            pre.style.position = 'relative';
            pre.appendChild(button);
        }
    });
    
    // Console easter egg
    console.log('%c🐳 Auto Docker Extension', 'font-size: 20px; font-weight: bold; color: #13c8ec;');
    console.log('%cContainerize apps in seconds!', 'font-size: 14px; color: #3b82f6;');
    console.log('%cVisit: https://marketplace.visualstudio.com/items?itemName=ShinjanSarkar.auto-docker-extension', 'font-size: 12px; color: #64748b;');
});

// Service Worker Registration (optional, for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed:', err));
    });
}
