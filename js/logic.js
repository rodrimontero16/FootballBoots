// accedo a mi div en html por el id

const containerAdidas = document.getElementById('adidasProds');
const containerNike = document.getElementById('nikeProds');
const containerPuma = document.getElementById('pumaProds');


// creo el array para los productos del carro
let carrito = [];


// cargando productos
function renderizarProds (productos) {

    for (const prod of productos){
        if (prod.marca === 'ADIDAS'){
        containerAdidas.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
                <p class="card-text"> $ ${prod.precio.toLocaleString('es-ES')}</p>
                <button class="btn btn-primary addCarrito" id="${prod.id}">Añadir al carrito</button>
            </div>
        </div>
        `;
    } else if (prod.marca === 'NIKE'){
        containerNike.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
                <p class="card-text"> $ ${prod.precio.toLocaleString('es-ES')}</p>
                <button class="btn btn-primary addCarrito" id="${prod.id}">Añadir al carrito</button>
            </div>
        </div>
        `;
    } else if (prod.marca === 'PUMA'){
        containerPuma.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
                <p class="card-text"> $ ${prod.precio.toLocaleString('es-ES')}</p>
                <button class="btn btn-primary addCarrito" id="${prod.id}">Añadir al carrito</button>
            </div>
        </div>
        `;
    }
    }
    

    // tomo los botones
    let botones = document.getElementsByClassName('addCarrito');

    //evento
    for (const boton of botones){
        boton.addEventListener('click', () =>{
            const prodAgregado = productos.find ((producto) => producto.id === boton.id);
            agregarACarrito (prodAgregado);
        })
    }
}

// llamo la funcion 
renderizarProds (productos);

// funcion de agregar al carrito
function agregarACarrito (producto){
    //primero me fijo si existen productos en el localStorage y si existen lo parseo para crear un array    
    let carritoExistente = localStorage.getItem('carrito');
    if (carritoExistente) {
        carrito = JSON.parse(carritoExistente);
    }
    //agrego el producto nuevo al array creado
    carrito.push (producto);
    // Guardar el carrito en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
