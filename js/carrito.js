//tomo el tablabody
let tablaBody = document.getElementById('tablabody');

//traigo lo que tengo guardado en el ls
const carritoEnLS = JSON.parse(localStorage.getItem('carrito'))
console.table(carritoEnLS);

// Función para renderizar el carrito
function renderizarCarrito(prods) {
    for (const prods of carritoEnLS) {
        tablaBody.innerHTML += `
        <tr>
            <td>${prods.marca} ${prods.modelo}</td>
            <td>${prods.precio}</td>
            <td>1</td>
            <td id="subtotal>${prods.precio}</td>
        </tr>
    `;
    }
}

//renderizo los productos en el carrito
renderizarCarrito(carritoEnLS);