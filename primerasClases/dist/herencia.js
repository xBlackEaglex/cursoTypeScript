"use strict";
class DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
}
class Producto extends DatosBasicos {
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
}
class Categoria extends DatosBasicos {
    constructor(name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
}
let producto1 = new Producto(100, 1, 'iPhone', 'es un smartphone', new Date(), 1);
let categoria1 = new Categoria('celulares', '', new Date(), 1);
categoria1.agregarProducto(producto1);
console.log(producto1, categoria1);
//# sourceMappingURL=herencia.js.map