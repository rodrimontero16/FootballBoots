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

productos[4].productoVendido();
productos[10].productoVendido();

//muestro el array
console.table (productos);

//practicando metodos de busqueda y transformacion

//primero le pido al usuario para filtrar
let filtroPedido = prompt ('Busca por marca o modelo').toUpperCase();
const productosFiltrados = productos.filter ((producto) => (producto.marca.toUpperCase().includes(filtroPedido) || producto.modelo.toUpperCase().includes(filtroPedido)) && producto.disponible === true);

//le muestro el resultado de su busqueda y si desea comprar
let resultadoBusqueda = 'El resultado de su busqueda es:\n';
productosFiltrados.forEach((producto) => {
    resultadoBusqueda += `ID: ${producto.id} - ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
});
if (productosFiltrados.length > 0) {
    let adquirirProducto = prompt (resultadoBusqueda+ '\n ¿Desea adquirir alguno de estos productos? Seleccione el ID o F para finalizar');
        if (adquirirProducto.toUpperCase() == 'F') {
            alert('Gracias por visitarnos.');
        } else {
            const productoSeleccionado = productosFiltrados.find((producto) => producto.id == (adquirirProducto));
            if (productoSeleccionado) {
                const resultadoCompra = `Usted ha adquirido:\n${productoSeleccionado.marca} ${productoSeleccionado.modelo} por un precio de $${productoSeleccionado.precio}. ¡Gracias por su compra!`;
                alert(resultadoCompra);
            } else {
                alert('El ID seleccionado no es válido');
            }
    }
} else {
    alert('No se encontraron resultados');
}