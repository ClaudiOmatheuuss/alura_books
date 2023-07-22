function aplicarDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map (livro => {     //retorna copia de cada livro e atribui novo valor para preço
        return{...livro, preco: livro.preco - (livro.preco * desconto)}    
    })
    return livrosComDesconto //retorna valor do novo array criado por essa variável
}