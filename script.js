// Menu Navigation
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close menu on link click
nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offset = 57;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form handler
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;
        
        // Seu número do WhatsApp (formato: 5511999999999)
        const whatsappNumber = '5511971500983';
        
        // Formatar mensagem
        const whatsappMessage = `*Nova mensagem do site:*%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*E-mail:* ${encodeURIComponent(email)}%0A*Mensagem:* ${encodeURIComponent(message)}`;
        
        // Abrir WhatsApp
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
        
        // Limpar formulário
        form.reset();
    });
}
