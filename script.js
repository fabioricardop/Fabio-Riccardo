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

// Carousel Portfolio
function changeSlide(carouselIndex, direction) {
    const carousels = document.querySelectorAll('.carousel-item');
    const carousel = carousels[carouselIndex];
    const images = carousel.querySelectorAll('.carousel-images img');
    const dots = carousel.querySelectorAll('.dot');
    
    let currentIndex = 0;
    images.forEach((img, index) => {
        if (img.classList.contains('active')) {
            currentIndex = index;
        }
    });
    
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    let newIndex = currentIndex + direction;
    if (newIndex >= images.length) newIndex = 0;
    if (newIndex < 0) newIndex = images.length - 1;
    
    images[newIndex].classList.add('active');
    dots[newIndex].classList.add('active');
}

function goToSlide(carouselIndex, slideIndex) {
    const carousels = document.querySelectorAll('.carousel-item');
    const carousel = carousels[carouselIndex];
    const images = carousel.querySelectorAll('.carousel-images img');
    const dots = carousel.querySelectorAll('.dot');
    
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    images[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Touch/Swipe support for carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    
    carouselContainers.forEach((container, carouselIndex) => {
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe(carouselIndex);
        });
        
        function handleSwipe(index) {
            if (touchEndX < touchStartX - 50) {
                changeSlide(index, 1); // Swipe left
            }
            if (touchEndX > touchStartX + 50) {
                changeSlide(index, -1); // Swipe right
            }
        }
    });
});
