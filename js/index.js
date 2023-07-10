//Defino la variable producto para la asincronia
let productos;
obtenerJSONProds();

// Accesos al DOM
const containerProds = document.getElementById('containerProds');
const contadorCarrito = document.getElementById ('contadorCarrito');
const titleProds = document.getElementById('titleProds');
const filtroTipo = document.getElementById('filtroTipo');
const filtroMarca = document.getElementById('filtroMarca');
const minPrecio = document.getElementById('min');
const maxPrecio = document.getElementById('max');

// Array para productos que van al carrito
let carrito = [];

//Llamo a la funcion de los filtros
aplicarFiltros();
borrarFiltros();

//Muestro el contador
contador = contadorCarro();
mostrarContador(contador);
