// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && e.target !== mobileMenuBtn) {
        mobileMenu.style.display = 'none';
    }
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
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Service card hover effect
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
});

// Search functionality (basic)
const searchButtons = document.querySelectorAll('.search-btn, .hero-search button');
searchButtons.forEach(button => {
    button.addEventListener('click', () => {
        let searchInput;
        if (button.classList.contains('search-btn')) {
            searchInput = document.querySelector('.search-bar input').value;
        } else {
            searchInput = document.querySelector('.hero-search input').value;
        }
        
        if (searchInput.trim() !== '') {
            alert(`Searching for: ${searchInput}`);
            // In a real implementation, you would redirect to search results
            // window.location.href = `/search?q=${encodeURIComponent(searchInput)}`;
        }
    });
});

// Simulate loading of more services when scrolling to bottom
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        // In a real implementation, you would fetch more data here
        console.log('Load more services...');
    }
});