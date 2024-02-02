const botoes = document.querySelectorAll('.btn')

botoes.forEach( botao => botao.addEventListener('click', () => filtraLivros(botao.value)));
 
function filtraLivros(valorBotao){
    // const elementoBtn = document.getElementById(this.id)
    // const categoria = elementoBtn.val
    let livrosFiltrados = valorBotao == 'disponivel' ? livros.filter(livro => livro.quantidade > 0 ) : livros.filter( livro => livro.categoria == valorBotao)
    exibirLivrosNaTela(livrosFiltrados)
}
