const botoes = document.querySelectorAll('.btn')                //captura todos os botões
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))     //atribui ouvinte de evento para cada botão na const botoes

function filtrarLivros() {
    elementoParaInserirLivros.innerHTML = ``
    const elementoBtn = document.getElementById(this.id)        //armazena valor do botão clicado
    const categoria = elementoBtn.value         //armazena valor do elemento na const elementoBtn
    let livrosFiltrados = categoria == 'disponiveis' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)  //cria novo array filtrando apenas elementos que tem essa comparação como true
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponiveis')  {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria){
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}