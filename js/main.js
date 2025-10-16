// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(244, 251, 252, 0.95)';
            navbar.style.boxShadow = '0 2px 8px rgba(88, 200, 215, 0.1)';
        } else {
            navbar.style.background = 'rgba(244, 251, 252, 0.7)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // Video play button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            // In a real implementation, this would open a video modal or iframe
            alert('Video playback would start here. Replace with actual video implementation.');
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Product card hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 32px rgba(88, 200, 215, 0.2)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
    
    // Feature cards hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = '#ffffff';
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'var(--blue-01)';
            card.style.transform = 'scale(1)';
        });
    });
    
    // Form validation (for future contact form)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form validation and submission logic here
            console.log('Form submitted');
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease';
        });
    });
    
    // Mobile menu toggle (for future mobile implementation)
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            // Mobile menu logic would go here
            console.log('Mobile view detected');
        }
    };
    
    window.addEventListener('resize', createMobileMenu);
    createMobileMenu();
    
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Initialize animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero-section');
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection) {
        const heroBg = heroSection.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    }
});

// Bubble Animation System
class BubbleAnimation {
    constructor() {
        this.bubbleCount = 15; // Number of bubbles per click
        this.init();
    }

    init() {
        document.addEventListener('click', (e) => this.createBubbles(e));
    }

    createBubbles(e) {
        const x = e.clientX;
        const y = e.clientY;

        for (let i = 0; i < this.bubbleCount; i++) {
            this.createBubble(x, y, i);
        }
    }

    createBubble(x, y, index) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble-animation';
        
        // Random size between 10px and 30px
        const size = Math.random() * 20 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random angle for initial spurt (0-360 degrees)
        const angle = (Math.random() * 360) * (Math.PI / 180);
        
        // Random distance for initial spurt (30-80px)
        const distance = Math.random() * 50 + 30;
        
        // Calculate spurt destination
        const spurtX = x + Math.cos(angle) * distance;
        const spurtY = y + Math.sin(angle) * distance;
        
        // Set initial position
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;
        
        // Set CSS custom properties for animation
        bubble.style.setProperty('--spurt-x', `${spurtX - x}px`);
        bubble.style.setProperty('--spurt-y', `${spurtY - y}px`);
        bubble.style.setProperty('--float-distance', `${Math.random() * 200 + 300}px`);
        bubble.style.setProperty('--animation-delay', `${index * 0.02}s`);
        bubble.style.setProperty('--drift-x', `${(Math.random() - 0.5) * 100}px`);
        
        document.body.appendChild(bubble);
        
        // Remove bubble after animation completes
        setTimeout(() => {
            bubble.remove();
        }, 4000);
    }
}

// Initialize bubble animation when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BubbleAnimation();
});

// Console easter egg for developers
console.log('%c🌊 Biojet - Breathing fresh air into waste water solutions', 
    'color: #1890AE; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%cInterested in our technology? Contact us at info@biojet.com.cn', 
    'color: #175A78; font-size: 12px;');

