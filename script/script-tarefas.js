const resulado = document.querySelector('.tarefas-resultado');
const adicionar = document.querySelector('.btt-tarefa');
const input = document.getElementById('name');

// Evento para adicionar uma tarefa
adicionar.addEventListener('click', function () {
    const tarefa = input.value.trim(); // Remove espaços em branco
    if (tarefa === '') {
        input.focus();
        return;
    }

    // Criação do item da lista
    const item = document.createElement('li');
    item.textContent = tarefa;

    // Criação do botão de remover
    const removerBotao = document.createElement('button');
    removerBotao.textContent = 'remover';
    removerBotao.classList.add('btt-remover');

    // Evento para remover o item
    removerBotao.addEventListener('click', function () {
        resulado.removeChild(item);
    });

    // Adiciona o botão ao item
    item.appendChild(removerBotao);

    // Adiciona o item à lista
    resulado.appendChild(item);

    // Limpa o campo de entrada e foca novamente
    input.value = '';
    input.focus();
});

