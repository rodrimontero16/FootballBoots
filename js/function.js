// Agregar productos al catalogo
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
    // evento para addCarrito
    let botones = document.getElementsByClassName('addCarrito');
    for (const boton of botones){
        boton.addEventListener('click', () =>{
            const prodAgregado = productos.find ((producto) => producto.id === boton.id);
            agregarACarrito (prodAgregado);
        })
    }
}

//Agregar productos al carrito
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

// Renderizar carrito
function renderizarCarrito(carritoEnLS) {
    totalCompra = 0; 
    tablaBody.innerHTML = "";

    for (const prod of carritoEnLS) {
        const subtotalProducto = prod.precio;
        totalCompra += subtotalProducto;

        tablaBody.innerHTML += `
        <tr>
            <td>
                <button type="button" class="btnDelete" id="${prod.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                <   /svg>
                </button>
            <td>
                <img class="imgEnCarrito" src=".${prod.foto}" alt="Card image cap" style="width: 100px; margin:10px;">
                ${prod.marca}
                ${prod.modelo}
            </td>
            <td>$${prod.precio.toLocaleString('es-ES')}</td>
            <td>1</td>
            <td class="subtotal">$${subtotalProducto.toLocaleString('es-ES')}</td>
        </tr>
    `;
    }
    
    //agrego el evento al boton de eliminar
    let btnDelete = document.querySelectorAll('.btnDelete');
    for (const boton of btnDelete) {
        boton.addEventListener ('click', () => {
            const prodAEliminar = carritoEnLS.find ((prod) => prod.id == boton.id);
            eliminarProducto (prodAEliminar);
        })
    }

    return renderizarCarrito; 
}

// Eliminar producto del carrito
function eliminarProducto (prodAEliminar) {
    const index = carritoEnLS.findIndex((prod) => prod.id == prodAEliminar.id);
    if (index > -1) {
        carritoEnLS.splice (index, 1);
    }

    //vuelvo a renderizar el carrito
    renderizarCarrito(carritoEnLS);

    //Elimino el producto del localStorage y lo vuelvo a guardar
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify(carritoEnLS));

    return eliminarProducto;
}


//ARMAR FUNCIONES PARA EL LOCALSTORAGE