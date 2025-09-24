// JavaScript para o site institucional
document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o menu mobile
    const mobileMenuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Inicia a animação um pouco antes de o elemento estar totalmente visível
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target); // Para a observação após a animação
            }
        });
    }, observerOptions);

    // Aplicar animação aos cards de funcionalidades
    document.querySelectorAll('#funcionalidades .grid > div').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Header scroll effect - Mais performático com classes CSS
    const header = document.querySelector('header');
    if (header) {
        let isScrolled = false;
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50 && !isScrolled) {
                header.classList.add('scrolled');
                isScrolled = true;
            } else if (window.scrollY <= 50 && isScrolled) {
                header.classList.remove('scrolled');
                isScrolled = false;
            }
        });
    }
});