let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click',odernarLivrosPreco)

function odernarLivrosPreco(){
    let livrosDescontados = aplicarDesconto(livros)
    let livrosOrdenado = livrosDescontados.sort((a,b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenado)
}