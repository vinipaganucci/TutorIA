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
const installBtn = document.getElementById('btnInstall');

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
  console.log('beforeinstallprompt recebido');

  // mostra botão de instalar para o usuário
  if (!isStandalone() && isAndroid() && installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', async () => {
      installBtn.style.display = 'none';
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      console.log('Resultado do install prompt:', choice);
      if (choice.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário descartou a instalação');
      }
      deferredPrompt = null;
    }, { once: true });
  } else {
    // fallback: se não houver botão, tenta abrir o prompt imediatamente
    if (!isStandalone()) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(choice => {
        console.log('Resultado do install prompt (fallback):', choice);
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