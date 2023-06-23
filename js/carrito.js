//tomo lo que necesito del HTML
let tablaBody = document.getElementById('tablabody');
let totalCarrito = document.getElementById ('totalCompra');

// declaro la variable del total de la compra
let totalCompra;

//traigo lo que tengo guardado en el localstorage
const carritoEnLS = JSON.parse(localStorage.getItem('carrito')) || [];

// Cargo los productos al carrito
renderizarCarrito(carritoEnLS);

// Agrego el total al HTML
totalCarrito.innerText = '$' + totalCompra.toLocaleString('es-ES');
