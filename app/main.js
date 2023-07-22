let livros = [] 

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' 
getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI(){          //função assincrona:função que permite executar tarefas em segundo plano, sem bloquear o fluxo principal do programa.
    const res = await fetch(endpointDaAPI)  //espera a promise da requisição antes de seguir o fluxo
    livros = await res.json()           //espera resposta da requisição feita por res e cria um objeto
    let livrosComDesconto = aplicarDesconto(livros) //atribui função ao objeto
    exibirOsLivrosNatela(livrosComDesconto) //exibe livros já com desconto
}