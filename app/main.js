let livros = [] 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// constante armazena API
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')


async function getBuscarLivrosDaAPI(){          //função assincrona:função que permite executar tarefas em segundo plano, sem bloquear o fluxo principal do programa.
    const res = await fetch(endpointDaAPI)  //espera a promise da requisição antes de seguir o fluxo
    livros = await res.json()           //espera resposta da requisição feita por res
    console.table(livros)
    exibirOsLivrosNatela(livros)
}

function exibirOsLivrosNatela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    })
}