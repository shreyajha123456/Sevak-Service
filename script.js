document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            if (navbarMenu.style.display === 'flex') {
                navbarMenu.style.display = 'none';
            } else {
                navbarMenu.style.display = 'flex';
                navbarMenu.style.flexDirection = 'column';
                navbarMenu.style.position = 'absolute';
                navbarMenu.style.top = '60px';
                navbarMenu.style.left = '0';
                navbarMenu.style.right = '0';
                navbarMenu.style.backgroundColor = 'white';
                navbarMenu.style.padding = '1rem';
                navbarMenu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                navbarMenu.style.zIndex = '1000';
                navbarMenu.style.gap = '1rem';
            }
        });
    }
    
    // Close mobile menu when clicking on a menu item
    const navbarItems = document.querySelectorAll('.navbar-item');
    navbarItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navbarMenu.style.display = 'none';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add fixed navbar bg when scrolling
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.backgroundColor = 'white';
        }
    });
    
    // Add animation on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75 && sectionBottom > 0) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    document.querySelectorAll('section:not(.hero)').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Call animation function on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Handle service card hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Responsive search bar
    const updateSearchBox = function() {
        const searchBox = document.querySelector('.search-box');
        if (!searchBox) return;
        
        if (window.innerWidth >= 768) {
            searchBox.style.flexDirection = 'row';
            const searchInputs = document.querySelectorAll('.search-input');
            searchInputs.forEach(input => {
                input.style.marginBottom = '0';
                input.style.marginRight = '0.5rem';
            });
        } else {
            searchBox.style.flexDirection = 'column';
            const searchInputs = document.querySelectorAll('.search-input');
            searchInputs.forEach(input => {
                input.style.marginBottom = '0.5rem';
                input.style.marginRight = '0';
            });
        }
    };
    
    // Call responsive functions on load and resize
    window.addEventListener('load', updateSearchBox);
    window.addEventListener('resize', updateSearchBox);
    
    // Add current year to footer copyright
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', new Date().getFullYear());
    }
});
