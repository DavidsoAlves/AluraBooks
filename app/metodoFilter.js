const botoes = document.querySelectorAll('.btn')

botoes.forEach( botao => botao.addEventListener('click', () => filtraLivros(botao.value)));
 
function filtraLivros(valorBotao){
    // const elementoBtn = document.getElementById(this.id)
    // const categoria = elementoBtn.val
    let livrosFiltrados = valorBotao == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(valorBotao)
    exibirLivrosNaTela(livrosFiltrados)
    if (valorBotao == 'disponivel'){
        const valorTotal = calcularTotalDisponivel(livrosFiltrados)
        exibirValorTotal(valorTotal);
    }
}

function FiltrarPorCategoria(valorBotao) {
    return livros.filter(livro => livro.categoria == valorBotao);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valorTotal){
    elementoComValorTotal.innerHTML = ` 
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}
