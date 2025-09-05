
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

// iOS (inclui iPadOS moderno, que se identifica como Mac)
function isIOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  const iOSLike = /iphone|ipad|ipod/.test(ua);
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
  return iOSLike || iPadOS;
}

function isAndroid() {
  return /android/i.test(window.navigator.userAgent);
}

// Já está instalado? (standalone)
function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true; // Safari iOS
}

let deferredPrompt = null;

// Ouça o evento somente em navegadores que o suportam (Android/Chromium)
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();          // impede o prompt automático
  deferredPrompt = e;          // guarda o evento para usar depois
  // Mostra popup do Android apenas se não estiver instalado
  if (!isStandalone() && isAndroid()) {
    document.getElementById('a2hs-android').hidden = false;
  }
});

// Caso o navegador não dispare o beforeinstallprompt (iOS/Safari), mostre instruções
window.addEventListener('load', () => {
  if (!isStandalone() && isIOS()) {
    document.getElementById('a2hs-ios').hidden = false;
  }
});

// Botão "Adicionar" no Android → abre o prompt nativo
document.getElementById('btn-install')?.addEventListener('click', async () => {
  if (!deferredPrompt) return;          // segurança
  deferredPrompt.prompt();              // abre o prompt
  const choice = await deferredPrompt.userChoice;
  // Você pode analisar: choice.outcome === 'accepted' | 'dismissed'
  deferredPrompt = null;
  document.getElementById('a2hs-android').hidden = true;
});

// Fechar popups
document.getElementById('btn-android-close')?.addEventListener('click', () => {
  document.getElementById('a2hs-android').hidden = true;
});
document.getElementById('btn-ios-close')?.addEventListener('click', () => {
  document.getElementById('a2hs-ios').hidden = true;
});

// Se a instalação acontecer (qualquer plataforma), esconda tudo
window.addEventListener('appinstalled', () => {
  document.getElementById('a2hs-android').hidden = true;
  document.getElementById('a2hs-ios').hidden = true;
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