//tomo lo que necesito del HTML
let tablaBody = document.getElementById('tablabody');
let totalCarrito = document.getElementById ('totalCompra');

// declaro la variable del total de la compra
let totalCompra;

// //traigo lo que tengo guardado en el localstorage
carrito = cargarCarritoLS();
// Cargo los productos al carrito
renderizarCarrito(carrito);

// // Agrego el total al HTML
// totalCarrito.innerText = '$' + totalCompra.toLocaleString('es-ES');
