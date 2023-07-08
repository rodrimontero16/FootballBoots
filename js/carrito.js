//tomo lo que necesito del HTML
let tablaBody = document.getElementById('tablabody');
let totalCarrito = document.getElementById ('totalCompra');
let totalModal = document.getElementById('titleModal');

let cantidad = 1;

// declaro la variable del total de la compra
let totalCompra;

//traigo lo que tengo guardado en el localstorage
carrito = cargarCarritoLS();

// Cargo los productos al carrito
renderizarCarrito(carrito);

//finalizar compra
finalizarCompra(carrito);

//Borrar el LS al finalizar la compra
borrarLS(carrito);
