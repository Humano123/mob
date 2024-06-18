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
        <p>Retiramos a entrada de dispositivos moveis(Celular/Tablet), infelizmente retiramos essa entrada por conta de BUGS que é bem dificil de arrumar, então resolvemos retirar esta entrada, além do mais para ajustar o tamanho da tela, é muito complicado, pois teremos que ajustar para CADA tela</p>
    `;
    document.body.appendChild(overlay);
}
