
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

//OBJETO
const formUser = {
    name: '',
    age:0,
    subject:'',
    confort:0,
    time:0,
    preference:'',
    objective:''
}


begin.addEventListener('click', (event) => {

    //VALORES DENTRO DOS INPUTS (SÃO APENAS SALVOS AO CLICAR NO BOTÃO "COMEÇAR" POIS OS VALORES SÃO SALVOS DENTRO DA FUNÇÃO)
    formUser.name = selfNameInput.value.toLowerCase();
    formUser.age = selfAgeInput.value;
    formUser.subject = subjectInput.value.toLowerCase();
    formUser.confort = confortInput.value; 
    formUser.time = timeInput.value; 
    formUser.preference = preferenceInput.value;
    formUser.objective = objectiveInput.value
    
    

    console.log(formUser)
    alert(JSON.stringify(formUser, null, 2));
})




pc_conforto.addEventListener('input', () => pc_conforto_out.value = pc_conforto.value);

