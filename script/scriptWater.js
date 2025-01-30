const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const bttPeso = document.getElementById('btt-peso');
const bttAltura = document.getElementById('btt-altura');

const bttVoltarAltura = document.getElementById('btt-altura-voltar');

const tela1 = document.getElementById('tela1');
const perguntaPeso = document.getElementById('pergunta-peso');
const perguntaAltura = document.getElementById('pergunta-altura');
const logado = document.getElementById('logado');


function salvarPeso() {
    const pesoValue = parseFloat(peso.value);
    console.log(`O valor do Peso é: ${pesoValue} e o tipo é: ${typeof pesoValue}`);
}
function salvarAltura() {
    const alturaValue = parseFloat(altura.value.trim().replace(",", "."));
    console.log(`O valor da Altura é: ${alturaValue} e o tipo é: ${typeof alturaValue}`);
}

function proximoAlert() {
    const pesoValue = parseFloat(peso.value);

    if (pesoValue >= 0) {
        perguntaPeso.style.display = 'none';
        perguntaAltura.style.removeProperty('display');
    }
}
function perguntaConcluida(){
    perguntaAltura.style.display = 'none';
    perguntaPeso.style.display = 'none';
    tela1.style.display = 'none';
    logado.style.removeProperty('display');

}
function voltarAlert() {
    perguntaAltura.style.display = 'none';
    perguntaPeso.style.removeProperty('display');
}

bttPeso.addEventListener('click', () => {
    salvarPeso();
    proximoAlert();
});

bttAltura.addEventListener('click', () => {
    salvarAltura();
    perguntaConcluida();
});

bttVoltarAltura.addEventListener('click', () => {
    voltarAlert();
});



document.addEventListener("DOMContentLoaded", () => {
    const peso = document.getElementById('peso');

    peso.addEventListener('input', () => {
        let valor = peso.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        peso.value = valor;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const altura = document.getElementById('altura');

    altura.addEventListener('input', () => {
        let valor = altura.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico

        if (valor.length >= 3) {
            valor = valor.replace(/(\d{1,})(\d{2})$/, '$1,$2'); // Adiciona a vírgula antes dos dois últimos números  
        }

        altura.value = valor;
    });
});