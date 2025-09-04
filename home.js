const nome = localStorage.getItem('name');
const idade = localStorage.getItem('age');
const materia = localStorage.getItem('subject');

console.log(materia);

if (materia == "portuguese") {

    document.getElementById('mensagem').textContent = `Seja bem-vindo, ${nome}! Você tem ${idade} anos e a matéria escolhida foi Português.`;
}

if (materia == "math") {

    document.getElementById('mensagem').textContent = `Seja bem-vindo, ${nome}! Você tem ${idade} anos e a matéria escolhida foi Matemática.`;
}

if (materia == "history") {

    document.getElementById('mensagem').textContent = `Seja bem-vindo, ${nome}! Você tem ${idade} anos e a matéria escolhida foi História.`;
}  

 