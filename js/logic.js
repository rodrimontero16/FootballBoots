// accedo a mi div en html por el id

let containerAdidas = document.getElementById('adidasProds');
let containerNike = document.getElementById('nikeProds');
let containerPuma = document.getElementById('pumaProds');


//filtro el array por la marca
let productosAdidas = productos.filter ((producto) => producto.marca === 'ADIDAS');
let productosNike = productos.filter ((producto) => producto.marca === 'NIKE');
let productosPuma = productos.filter ((producto) => producto.marca === 'PUMA');

// cargando productos
function renderizarProds (listaprods, containerProds) {

    for (prod of listaprods){
        containerProds.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
            <p class="card-text"> $ ${prod.precio}</p>
            <button class="btn btn-primary addCarrito" id=${prod.id}>Añadir al carrito</button>
            </div>
        </div>
        `;
    }

    // tomo los botones
    let botones = document.getElementsByClassName('addCarrito');

    //evento
    for (const boton of botones){
        boton.addEventListener('click', () =>{
            console.log ('hiciste click');
        })
    }
}
// llamo los productos y los pongo en el div que le corresponde
renderizarProds (productosAdidas, containerAdidas);
renderizarProds (productosNike, containerNike);
renderizarProds (productosPuma, containerPuma);
