// accedo a mi div en html por el id
const containerProds = document.getElementById('containerProds');
const contadorCarrito = document.getElementById ('contadorCarrito');
const titleProds = document.getElementById('titleProds');
const filtroTipo = document.getElementById('filtroTipo');
const filtroMarca = document.getElementById('filtroMarca');
const minPrecio = document.getElementById('min');
const maxPrecio = document.getElementById('max');

// creo el array para los productos del carro
let carrito = [];

// cargo los productos a la tienda 
// renderizarProds (productos);

//muestro el contador
contador = contadorCarro();
mostrarContador(contador);
