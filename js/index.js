// accedo a mi div en html por el id
const containerAdidas = document.getElementById('adidasProds');
const containerNike = document.getElementById('nikeProds');
const containerPuma = document.getElementById('pumaProds');
const contadorCarrito = document.getElementById ('contadorCarrito');

// creo el array para los productos del carro
let carrito = [];

// cargo los productos a la tienda 
renderizarProds (productos);

//muestro el contador
contador = contadorCarro();
mostrarContador(contador);