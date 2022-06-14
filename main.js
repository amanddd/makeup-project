import listaCategorias from './bib.js';

function criarCategorias() {
  let categoriasDiv = document.getElementById('categoria');
  let filtrado = listaCategorias.filter(function(menuOuCategoria){
    return menuOuCategoria.descricao != null && menuOuCategoria.image != null
  });
  for ( let categoria of filtrado) {
    let div = document.createElement("div");
    div.style.width = '50%'
    div.innerHTML =   
    `<div class="producer">
      <div class="img">
        <img src="${categoria.image}" width="400px">
      </div>
      <h2 id="Blush">${categoria.name}</h2>
        <p>${categoria.descricao}</p>
    </div>`
    categoriasDiv.appendChild(div)
  }
}

function criarMenu () {
  let menuNav = document.getElementById('menuAcesso')
  let filtrado = listaCategorias.map(function(menuOuCategoria){
    delete menuOuCategoria.image;
    delete menuOuCategoria.descricao;
    return menuOuCategoria;
  });
  for ( let categoria of filtrado) {
    let menuLink = document.createElement("a");
    menuLink.innerHTML =   
    `<a href="${categoria.link}" class="bnt-intro">${categoria.name}</a>`
    menuNav.appendChild(menuLink)
  }
}

criarCategorias()
criarMenu()


