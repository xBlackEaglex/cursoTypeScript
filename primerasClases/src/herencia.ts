/**
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 *                    >>>>>> en estas dos clases Producto y Categoria se repiten las propiedades
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

class DatosBasicos{
    constructor(
        public name: string,
        public desc: string,
        public created_at: Date,
        public created_by: number,
    ) {}

    get fullYear(){ 
        return this.created_at.getFullYear();
    }
}



class Producto extends DatosBasicos{
    constructor (
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
        ) {
            super(name, desc, created_at, created_by)
        }
}



class Categoria extends DatosBasicos{
    public productos: Producto[] = []
    constructor (
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,
        ) {
            super(name, desc, created_at, created_by)
        }

        agregarProducto(producto: Producto){
            this.productos.push(producto)
        }
}





let producto1 = new Producto(
    100, 
    1,
    'iPhone',
    'es un smartphone',
    new Date(),
    1
)

let categoria1 = new Categoria(
    'celulares',
    '',
    new Date(),
    1
)

categoria1.agregarProducto (producto1)
console.log(producto1, categoria1)
