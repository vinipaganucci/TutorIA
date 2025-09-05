
window.addEventListener('load', () => {
    registerSW();
});

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        } catch (e) {
            console.log('SW registration failed');
        }
    }

}

let deferredPrompt = null;

// Detecta iOS
function isIOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  const iOSLike = /iphone|ipad|ipod/.test(ua);
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return iOSLike || iPadOS;
}

function isAndroid() {
  return /android/i.test(window.navigator.userAgent);
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
}

// Android: captura o evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (!isStandalone() && isAndroid()) {
    // Mostra alerta
    if (confirm("Deseja adicionar o app à tela inicial?")) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
      });
    }
  }
});

// iOS: instruções manuais
window.addEventListener('load', () => {
  if (!isStandalone() && isIOS()) {
    alert("Para instalar no iPhone: toque no botão Compartilhar (ícone quadrado com seta) e escolha 'Adicionar à Tela de Início'.");
  }
});



const botao = document.getElementById('entrar');

function irParaHome() {

    const nome = document.getElementById('name').value;
    const idade = document.getElementById('age').value;
    const materia = document.getElementById('subject').value;

    if (nome === '' || idade === '' || materia === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    } 

    localStorage.setItem('name', nome);
    localStorage.setItem('age', idade);
    localStorage.setItem('subject', materia);

    console.log(materia);

    if (materia == "portuguese") {

        window.location.href = 'portuguese.html';

    }

    else if (materia == "math") {

        window.location.href = 'math.html';

    }

    else if (materia == "history") {

        window.location.href = 'history.html';

    }

    
}