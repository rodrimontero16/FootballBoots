//Acceso al DOM
let tablaBody = document.getElementById('tablabody');
let totalCarrito = document.getElementById ('totalCompra');
let totalModal = document.getElementById('titleModal');

let cantidad = 1;

// Variable del total de la compra
let totalCompra;

//Cargo lo que tengo guardado en el localstorage
carrito = cargarCarritoLS();

// Cargo los productos al carrito
renderizarCarrito(carrito);

//Finalizar compra
finalizarCompra(carrito);

//Borrar el LS al finalizar la compra
borrarLS(carrito);
