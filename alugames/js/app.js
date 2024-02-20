// Função Alterar Status que recebe como parâmetro o id do jogo que foi clicado
function alterarStatus(id){
    //declaração de variavéis que obtem os elementos HTML
    let gameClicado = document.getElementById(`game-${id}`)
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    // condição IF para realizar a alteração dos status
    if (imagem.classList.contains('dashboard__item__img--rented') || botao.classList.contains('dashboard__item__button--return')){
        // Confirmação se o usuário deseja realmente devolver o jogo
        if(confirm(`Você está devolvendo o jogo ${nomeJogo.textContent}, você tem certeza ?`)){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
};