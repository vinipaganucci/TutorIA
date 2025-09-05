const nome = localStorage.getItem('name');
const idade = localStorage.getItem('age');
const materia = localStorage.getItem('subject');



console.log(materia);

document.getElementById('mensagem').textContent = `Vamos lá, ${nome}! Você tem ${idade} anos e a matéria escolhida foi Matemática.`;

// substitui a lógica atual por um pequeno gerenciador de perguntas:
const questions = [
    { q: 'Quanto é 32 + 67', a: ['99'] },
    { q: 'Quanto é 20 / 2', a: ['10'] }
];

let current = 0;

function normalizeText(s) {
    return s.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function showQuestion() {
    document.getElementById('question').textContent = questions[current].q;
    document.getElementById('input-answer').value = ''; // limpa o input sempre que mudar de pergunta
}

// inicializa a primeira pergunta
showQuestion();

function validarResposta() {
    const resposta = document.getElementById('input-answer').value;
    const normalized = normalizeText(resposta);
    const respostasCorretas = questions[current].a.map(r => normalizeText(r));

    if (respostasCorretas.includes(normalized)) {
        alert('Resposta correta!');
        current++;
        if (current < questions.length) {
            showQuestion();
        } else {
            alert('Parabéns — você terminou o quiz!');
            window.location.href = 'login.html';
            // opcional: resetar ou desabilitar o botão
            // current = 0; showQuestion();
        }
    } else {
        alert('Resposta incorreta. Tente novamente!');
        // não muda a pergunta — permanece na mesma
    }
}

// se precisar, mantém a função trocarPergunta() (não é mais chamada pelo botão)
function trocarPergunta() {
    if (current < questions.length - 1) {
        current++;
        showQuestion();
    }
}

