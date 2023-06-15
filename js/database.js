// constructor de objetos
class producto {
    constructor(id, marca, modelo, color, precio, foto){
        this.id=id;
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.color = color.toUpperCase();
        this.precio = precio;
        this.foto = foto; 
        this.disponible = true;
    }
    productoVendido (){
        this.disponible = false;
    }
}

//array de productos

const productos = [
    new producto ('1', 'Adidas', 'Copa Sense.1 FG', 'Blanco', 133000, './img/adidas-copa.png'),
    new producto ('2', 'Adidas', 'Copa Sense FG', 'Negro', 133000, './img/adidas-copa1.png'),
    new producto ('3', 'Adidas', 'Nemeziz 19.2', 'Naranja', 90000, './img/adidas-nemeziz.png'),
    new producto ('4', 'Adidas', 'Nemeziz 19.1', 'Blanco y negro', 90000, './img/adidas-nemeziz1.png'),
    new producto ('5', 'Adidas', 'Predator Mutator 20.1', 'Blanco y negro', 100000, './img/adidas-predator.png'),
    new producto ('6', 'Adidas', 'Predator EDGE.1 Low FG', 'Negro', 71999, './img/adidas-predator1.png'),
    new producto ('7', 'Adidas', 'Predator Freak+', 'Blanco', 123900, './img/adidas-predator2.png'),
    new producto ('8', 'Adidas', 'Predator Mutator 20.1', 'Blanco y naranja', 97999, './img/adidas-predator3.png'),
    new producto ('9', 'Adidas', 'Predator Freak+', 'Negro y rosa', 123900, './img/adidas-predator4.png'),
    new producto ('10', 'Adidas', 'X Speedportal', 'Negro', 80000, './img/adidas-x.png'),
    new producto ('11', 'Nike', 'Hypervenom Phantom III Academy DF FG,', 'Gris', 100000, './img/nike-hyper.png'),
    new producto ('12', 'Nike', 'Mercurial 360', 'Negro', 115000, './img/nike-mercurial.png'),
    new producto ('13', 'Nike', 'Zoom Mercurial Vapor 15 Elite CR7 FG', 'Blanco y celeste', 130000, './img/nike-mercurial1.png'),
    new producto ('14', 'Nike', 'Superfly 8 Academy KM FG/MG', 'Gris', 115000, './img/nike-mercurial2.png'),
    new producto ('15', 'Nike', 'Superfly 8 Elite+', 'Blanco', 135000, './img/nike-mercurial3.png'),
    new producto ('16', 'Nike', 'Superfly 6', 'Amarillo', 90000, './img/nike-mercurial4.png'),
    new producto ('17', 'Nike', 'Superfly 6 Academy MG CR7 Chapter 7', 'Naranja', 90000, './img/nike-mercurial5.png'),
    new producto ('18', 'Nike', 'Zoom Mercurial Superfly 9 Elite AG-Pro', 'Blanco', 120000, './img/nike-mercurial6.png'),
    new producto ('19', 'Nike', 'Tiempo Legend 7 Academy FG', 'Negro', 80000, './img/nike-tiempo.png'),
    new producto ('20', 'Puma', 'Future Ultimate FG/AG', 'Azul', 87599, './img/puma-future.png'),
    new producto ('21', 'Puma', 'Future 1.4 FG/AG Liberty', 'Blanco', 92500, './img/puma-future1.png'),
    new producto ('22', 'Puma', 'Future Z 3.1 MXSG', 'Amarillo', 97200, './img/puma-future2.png'),
    new producto ('23', 'Puma', 'Ultra 1.1 FG/AG', 'Negro y rosa', 85000, './img/puma-ultra.png'),
    new producto ('24', 'Puma', 'Ultra 1.1 FG/AG', 'Naranja', 85000, './img/puma-ultra1.png'),
    new producto ('25', 'Puma', 'Ultra 3.2 FG/AG', 'Negro y amarillo', 85000, './img/puma-ultra2.png')
];