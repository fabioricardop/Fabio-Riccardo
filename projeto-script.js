// Sticky Video Effect
const stickyVideo = document.getElementById('stickyVideo');
const videoHero = document.querySelector('.video-hero');
let videoOriginalTop = 0;

window.addEventListener('load', () => {
    if (stickyVideo) {
        videoOriginalTop = stickyVideo.offsetTop;
    }
});

window.addEventListener('scroll', () => {
    if (!stickyVideo) return;
    
    const scrollPosition = window.pageYOffset;
    const heroHeight = videoHero ? videoHero.offsetHeight : 0;
    
    // Ativar sticky após passar da hero
    if (scrollPosition > heroHeight - 100) {
        stickyVideo.classList.add('stuck');
    } else {
        stickyVideo.classList.remove('stuck');
    }
});

// Voltar ao topo quando clicar no vídeo sticky
if (stickyVideo) {
    stickyVideo.addEventListener('click', () => {
        if (stickyVideo.classList.contains('stuck')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// Pausar vídeo hero quando sair da tela
const heroVideo = document.getElementById('heroVideo');
const contentVideo = document.getElementById('contentVideo');

if (heroVideo && contentVideo) {
    window.addEventListener('scroll', () => {
        const heroBottom = videoHero.getBoundingClientRect().bottom;
        
        if (heroBottom < 0) {
            heroVideo.pause();
        } else {
            heroVideo.play();
        }
    });
}
