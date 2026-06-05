function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    
    // Símbolo do coração
    heart.innerHTML = '💖';
    
    // Posição horizontal aleatória
    heart.style.left = Math.random() * 100 + "vw";
    
    // Tamanho aleatório para dar profundidade
    const size = Math.random() * 15 + 10 + "px";
    heart.style.fontSize = size;
    
    // Duração da queda aleatória (entre 3s e 7s)
    heart.style.animationDuration = Math.random() * 4 + 3 + "s";
    
    // Opacidade aleatória
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    
    document.body.appendChild(heart);
    
    // Remove o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Cria um novo coração a cada 500ms
setInterval(createHeart, 500);

// Adiciona os estilos da animação dinamicamente
const style = document.createElement('style');
style.innerHTML = `
    .falling-heart {
        position: fixed;
        top: -50px;
        z-index: 9999;
        pointer-events: none;
        animation: fall linear forwards;
        user-select: none;
    }

    @keyframes fall {
        to {
            transform: translateY(105vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
