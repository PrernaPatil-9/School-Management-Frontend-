// GSAP Animations for Little Wonders School

document.addEventListener('DOMContentLoaded', function() {
    // Only run GSAP animations if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        
        // Hero section animation
        gsap.from('.hero-content', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-image', {
            duration: 2,
            scale: 0.8,
            opacity: 0,
            ease: 'back.out(1.7)',
            delay: 0.5
        });
        
        // Animate school highlights on scroll
        gsap.utils.toArray('.highlight-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                y: 30,
                opacity: 0,
                delay: i * 0.2,
                ease: 'power2.out'
            });
        });
        
        // Animate program cards
        gsap.utils.toArray('.program-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                duration: 1,
                scale: 0.9,
                opacity: 0,
                delay: i * 0.15,
                ease: 'back.out(1.2)'
            });
        });
        
        // Logo animation
        gsap.from('.logo-container', {
            duration: 1,
            rotation: 360,
            scale: 0,
            ease: 'back.out(1.7)'
        });
        
        // Floating animation for hero image
        gsap.to('.hero-image', {
            y: 20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        // Button hover animations
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }
});