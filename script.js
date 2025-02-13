// Menu Burger Responsive
document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Défilement fluide
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animation au chargement
document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".animate-text", { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
    gsap.to(".animate-btn", { opacity: 1, scale: 1, duration: 1, delay: 0.5 });
});

// Agrandir la section contact lors de la navigation
document.querySelector('#contact').addEventListener('mouseenter', function() {
    this.classList.add('active');
});
document.querySelector('#contact').addEventListener('mouseleave', function() {
    this.classList.remove('active');
});

// Fonction d'envoi de message et notification
function handleSubmit(event) {
    event.preventDefault();  // Empêche l'envoi du formulaire classique

    // Simuler un envoi de message avec un délai
    setTimeout(() => {
        // Affichage de la notification
        const notification = document.querySelector('#notification');
        notification.classList.add('show');
        
        // Cache la notification
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }, 300); // Le délai de simulation de l'envoi
}
