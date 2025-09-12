// PWA =============================================

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

// INDEX =============================================

//BOTÕES
const begin = document.getElementById('begin')


//INPUTS
const selfNameInput = document.getElementById('name');
const selfAgeInput = document.getElementById('age');
const subjectInput = document.getElementById('subject');
const confortInput = document.getElementById('pc_conforto');
const timeInput = document.getElementById('time');
const preferenceInput = document.getElementById('pc_modo');
const objectiveInput = document.getElementById('pc_objetivo');
const themeInput = document.getElementById('theme');
const obsInput = document.getElementById('pc_obs');

//OBJETO
const formUser = {
    name: '',
    age:0,
    subject:'',
    confort:0,
    time:0,
    preference:'',
    objective:'',
    theme:'',
    observation:''
}


begin.addEventListener('click', (event) => {

    //VALORES DENTRO DOS INPUTS (SÃO APENAS SALVOS AO CLICAR NO BOTÃO "COMEÇAR" POIS OS VALORES SÃO SALVOS DENTRO DA FUNÇÃO)
    formUser.name = selfNameInput.value.toLowerCase();
    formUser.age = selfAgeInput.value;
    formUser.subject = subjectInput.value.toLowerCase();
    formUser.confort = confortInput.value; 
    formUser.time = timeInput.value; 
    formUser.preference = preferenceInput.value;
    formUser.objective = objectiveInput.value;
    formUser.theme = themeInput.value;
    formUser.observation = obsInput.value
    
    

    console.log(formUser)
    alert(JSON.stringify(formUser, null, 2));
})




pc_conforto.addEventListener('input', () => pc_conforto_out.value = pc_conforto.value);


 // RESPONSIVIDADE
(function fitCardToViewport(){
  const card = document.querySelector('.card');
  if (!card) return;

  function applyFit(){
    // only apply on narrow viewports (don't change desktop)
    if (window.innerWidth > 860) {
      card.style.transform = '';
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      return;
    }

    const pad = 20; // space buffer
    const maxW = Math.max(320, window.innerWidth - pad);
    const maxH = Math.max(420, window.innerHeight - pad);

    // measure natural size (force reflow)
    const rect = card.getBoundingClientRect();
    const cardW = rect.width || card.offsetWidth;
    const cardH = rect.height || card.offsetHeight;

    // compute scale (don't upscale)
    const scaleW = maxW / cardW;
    const scaleH = maxH / cardH;
    const scale = Math.min(scaleW, scaleH, 1);

    card.style.transformOrigin = 'top center';
    card.style.transition = 'transform .12s ease-out';
    card.style.transform = `scale(${scale})`;

    // if scaled down, lock page scroll so card fits nicely
    if (scale < 1) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  // run after images/fonts load and on resize/orientation
  window.addEventListener('load', () => setTimeout(applyFit, 60));
  window.addEventListener('resize', applyFit, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(applyFit, 120));

  // also try immediate attempt (if file loaded after DOM)
  setTimeout(applyFit, 120);
})();

