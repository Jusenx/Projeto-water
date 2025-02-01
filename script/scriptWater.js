const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const bttPeso = document.getElementById('btt-peso');
const bttAltura = document.getElementById('btt-altura');

let alturaValue = 0;

const bttVoltarAltura = document.getElementById('btt-altura-voltar');

const tela1 = document.getElementById('tela1');
const perguntaPeso = document.getElementById('pergunta-peso');
const perguntaAltura = document.getElementById('pergunta-altura');
const logado = document.getElementById('logado');


//* FUNCIONALIDADES SEPARADAMENTES *//

function salvarPeso() {
    const pesoValue = parseFloat(peso.value);
    console.log(`O valor do Peso é: ${pesoValue} e o tipo é: ${typeof pesoValue}`);
}
function salvarAltura() {
    alturaValue = parseFloat(altura.value.trim().replace(",", "."));
    console.log(`O valor da Altura é: ${alturaValue} e o tipo é: ${typeof alturaValue}`);
}

function proximoAlert() {
    const pesoValue = parseFloat(peso.value);

    if (pesoValue >= 0) {
        perguntaPeso.style.display = 'none';
        perguntaAltura.style.removeProperty('display');
    }
}
function apertarEnter() {
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            if (altura.value != ""){
                salvarAltura();
                perguntaConcluida()
            }if (peso.value != ""){
                salvarPeso();
                proximoAlert();
                ajustarAgua();
            }
         console.log('apertou');
        }
      });
}
apertarEnter();

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

//*----------------------------------------------*//

//* Botões Alert  *//


bttPeso.addEventListener('click', () => {
    salvarPeso();
    proximoAlert();
    ajustarAgua();
});

bttAltura.addEventListener('click', () => {
    salvarAltura();
    perguntaConcluida();
});

bttVoltarAltura.addEventListener('click', () => {
    voltarAlert();
});

//*----------------------------------------------*//

//* Máscaras para os inputs *//


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

//*----------------------------------------------*//

//* TELA PRINCIPAL - WATER *//

let totalPorcentagem = 0;

function ajustarAgua() {
    let valorteste = 71.5;
    let inputValor = parseFloat(peso.value); //Pegando o valor do peso

    totalPorcentagem = valorteste * 35; //Calculo para saber quanto de agua é necessario pelo seu peso
    total = totalPorcentagem; //Criei essa variavel para usar global e conseguir resolver o problema da água que não estava descendo corretamente

    document.getElementById('resultado').innerHTML = `Média de água por dia é: ${totalPorcentagem}ml`;

    // Ajusta a altura da água de acordo com a porcentagem
    let alturaAgua = (totalPorcentagem / totalPorcentagem) * 90; // 450px é a altura máxima
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    // Atualiza o texto da porcentagem
    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;
}

ajustarAgua();

//****           botões           *****//

function btt100() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 100); //para não ultrapassar 0

    // Ajusta a altura da água de acordo com a porcentagem atualizada
    let alturaAgua = (totalPorcentagem / total) * 90; // 400px é a altura máxima
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    // Atualiza o texto da quantidade de água
    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;


}

function btt150() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 150);

    let alturaAgua = (totalPorcentagem / total) * 90;
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt200() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 200);

    let alturaAgua = (totalPorcentagem / total) * 90;
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt250() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 250);

    let alturaAgua = (totalPorcentagem / total) * 90;
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt500() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 500);

    let alturaAgua = (totalPorcentagem / total) * 90;
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}

function btt1000() {
    totalPorcentagem = Math.max(0, totalPorcentagem - 1000);

    let alturaAgua = (totalPorcentagem / total) * 90;
    document.getElementById('agua').style.height = `${alturaAgua}%`;

    document.getElementById('porcentagem').innerHTML = `${totalPorcentagem} ml`;

}