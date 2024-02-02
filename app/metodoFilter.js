const botoes = document.querySelectorAll('.btn')

botoes.forEach( botao => botao.addEventListener('click', () => filtraLivros(botao.dataset.categoria)));

function filtraLivros(categoria){
    let livrosFiltrados = livros.filter( livro => livro.categoria == categoria)
    exibirLivrosNaTela(livrosFiltrados)
}
