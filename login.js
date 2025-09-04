

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

    window.location.href = 'home.html';
}