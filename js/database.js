// constructor de objetos
class producto {
    constructor(id, marca, modelo, color, precio, foto, tipo, cantidad){
        this.id=id;
        this.marca = marca.toUpperCase();
        this.modelo = modelo.toUpperCase();
        this.color = color.toUpperCase();
        this.precio = precio;
        this.foto = foto; 
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.disponible = true;
    }
    productoVendido (){
        this.disponible = false;
    }
}

//array de productos
let productos = [
    new producto ('1', 'Adidas', 'Copa Sense.1 FG', 'Blanco', 133000, './img/adidas-copa.png', 'F11',0),
    new producto ('2', 'Adidas', 'Copa Sense FG', 'Negro', 133000, './img/adidas-copa1.png', 'F11',0),
    new producto ('3', 'Adidas', 'Nemeziz 19.2', 'Naranja', 90000, './img/adidas-nemeziz.png', 'F11',0),
    new producto ('4', 'Adidas', 'Nemeziz 19.1', 'Blanco y negro', 90000, './img/adidas-nemeziz1.png', 'F11',0),
    new producto ('5', 'Adidas', 'Predator Mutator 20.1', 'Blanco y negro', 100000, './img/adidas-predator.png', 'F11',0),
    new producto ('6', 'Adidas', 'Predator EDGE.1 Low FG', 'Negro', 71999, './img/adidas-predator1.png', 'F11',0),
    new producto ('7', 'Adidas', 'Predator Freak+', 'Blanco', 123900, './img/adidas-predator2.png', 'F11',0),
    new producto ('8', 'Adidas', 'Predator Mutator 20.1', 'Blanco y naranja', 97999, './img/adidas-predator3.png', 'F11',0),
    new producto ('9', 'Adidas', 'Predator Freak+', 'Negro y rosa', 123900, './img/adidas-predator4.png', 'F11',0),
    new producto ('10', 'Adidas', 'X Speedportal', 'Negro', 80000, './img/adidas-x.png', 'F11',0),
    new producto ('11', 'Nike', 'Hypervenom Phantom III Academy DF FG,', 'Gris', 100000, './img/nike-hyper.png', 'F11',0),
    new producto ('12', 'Nike', 'Mercurial 360', 'Negro', 115000, './img/nike-mercurial.png', 'F11',0),
    new producto ('13', 'Nike', 'Zoom Mercurial Vapor 15 Elite CR7 FG', 'Blanco y celeste', 130000, './img/nike-mercurial1.png', 'F11',0),
    new producto ('14', 'Nike', 'Superfly 8 Academy KM FG/MG', 'Gris', 115000, './img/nike-mercurial2.png', 'F11',0),
    new producto ('15', 'Nike', 'Superfly 8 Elite+', 'Blanco', 135000, './img/nike-mercurial3.png', 'F11',0),
    new producto ('16', 'Nike', 'Superfly 6', 'Amarillo', 90000, './img/nike-mercurial4.png', 'F11',0),
    new producto ('17', 'Nike', 'Superfly 6 Academy MG CR7 Chapter 7', 'Naranja', 90000, './img/nike-mercurial5.png', 'F11',0),
    new producto ('18', 'Nike', 'Zoom Mercurial Superfly 9 Elite AG-Pro', 'Blanco', 120000, './img/nike-mercurial6.png', 'F11',0),
    new producto ('19', 'Nike', 'Tiempo Legend 7 Academy FG', 'Negro', 80000, './img/nike-tiempo.png', 'F11',0),
    new producto ('20', 'Puma', 'Future Ultimate FG/AG', 'Azul', 87599, './img/puma-future.png', 'F11',0),
    new producto ('21', 'Puma', 'Future 1.4 FG/AG Liberty', 'Blanco', 92500, './img/puma-future1.png', 'F11',0),
    new producto ('22', 'Puma', 'Future Z 3.1 MXSG', 'Amarillo', 97200, './img/puma-future2.png', 'F11',0),
    new producto ('23', 'Puma', 'Ultra 1.1 FG/AG', 'Negro y rosa', 85000, './img/puma-ultra.png', 'F11',0),
    new producto ('24', 'Puma', 'Ultra 1.1 FG/AG', 'Naranja', 85000, './img/puma-ultra1.png', 'F11',0),
    new producto ('25', 'Puma', 'Ultra 3.2 FG/AG', 'Negro y amarillo', 85000, './img/puma-ultra2.png', 'F11',0),
    new producto ('26', 'Nike', 'Phantom GT2', 'Blanco y naranja', 134999, './img/nike-phantom3.png', 'F11',0),
    new producto ('27', 'Nike', 'Phantom GT', 'Blancos', 122500, './img/nike-phantom2.png', 'F11',0),
    new producto ('28', 'Nike', 'Tiempo Legend VII Elite FG', 'Azul', 115999, './img/nike-tiempo1.png', 'F11',0),
    new producto ('29', 'Nike', 'Superfly 9 Elite', 'Negro', 124999, './img/nike-mercurial9.png', 'F11',0),
    new producto ('30', 'Adidas', 'Sense 2 FG', 'Negros', 140999, './img/adidas-copa4.png', 'F11',0),
    new producto ('31', 'Adidas', 'Sense 1 FG', 'Negro', 129999, './img/adidas-copa3.png', 'F11',0),
    new producto ('32', 'Adidas', 'Sense 2 FG', 'Blancos', 130999, './img/adidas-copa2.png', 'F11',0),
    new producto ('33', 'Adidas', 'Nemeziz', 'Verde', 110500, './img/adidas-nemeziz2.png', 'F11',0),
    new producto ('34', 'Adidas', 'X Ghosted', 'Negros', 111000, './img/adidas-x3.png', 'F11',0),
    new producto ('35', 'Adidas', 'X Ghosted', 'Rosas', 111000, './img/adidas-x2.png', 'F11',0),
    new producto ('36', 'Adidas', 'Speedportal SG', 'Celestes', 120000, './img/adidas-x1.png', 'F11',0),
    new producto ('37', 'Adidas', 'Predator Zidane', 'Dorados', 95000, './img/adidas-predator5.png', 'F11',0),
    new producto ('38', 'Nike', 'Phantom GT2', 'Azul', 134999, './img/nike-phantom1.png', 'F11',0),
    new producto ('39', 'Nike', 'Phantom GT2', 'Celestes', 134999, './img/nike-phantom.png', 'F11',0),
    new producto ('40', 'Nike', 'Mercurial Superfly VIII', 'Celeste', 125999, './img/nike-mercurial8.png', 'F11',0),
    new producto ('41', 'Nike', 'Mercurial Superfly VII', 'Amarillo y blanco', 134999, './img/nike-mercurial7.png', 'F11',0),
    new producto ('42', 'Puma', 'Future Z 1.3 FG', 'Rojo', 95999, './img/puma-future4.png', 'F11',0),
    new producto ('43', 'Puma', 'Future 5.4 FG/AG', 'Negro', 105000, './img/puma-future3.png', 'F11',0),   
    
    new producto ('44', 'Adidas', 'Predator EDGE 3', 'Violeta', 45000, './img/adidas-predator-f53.png', 'F5',0),
    new producto ('45', 'Adidas', 'Predator EDGE 4', 'Azul', 52999, './img/adidas-predator-f5.png', 'F5',0),
    new producto ('46', 'Adidas', 'Predator EDGE 4', 'Blanco', 52999, './img/adidas-predator-f51.png', 'F5',0),
    new producto ('47', 'Adidas', 'Predator EDGE 4', 'Negro', 52999, './img/adidas-predator-f52.png', 'F5',0),
    new producto ('48', 'Adidas', 'Nemeziz', 'Blanco y negro', 38850, './img/adidas-nemeziz-f5.png', 'F5',0),
    new producto ('49', 'Nike', 'Mercurial Vapor VIII', 'Azul', 53000, './img/nike-mercurial-f52.png', 'F5',0),
    new producto ('50', 'Nike', 'Mercurial Superfly', 'Gris', 60000, './img/nike-mercurial-f51.png', 'F5',0),
    new producto ('51', 'Nike', 'Phantom GT', 'Blanco', 58000, './img/nike-phantom-f5.png', 'F5',0),
    new producto ('52', 'Nike', 'Tiempo', 'Gris', 45000, './img/nike-tiempo-f51.png', 'F5',0),
    new producto ('53', 'Nike', 'Mercurial Superfly', 'Negro', 60000, './img/nike-mercurial-f5.png', 'F5'),0,
    new producto ('54', 'Nike', 'Tiempo', 'Blanco', 48000, './img/nike-tiempo-f5.png', 'F5',0),
    new producto ('55', 'Puma', 'Future', 'Amarillo', 51200, './img/puma-future-f5.png', 'F5',0),
    new producto ('56', 'Puma', 'Future', 'Blanco', 51200, './img/puma-future-f51.png', 'F5',0),
    new producto ('57', 'Puma', 'Ultra', 'Negro', 48000, './img/puma-ultra-f5.png', 'F5',0),
    
];

guardarProductos (productos);