//tomo el tablabody
let tablaBody = document.getElementById('tablabody');
let totalCompra = 0;
let totalCarrito = document.getElementById ('totalCompra');


//traigo lo que tengo guardado en el ls
const carritoEnLS = JSON.parse(localStorage.getItem('carrito')) || [];


// Función para renderizar el carrito
function renderizarCarrito(carritoEnLS) {
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

    
    //tomo los botones para eliminar un producto
    let btnDelete = document.querySelectorAll('.btnDelete');
    //evento para eliminar el producto
    for (const boton of btnDelete) {
        boton.addEventListener ('click', () => {
            const prodAEliminar = carritoEnLS.find ((prod) => prod.id == boton.id);
            eliminarProducto (prodAEliminar);
        })
    }    
}

// Renderizar los productos en el carrito
renderizarCarrito(carritoEnLS);
// Actualizar el total
totalCarrito.innerText = '$' + totalCompra.toLocaleString('es-ES');

// funcion para eliminar el producto del carrito
function eliminarProducto (prodAEliminar) {
    const index = carritoEnLS.findIndex((prod) => prod.id == prodAEliminar.id);
    if (index > -1) {
        carritoEnLS.splice (index, 1);
    }
    // Vaciar el contenido de la tabla
    tablaBody.innerHTML = "";
    // Volver a renderizar el carrito
    renderizarCarrito(carritoEnLS);
    // Actualizar el total
    totalCompra = 0;
    for (const prod of carritoEnLS) {
        totalCompra += prod.precio;
    }
    totalCarrito.innerText = '$' + totalCompra.toLocaleString('es-ES');
    //Elimino el producto del localStorage y lo vuelvo a guardar
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify(carritoEnLS));
}


// LOGRAR QUE EL TOTAL COMPRA DE LA LINEA 70 SE OBTENGA SUMANDO EL SUBTOTAL