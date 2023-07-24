const elementoParaInserirLivros = document.getElementById('livros')       //pega seção de livros

function exibirOsLivrosNaTela(listaDeLivros){     //atribui estrutura html para cada elemento(livro) em listaDeLivros
    
    elementoParaInserirLivros.innerHTML = ``
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livros__imagem' : 'livros__imagem indisponivel'
        elementoParaInserirLivros.innerHTML += `             
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}