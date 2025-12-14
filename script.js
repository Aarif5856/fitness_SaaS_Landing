// ===================================
// FITPULSE PREMIUM INTERACTIONS
// UI8-Level Smooth Animations
// ===================================

// ===================================
// NAVIGATION
// ===================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect for navbar
let lastScrollY = window.scrollY;
let ticking = false;

function updateNavbar() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle) navToggle.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offset = 70;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// SCROLL ANIMATIONS - STAGGERED
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    scrollObserver.observe(el);
});

// ===================================
// FAQ ACCORDION
// ===================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ===================================
// FLOATING CARDS PARALLAX
// ===================================

const heroVisual = document.querySelector('.hero-visual');
const floatingCards = document.querySelectorAll('.floating-card');

if (heroVisual && floatingCards.length > 0) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        if (e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom) {
            mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
            mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
        }
    });
    
    heroVisual.addEventListener('mouseleave', () => {
        mouseX = 0;
        mouseY = 0;
    });
    
    function animateCards() {
        // Smooth interpolation with easing
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        
        floatingCards.forEach((card, index) => {
            const speed = (index + 1) * 18;
            const x = currentX * speed;
            const y = currentY * speed;
            
            card.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        requestAnimationFrame(animateCards);
    }
    
    animateCards();
}

// ===================================
// PREMIUM BUTTON EFFECTS
// ===================================

// Button glow follow effect
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===================================
// CARD TILT EFFECT - PREMIUM
// ===================================

const tiltCards = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card, .why-choose-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 30;
        const rotateY = (centerX - x) / 30;
        
        // Get existing transform to preserve scale
        const currentTransform = window.getComputedStyle(this).transform;
        const hasScale = this.classList.contains('pricing-card-featured');
        const baseScale = hasScale ? 'scale(1.05)' : '';
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) ${baseScale}`;
    });
    
    card.addEventListener('mouseleave', function() {
        const hasScale = this.classList.contains('pricing-card-featured');
        this.style.transform = hasScale ? 'scale(1.05)' : '';
    });
});

// ===================================
// APP SHOWCASE PARALLAX
// ===================================

const appShowcaseItems = document.querySelectorAll('.app-showcase-item');

appShowcaseItems.forEach((item, index) => {
    const mockup = item.querySelector('.app-showcase-mockup');
    
    item.addEventListener('mousemove', function(e) {
        const rect = mockup.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        const rotateY = x * 8;
        const rotateX = -y * 5;
        
        mockup.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-10px) scale(1.05)`;
    });
    
    item.addEventListener('mouseleave', function() {
        // Return to original tilt based on position
        if (index === 0) {
            mockup.style.transform = 'perspective(1000px) rotateY(12deg) translateX(20px)';
        } else if (index === 2) {
            mockup.style.transform = 'perspective(1000px) rotateY(-12deg) translateX(-20px)';
        } else {
            mockup.style.transform = '';
        }
    });
});

// ===================================
// COUNTER ANIMATION
// ===================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return Math.floor(num / 1000) + 'K+';
    }
    return num.toString();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            
            statValues.forEach(stat => {
                const text = stat.textContent;
                let value = 0;
                
                if (text.includes('K+')) {
                    value = parseFloat(text) * 1000;
                } else if (text.includes('M+')) {
                    value = parseFloat(text) * 1000000;
                } else if (text.includes('/')) {
                    // Skip ratings
                    return;
                } else {
                    value = parseFloat(text);
                }
                
                if (value > 0) {
                    stat.textContent = '0';
                    animateCounter(stat, value);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// GRADIENT FOLLOW EFFECT
// ===================================

const gradientCards = document.querySelectorAll('.pricing-card, .why-choose-card, .feature-card');

gradientCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===================================
// PARALLAX BACKGROUND
// ===================================

let parallaxTicking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-glow, .ambient-glow, .cta-glow');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.2 + (index * 0.08);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    parallaxTicking = false;
}

window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
});

// ===================================
// CTA STAT CARDS HOVER
// ===================================

const ctaStats = document.querySelectorAll('.cta-stat');

ctaStats.forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(12px)';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===================================
// FORM HANDLING
// ===================================

const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('.newsletter-input');
        const email = input.value;
        
        if (email && isValidEmail(email)) {
            // Simulate success
            input.value = '';
            showToast('Successfully subscribed! 🎉');
        } else {
            showToast('Please enter a valid email address.');
        }
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(12, 12, 22, 0.95);
        color: white;
        padding: 16px 28px;
        border-radius: 16px;
        border: 1px solid rgba(99, 102, 241, 0.3);
        backdrop-filter: blur(20px);
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 40px rgba(99, 102, 241, 0.15);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // Remove after delay
    setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

// ===================================
// PRELOADER
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations with stagger
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.12}s`;
    });
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

// Improve accessibility for FAQ
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
    question.setAttribute('aria-expanded', 'false');
    
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
    
    // Update aria-expanded on toggle
    question.addEventListener('click', () => {
        setTimeout(() => {
            const isActive = item.classList.contains('active');
            question.setAttribute('aria-expanded', isActive.toString());
        }, 0);
    });
});

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===================================
// REDUCED MOTION SUPPORT
// ===================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-base', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// ===================================
// INITIALIZATION COMPLETE
// ===================================

console.log('✨ FitPulse Premium v3.0 - Loaded Successfully!');
