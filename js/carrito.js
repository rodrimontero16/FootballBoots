//tomo el tablabody
let tablaBody = document.getElementById('tablabody');
let totalCompra = 0;
let totalCarrito = document.getElementById ('totalCompra');

//traigo lo que tengo guardado en el ls
const carritoEnLS = JSON.parse(localStorage.getItem('carrito'))
console.table(carritoEnLS);

// Función para renderizar el carrito
function renderizarCarrito(prods) {
    for (const prods of carritoEnLS) {
        const subtotalProducto = prods.precio;
        totalCompra += subtotalProducto;

        tablaBody.innerHTML += `
        <tr>
            <td>${prods.marca} ${prods.modelo}</td>
            <td>$${subtotalProducto.toLocaleString('es-ES')}</td>
            <td>1</td>
            <td class="subtotal">$${subtotalProducto.toLocaleString('es-ES')}</td>
        </tr>
    `;
    }
}

// Renderizar los productos en el carrito
renderizarCarrito(carritoEnLS);

// Actualizar el total
totalCarrito.innerText = '$' + totalCompra.toLocaleString('es-ES');

