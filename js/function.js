// Guardar productos en LS
function guardarProductos (productos){
    localStorage.setItem ('productos' , JSON.stringify(productos));
}

//Cargar productos
function cargarProductos () {
    return JSON.parse (localStorage.getItem('productos')) || [];
}

// Agregar productos al catalogo
function renderizarProds (productos) {
    productos = cargarProductos();
    for (const prod of productos){
        if (prod.marca === 'ADIDAS'){
        containerAdidas.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
                <p class="card-text">${prod.precio.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                    })}</p>
                <button class="btn btn-primary addCarrito" id="${prod.id}">Añadir al carrito</button>
        </div>
        `;
    } else if (prod.marca === 'NIKE'){
        containerNike.innerHTML += `
        <div class="card m-3" >
            <img class="card-img-top" src="${prod.foto}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"> ${prod.marca} ${prod.modelo}</h5>
                <p class="card-text"> ${prod.precio.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                    })}</p>
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
                <p class="card-text"> ${prod.precio.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS"
                    })}</p>
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
            const prodAgregado = productos.find ((producto) => producto.id == boton.id);
            agregarACarrito (prodAgregado);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
                Toast.fire({
                icon: 'success',
                title: `Agregaste ${prodAgregado.marca} ${prodAgregado.modelo}`
            })
        })
    }
}


//Guardar en el carrito
function guardarCarritoLS(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

//Cargar el carrito
function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

//Agregar productos al carrito
function agregarACarrito (producto){
    //cargo lo que tengo en el carrito    
    carrito = cargarCarritoLS();
    //agrego el producto nuevo al carrito
    // carrito.push (producto); 

    const productoExistente = carrito.find(p => p.id === producto.id);
    if (productoExistente) {
        // Si el producto ya existe, incrementar la cantidad en uno
        productoExistente.cantidad++;
    } else {
        // Si el producto no existe, agregarlo al carrito
        producto.cantidad = 1;
        carrito.push(producto);
    }
    // Guardar el carrito en localStorage
    guardarCarritoLS (carrito);
    //Actualizo el contador
    contador = carrito.length;
    mostrarContador(contador);
}


// Renderizar carrito
function renderizarCarrito(carrito) {
    if (localStorage.getItem('compraTotal')) {
        let totalActualizado = localStorage.getItem('compraTotal');
        totalCompra = totalActualizado;
    } else {
        totalCompra = 0;
    }
    tablaBody.innerHTML = "";
    
    for (const prod of carrito) {
        let subTotal = prod.precio * prod.cantidad; 
        if (!localStorage.getItem('compraTotal')) {
            totalCompra += subTotal;
    }
    }
    for (const prod of carrito){
        let subTotal = prod.precio * prod.cantidad;

        const tr = document.createElement ('tr');
        tr.innerHTML = `
            <td>
                <button type="button" class="btnDelete" id="${prod.id}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </button>
            <td>
                <img class="imgEnCarrito" src=".${prod.foto}" alt="Card image cap" style="width: 100px; margin:10px;">
                ${prod.marca}
                ${prod.modelo}
            </td>
            <td>${prod.precio.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS"
                })}
            </td>
            <td>
                <div class="inputCantidad">                
                <button id="decrementar-${prod.id}" class="button-cant disminuir btn btn-light">-</button>
				<span class="product-price">${prod.cantidad}</span>
				<button id="incrementar-${prod.id}" class="button-cant btn btn-light">+</button>
                </div>
            </td>
            <td class="subtotal" id= "subtotal-${prod.id}">${subTotal.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS"
                })}
            </td>
        `;

    tablaBody.appendChild (tr);

    // Agrego evento al botón decrementar.
	const decrementar = document.getElementById(`decrementar-${prod.id}`);
	decrementar.addEventListener("click", () => {
    decrementarProducto(prod.id);
	});

		// Agrego evento al botón incrementar.
		const incrementar = document.getElementById(`incrementar-${prod.id}`);
		incrementar.addEventListener("click", () => {
		incrementarProducto(prod.id);
		});      
    }

    //Agrego el total
    totalCarrito.innerText = totalCompra.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
        });
    

    //agrego el evento al boton de eliminar
    let btnDelete = document.querySelectorAll('.btnDelete');
    for (const boton of btnDelete) {
        boton.addEventListener ('click', () => {
            const prodAEliminar = carrito.find ((prod) => prod.id == boton.id);
            eliminarProducto (prodAEliminar);
            Toastify({

                text: "Producto eliminado",
                duration: 1000,
                style: {
                    background: "red",
                },                
                }).showToast();
        })
    }
    

    return (totalCompra);
}

// Disminuir la cantidad
function decrementarProducto (id) {
	const producto = carrito.find((prod) => prod.id === id);
	// Si es 1, hay que eliminarlo porque no podemos tener cantidad cero
	if (producto.cantidad === 1) {
		eliminarProducto(producto);
	} else {
		producto.cantidad--;
		// Guardamos el carrito en el localStorage
		localStorage.setItem("carrito", JSON.stringify(carrito));
		// Actualizamos carrito
		renderizarCarrito(carrito);
	}
};

// Aumentar la cantidad
function incrementarProducto (id){
	const producto = carrito.find((prod) => prod.id === id);
	producto.cantidad++;
	// Guardamos el carrito en el localStorage
	localStorage.setItem("carrito", JSON.stringify(carrito));
	// Actualizamos carrito
	renderizarCarrito(carrito);
};

// Eliminar producto del carrito
function eliminarProducto (prodAEliminar) {
    //Busco el indice del producto en el array
    const index = carrito.findIndex((prod) => prod.id == prodAEliminar.id);
    //Lo comparo con -1 porque el indice de un array arranca desde 0
    if (index > -1) {
        carrito.splice (index, 1);
    }
    //vuelvo a renderizar el carrito
    renderizarCarrito(carrito);
    //Elimino el producto del localStorage y lo vuelvo a guardar
    localStorage.removeItem('carrito');
    guardarCarritoLS(carrito);
}

//Finalizar compra
function finalizarCompra (carrito){
    let btnFinalizar = document.getElementById('finalizarCompra');
    let finalizar = new bootstrap.Modal(document.getElementById('modalValidacion'));

    btnFinalizar.onclick = () => {
        if (carrito.length === 0) {
            finalizar.hide();
            Swal.fire('El carrito está vacío');
        } else {
            finalizar.show();
            totalModal.innerText = 'El total de tu compra es ' + totalCompra.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS"
                });
        }
    }
}


// Borrar LS
function borrarLS (carrito){
    let compraFinalizada = document.getElementById ('compraFinalizada');
    let vaciarCarrito = document.getElementById ('vaciarCarrito')
    compraFinalizada.addEventListener('click', () =>{
    localStorage.clear();
    location.reload();
    })
    vaciarCarrito.addEventListener('click', () =>{
        if (carrito.length == 0) {
            Swal.fire('El carrito está vacío');
        } else {
            localStorage.clear();
            location.reload();
        }
        })
}

// Variable contador actualizada 
function contadorCarro (carrito) {
    carrito = cargarCarritoLS();
    let contador = carrito.length;
    return contador;
}

function mostrarContador (contador){
    if (contador > '0'){
        contadorCarrito.style.display = 'block'
        contadorCarrito.innerText = contador;
}
}