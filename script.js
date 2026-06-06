// 1. Efeito de Digitação para o Texto de Introdução
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

// 2. Explosão de Corações ao Clicar
document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.classList.add('click-heart');
        heart.innerHTML = '❤️';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        
        // Direção aleatória para a explosão
        const velocityX = (Math.random() - 0.5) * 200;
        const velocityY = (Math.random() - 0.5) * 200;
        
        heart.style.setProperty('--vx', `${velocityX}px`);
        heart.style.setProperty('--vy', `${velocityY}px`);
        
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    }
});

// 3. Chuva de Corações Constante (O que já tínhamos)
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 15 + 10 + "px";
    heart.style.fontSize = size;
    heart.style.animationDuration = Math.random() * 4 + 3 + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}
setInterval(createFallingHeart, 500);

// 4. Revelação Suave ao Rolar a Página (Scroll Reveal)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Inicialização de tudo quando a página carrega
window.onload = () => {
    // Inicia o efeito de digitação
    const intro = document.querySelector('.intro-text');
    if(intro) typeWriter(intro);

    // Prepara as fotos para o efeito de revelação
    document.querySelectorAll('.photo-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.8s ease-out";
        observer.observe(card);
    });
};

// Estilos extras para as novas animações
const style = document.createElement('style');
style.innerHTML = `
    .falling-heart {
        position: fixed; top: -50px; z-index: 9999;
        pointer-events: none; animation: fall linear forwards;
    }
    @keyframes fall { to { transform: translateY(105vh) rotate(360deg); } }

    .click-heart {
        position: fixed; z-index: 10000; pointer-events: none;
        font-size: 20px; animation: burst 1s ease-out forwards;
    }
    @keyframes burst {
        0% { opacity: 1; transform: translate(0, 0) scale(1); }
        100% { opacity: 0; transform: translate(var(--vx), var(--vy)) scale(0.5) rotate(45deg); }
    }
`;
document.head.appendChild(style);
