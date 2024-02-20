// array para armazenar a lista de amigos
let amigos = [];

// função para adicionar os nomes a serem sorteados
function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    if (nomeAmigo.value == ''){
        alert ('Informe o nome do(a) amigo(a) !');
        return;
    }

    if (amigos.includes(nomeAmigo.value)){
        alert ('Nome já adicionado !');
        return
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo.value);
    
    if (lista.textContent == ''){
        lista.textContent = nomeAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo.value;
    }
    limparCampo();
    
}

// função para realizar o sorteio
function sortear(){
    embaralhar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    if (amigos == ''){
        alert("A lista de amigos está vazia. Insira amigos para iniciar o sorteio")
        return;
    }

    if ((amigos.length - 1) < 3){
        alert('O número de amigos precisa ser maior que 3');
        return;
    }

    for (let i = 0; i < amigos.length; i++){
        if ( i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>';
        }
        
    }
}

// Função para Embaralhar um array
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// função reiniciar
function reiniciar(){
    limparCampo();
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
    amigos = [];

    

}


// função para limpar o Campo
function limparCampo(){
    document.getElementById('nome-amigo').value = '';
}