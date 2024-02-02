const elementoParaInserir = document.getElementById('livros')

function exibirLivrosNaTela(listaDeLivros) {
    elementoParaInserir.innerHTML = '';
    listaDeLivros.forEach(livro => {

        let disponibilidade = livro.quantidade > 0 ? '' : 'indisponivel'

        elementoParaInserir.innerHTML += `  
        <div class="livro">
            <img class="livro__imagens ${disponibilidade}" src="${livro.imagem}"
            alt="${livro.alt}">
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
