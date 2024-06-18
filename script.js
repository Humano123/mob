// Função para detectar se é um dispositivo móvel
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Mostrar o bloco se for um dispositivo móvel
if (isMobile()) {
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    overlay.innerHTML = `
        <h1>Ops</h1>
        <p>Detectamos uma falha!</p>
    `;
    document.body.appendChild(overlay);
}
