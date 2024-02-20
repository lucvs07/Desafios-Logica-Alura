
// função para sortear números aleatórios
function sortear(){
    // Obtendo o valor dos campos através do método GetElementById e
    // transformando o tipo de dado em inteiro através da função parseInt
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroDe = parseInt(document.getElementById('de').value);
    let numeroAte = parseInt(document.getElementById('ate').value);

    // verificação dos números
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    // criando array (lista) dos números que forem sorteados
    let numerosSorteados = [];
    let numero;

    // Loop através de enquanto o valor da variável de iteração (i) for menor que a
    // quantidade escolhida será realizado a função gerarNumeroAleatorio, sendo adicionado
    // ao array numerosSorteados
    for (let i = 0; i < quantidade; i++) {
        numero = gerarNumeroAleatorio(numeroDe, numeroAte);

        while(numerosSorteados.includes(numero)){
            numero = gerarNumeroAleatorio(numeroDe, numeroAte);
        }

        numerosSorteados.push(numero);
    }
    
    // Inserir os números sorteados na página
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;
    alterarStatusBotao();
};

// Função para gerar Numero Aleatório através das funções Math.floor e Math.random
function gerarNumeroAleatorio(numeroMin, numeroMax){
    return Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
};


function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao')
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado')
    }
}

//função para reiniciar o sorteador
function reiniciar(){
    // limpar os campos
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    // mensagem inicial
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`

    // Desabilitando o botão reiniciar
    alterarStatusBotao();
};