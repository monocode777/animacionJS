const logo = document.getElementById('logo');
const bounceBtn = document.getElementById('bounce-btn');
const spinBtn = document.getElementById('spin-btn');
const scaleBtn = document.getElementById('scale-btn');
const resetBtn = document.getElementById('reset-btn');

// Animación de rebote
bounceBtn.addEventListener('click', () => {
    logo.style.animation = 'bounce 1s ease infinite';
    logo.style.animationIterationCount = 'infinite';
});

// Animación de giro
spinBtn.addEventListener('click', () => {
    logo.style.animation = 'spin 2s linear infinite';
    logo.style.animationIterationCount = 'infinite';
});

// Animación de escala
scaleBtn.addEventListener('click', () => {
    logo.style.animation = 'scaleUp 1s ease-in-out infinite alternate';
    logo.style.animationIterationCount = 'infinite';
});

// Resetear animación
resetBtn.addEventListener('click', () => {
    logo.style.animation = 'none';
});
