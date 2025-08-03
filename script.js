document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name && email && message) {
                // Show success message with animation
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.backgroundColor = 'var(--success-color)';
                
                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    submitBtn.style.backgroundColor = '';
                }, 3000);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
    
    // Add animation to feature cards on scroll
    const animateOnScroll = () => {
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize feature card animations
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        featureCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.6s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        // Trigger once on load in case cards are already visible
        animateOnScroll();
    }
});
