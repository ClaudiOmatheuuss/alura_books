let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco') //captura botao de ordenar
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)  //atibui ouvinte de evento

function ordenarLivrosPorPreco(evento) {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)  //ordena valor dos elementos do menor para o maior
    exibirOsLivrosNaTela(livrosOrdenados)       //exibi na tela
}