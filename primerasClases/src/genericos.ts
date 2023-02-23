function log<T, V>(a: T, b: V): V {
    console.log(a,b);
    return b
}

log<string, number>('dato ', 1)
log<string, string>('dato', 'chanchito feliz')

log(1, 2)
log('saludo ', 'HOla Mundo')


// Ejemplo mas realista

async function fetchData<T>(recurso:string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id:string,
    name:string
}

async function main(){
    const user = await fetchData<User>('/usuarios')
    // user. >>>>> esto daria acceso a los atributos del type 
}

//-------------------------------------------------------------------------------------------------------

// Genéricos en clases 

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T>{
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({encender: () => {}, apagar: () => {}})

//programador.computador.

//-------------------------------------------------------------------------------------------------------------

// Genéricos en Interface

interface KeyValue<T, V>{
    key: T,
    value: V
}

interface Products {
    id: string
}

function fetchProduct(): KeyValue<string, Products> {
    return {
        key: 'id de producto',
        value: {id:  'id de producto'}
    }
}

function fetchStocks(): KeyValue<string, number> {
    return {
        key: 'id de producto',
        value: 500
    }
}

//------------------------------------------------------------------------------------------------------------

// constraints 

// interface Usuario1 {
//     id: string,
//     name: string
// }

class Usuario1 {
    constructor(public id: string, public name: string){}
}

function print<T extends Usuario1>(t: T): T{
    console.log(t);
    return t
}

print({id: 'user_id', name: 'Felipe'}) 

//------------------------------------------------------------------------------------------------

//Genéricos y herencias

class Estado<T> {
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t);
    }

    getEstado(): T[]{
        return this.data
    }
}

type ObjectId = {
    id: string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T>{
    eliminar(id: string){
        this.data = this.data.filter(x => x.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuario1>{
    reiniciarContrasenas() {
        //lógica
    }
}

const estadoUsuarios = new EstadoUsuarios()

//------------------------------------------------------------------------------------------------

//Operador Keyof

type Calendar = {
    id: number,
    fuente: string,
    duenio: string,
}

const calendar: Calendar = {id: 1, fuente: 'Gooogle', duenio: 'yo'}

function getProp<T>(objeto: T, property: keyof T): unknown {
    return objeto[property]
}

//------------------------------------------------------------------------------------------------

//Utility Types 

type Punto = {
    x: number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto>  // esto crea un type nuevo con todas sus propiedades opcionales

type PuntoRequerido =  Required<Punto> // esto crea un type nuevo con todas sus propiedades requeridas

const keyValue: Record<string, number> = {
    'soy un string':42
}

const p: Omit<Punto, 'desc'> = {
    x: 1,
    y: 2,
}                // este omite la propiedad que le pasemos en este caso desc

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 2,
}                      // crea una nueva variable solo con las propiedades seleccionadas 

const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 2,
    desc: 'soy una descripción'
}                           // crea una nueva variable la cual es de solo lectura 
