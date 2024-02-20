
// função comprar para guardar o tipo de Ingresso e a Quantidade 
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);

    // Verificar se a quantidade é um número positivo
     if (isNaN(quantidadeCompra) || quantidadeCompra <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Utilizando a função cálculo
    calculo(tipoIngresso, quantidadeCompra);
};

// Função Cálculo que utiliza como parâmetros, o tipo de ingresso escolhido e quantidade que se quer comprar
function calculo(tipo, quantidade){ 
    let quantidadeIngresso = document.getElementById(`qtd-${tipo}`);
    if (parseInt(quantidadeIngresso.textContent) < quantidade){
        alert("Compra Inválida");
        return;
    } else {
        quantidadeIngresso.innerHTML =  parseInt(quantidadeIngresso.textContent) - quantidade;
    }   
}
