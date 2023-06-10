// accedo a mi div en html por el id

let containerAdidas = document.getElementById('adidasProds');
let containerNike = document.getElementById('nikeProds');
let containerPuma = document.getElementById('pumaProds');

// cargando productos
function renderizarProds (listaprods, containerProds) {
    for (prod of listaprods){
        containerProds.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
            <p class="card-text"> $ ${prod.precio}</p>
            <button class="btn btn-primary" id=${prod.id}>Añadir al carrito</button>
            </div>
        </div>
        `;
    }
} 

renderizarProds(adidas, containerAdidas);
renderizarProds(nike, containerNike);
renderizarProds(puma, containerPuma);