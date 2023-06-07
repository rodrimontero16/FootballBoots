// //Bienvenida al sitio
// let nombreCliente = prompt ('Bienvenido a FootballBoots, ingresa tu nombre por favor.');
//     alert ('Bienvenido '+nombreCliente+'!');


// //Seleccion de botines a adquirir

// //Defino variables
// let stock = prompt('Nuestro stock es el siguiente\n1-Adidas predator $120.000\n2-Adidas copa $115.000\n3-Nike mercurial $128.000\n4-Nike tiempo $95.000\n5-Nike Phantom $130.000\n6-Puma future $100.000\nSelecciona el número que deseas adquirir\nf-Finalizar elección o cancelar');
// let producto1 = 0;
// let producto2 = 0;
// let producto3 = 0;
// let producto4 = 0;
// let producto5 = 0;
// let producto6 = 0;

// //Defino function para saber el precio total de la compra
// function calcularPrecioTotal() {
// let precioTotal = producto1 + producto2 + producto3 + producto4 + producto5 + producto6;
// return precioTotal;
// }

//misma funcion pero =>
// const calcularPrecioTotal = () => {
//     let precioTotal = producto1 + producto2 + producto3 + producto4 + producto5 + producto6;
//     return precioTotal;
// }



// //Armo el ciclo para la eleccion de la compra
// while (stock != 'f') {
//     switch (stock) {
//         case '1':
//             producto1 = 120000;
//             alert('Elegiste Adidas predator');
//             break;
//         case '2':
//             producto2 = 115000;
//             alert('Elegiste Adidas Copa');
//             break;
//         case '3':
//             producto3 = 128000;
//             alert('Elegiste Nike Mercurial');
//             break;
//         case '4':
//             producto4 = 95000;
//             alert('Elegiste Nike Tiempo');
//             break;
//         case '5':
//             producto5 = 130000;
//             alert('Elegiste Nike Phantom');
//             break;
//         case '6':
//             producto6 = 100000;
//             alert('Elegiste Puma Future');
//             break;
//         }
//     stock = prompt('¿Desea sumar otro producto más? \nNuestro stock es el siguiente\n1-Adidas predator $120.000\n2-Adidas copa $115.000\n3-Nike mercurial $128.000\n4-Nike tiempo $95.000\n5-Nike Phantom $130.000\n6-Puma future $100.000\nSelecciona el número que deseas adquirir\nf-Finalizar elección y continuar con la compra');
// }

// //Llamo la function para obtener el precio total
// const precioTotal = calcularPrecioTotal();

// //Finalizar compra
// if (precioTotal == 0) {
//     alert ('Gracias por visitarnos, lo esperamos pronto.')
//     } else if (precioTotal != 0){
//         alert('El precio total de los productos elegidos es: $' + precioTotal);
//         let finalizarCompra = prompt ('¿Desea confirmar su compra de $'+precioTotal+'?\n1-Para confirmar\n2-Para cancelar');
//         if (finalizarCompra == '1'){
//             alert ('Felicitaciones, su compra fue confirmada.');
//         } else if (finalizarCompra == '2'){
//             alert ('Gracias por visitarnos, lo esperamos pronto.');
//         }
//     }


// constructor de objetos
class producto {
    constructor(marca, modelo, color,talles, precio, id){
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.color = color.toUpperCase();
        this.talles = talles;
        this.precio = precio;
        this.id=id;
        this.disponible = true;
    }
    productoVendido (){
        this.disponible = false;
    }
}

//declaro mi array
const productos = [
    new producto ('adidas', 'copa', 'blanco', '39-43', 110000, '0'),
    new producto ('adidas', 'copa', 'negro', '39-43', 110000, '1'),
    new producto ('adidas', 'nemeziz', 'naranja', '39-43', 90000, '2'),
    new producto ('adidas', 'nemeziz', 'blanco', '39-43', 90000, '3'),
    new producto ('adidas', 'predator', 'blanco y negro', '39-43', 100000, '4'),
    new producto ('adidas', 'predator', 'negro', '39-43', 95000, '5'),
    new producto ('adidas', 'predator', 'blanco', '39-43', 125000, '6'),
    new producto ('adidas', 'predator', 'blanco y naranja', '39-43', 10000, '7'),
    new producto ('adidas', 'predator', 'negro y rosa', '39-43', 125000, '8'),
    new producto ('adidas', 'x', 'negro', '39-43', 80000, '9'),
    new producto ('nike', 'phantom', 'gris', '39-43', 100000, '10'),
    new producto ('nike', 'mercurial', 'negro', '39-43', 115000, '11'),
    new producto ('nike', 'mercurial', 'blanco y azul', '39-43', 130000, '12'),
    new producto ('nike', 'mercurial', 'gris', '39-43', 115000, '13'),
    new producto ('nike', 'mercurial', 'blanco', '39-43', 135000,  '14'),
    new producto ('nike', 'mercurial', 'amarillo', '39-43', 90000, '15'),
    new producto ('nike', 'mercurial', 'naranja', '39-43', 90000, '16'),
    new producto ('nike', 'mercurial', 'blanco', '39-43', 120000, '17'),
    new producto ('nike', 'tiempo', 'negro', '39-43', 80000, '18'),
    new producto ('puma', 'future', 'azul', '39-43', 95000, '19'),
    new producto ('puma', 'future', 'blanco', '39-43', 95000, '20'),
    new producto ('puma', 'future', 'amarillo', '39-43', 105000, '21'),
    new producto ('puma', 'ultra', 'negro y rosa', '39-43', 85000, '22'),
    new producto ('puma', 'ultra', 'naranja', '39-43', 85000, '23'),
    new producto ('puma', 'ultra', 'negro y amarillo', '39-43', 85000, '24')
];

productos[10].productoVendido();

//muestro el array
console.table (productos);

//practicando metodos de busqueda y transformacion

//primero le pido al usuario para filtrar
let filtroPedido = prompt ('Busca por marca o modelo').toUpperCase();
const productosFiltrados = productos.filter ((producto) => (producto.marca.toUpperCase().includes(filtroPedido) || producto.modelo.toUpperCase().includes(filtroPedido)) && producto.disponible === true);
console.table (productosFiltrados);

//le muestro el resultado de su busqueda y si desea comprar
let resultadoBusqueda = 'El resultado de su busqueda es:\n';
productosFiltrados.forEach((producto) => {
    resultadoBusqueda += `ID: ${producto.id} - ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
});
if (productosFiltrados.length > 0) {
    alert (resultadoBusqueda);
} else {
    alert('No se encontraron resultados');
}