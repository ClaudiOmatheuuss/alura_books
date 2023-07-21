let livros = [] 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// constante armazena API

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI(){          //função assincrona:função que permite executar tarefas em segundo plano, sem bloquear o fluxo principal do programa.
    const res = await fetch(endpointDaAPI)  //espera a promise da requisição antes de seguir o fluxo
    livros = await res.json()           //espera resposta da promisse gerada por res extraindo resposta da requisição
    console.table(livros)
}