let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaApi()

const elementoParaInserir = document.getElementById('livros')

async function getBuscarLivrosDaApi(){
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    console.table(livros)

    exibirLivrosNaTela(livros)

}

function exibirLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(livro => {
        elementoParaInserir.innerHTML += `  
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}"
        alt="${livro.alt}">
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
