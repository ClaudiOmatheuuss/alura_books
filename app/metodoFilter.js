const botoes = document.querySelectorAll('.btn')                //captura todos os botões
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))     //atribui ouvinte de evento para cada botão na const botoes

function filtrarLivros() {
    elementoParaInserirLivros.innerHTML = ``
    const elementoBtn = document.getElementById(this.id)        //armazena valor do botão clicado
    const categoria = elementoBtn.value         //armazena valor do elemento na const elementoBtn
    let livrosFiltrados = categoria == 'disponiveis' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)  //cria novo array filtrando apenas elementos que tem essa comparação como true
    exibirOsLivrosNaTela(livrosFiltrados)
}