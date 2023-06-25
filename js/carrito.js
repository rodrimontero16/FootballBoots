//tomo lo que necesito del HTML
let tablaBody = document.getElementById('tablabody');
let totalCarrito = document.getElementById ('totalCompra');
let totalModal = document.getElementById('titleModal');
let confirmarCompra = document.getElementById('confirmarCompra');

// declaro la variable del total de la compra
let totalCompra;

//traigo lo que tengo guardado en el localstorage
carrito = cargarCarritoLS();

// Cargo los productos al carrito
renderizarCarrito(carrito);

//IDEAS
//En el carrito a la celda cantidad hacerle una funcion que me vaya diciendo cuantas veces hice click en el boton de un determinado producto y que por cada vez que haga click me sume uno y eso me lo multiplique por el prod precio para tener el subtotal

// con cantidad.value puedo multriplicar por el valor que tenga el input

// popup al agregar al carrito mas numero en el icono de carrito

// que se actualice la cantidad

// boton de aplicar filtro por precio
