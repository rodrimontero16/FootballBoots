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


//Creando un constructor de objeto por cada marca
class adidas {
    constructor(modelo, colores, talles, precio){
        this.modelo = modelo.toUpperCase();
        this.colores = colores;
        this.talles = talles;
        this.precio = precio;
        this.disponible = true; 
    }
    vendido (){
        this.disponible = false;
    }
}
class nike {
    constructor(modelo, colores, talles, precio){
        this.modelo = modelo.toUpperCase();
        this.colores = colores;
        this.talles = talles;
        this.precio = precio;
        this.disponible = true; 
    }
    vendido (){
        this.disponible = false;
    }
}
class puma {
    constructor (modelo, colores, talles, precio){
        this.modelo = modelo.toUpperCase();
        this.colores = colores;
        this.talles = talles;
        this.precio = precio;
        this.dispnible = true; 
    }
    vendido () {
        this.disponible = false; 
    }
}

// delcaro un array por cada marca
const BotinesPuma = []; 
const BotinesAdidas = [];
const BotinesNike = [];

//agrego objetos a mis arrays
BotinesPuma.push ( new puma ('Future', 'Azul', '40-42', 85000));
BotinesPuma.push ( new puma ('Future', 'Blanco', '39-41', 85000));
BotinesPuma.push ( new puma ('Future', 'Amarillo', '41', 90000));
BotinesAdidas.push ( new adidas ('Copa', 'Blanco', '41-43', 110000));
BotinesAdidas.push ( new adidas ('Copa', 'Negro', '42', 110000));
BotinesNike.push ( new nike ('Phantom', 'Gris', '43', 95000));

// ver los arrays 
console.log (BotinesAdidas);
console.log (BotinesPuma);
console.log (BotinesNike);

// vendo algunos modelos y aplico el metodo vendido
BotinesAdidas[0].vendido();
BotinesNike[0].vendido();

// elimino algun objeto de uno de mis arrays 
BotinesPuma.splice(2,1);