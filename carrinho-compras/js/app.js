let totalGeral = 0;
limpar();

function adicionar(){
    // recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;

    // verificar se o produto está selecionado
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }

    // verificar se a quantidade seleciona está válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    
    // calcular o preço, o subtotal
    let subtotal = quantidade * valorUnitario

    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
  </section>`

    // atualizar o valor total
    totalGeral = totalGeral + subtotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;

    // Limpar o campo quantidade
    document.getElementById('quantidade').value = '';
};

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$0`;

};