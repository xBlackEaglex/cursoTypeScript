let message: string = "Hola Mundo"

message = 'holi' 


message = 'chao MUndo'
console.log(message)


//------------------------------------------------------------------------------------------------


/**
 * Tipos de datos JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 * 
 * Tipos de datos TS
 * any  (intentar no usar)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 * 
 * Tipos Inferidos (de TS)
 * 
 */

let extincionDinosaurios: number = 76_000_000
let dinosaurioFaborito: string = 'T-Rex'
let extintos: boolean = true

/** 
extintos = 50 >>>> esto daría un error ya que esto es lo que hace el tipado inferido, toma el tipado anterior y lo asigna
es por esto que no es necesario colocar el tipo de dato a cada variable ya que al inicializarla esta tomara ese tipo de dato
 * */ 

//-----------------------------------------------------------------------------------------------

//let miVariables  >>>> esta variable seria de tipo any, ya que no esta inicializada 

//miVariables = 'holiiii'
//miVariables = 35         >>>> el tipo any no debería ser usado ya que permite el cambio de tipo de dato sin dar erro

// lo correcto es que si no vas a inicializar la variable entonces le asignes un tipo de dato


//------------------------------------------------------------------------------------------------


function chanchitoFeliz(config: any) {
    return config
}

// en  las funciones lo ideal es declarar el tipo de dato y no usar any 


//------------------------------------------------------------------------------------------------

// Arrays


let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let nums2: Array<number> = []

//estas son las maneras  para declarar el tipo de dato de un array, también con inicializarlos debería bastar 

// nums.map(x => x.) // el auto completado sugiere métodos del tipo de dato


//------------------------------------------------------------------------------------------------

// Tuplas

let tupla: [number, string[]] = [1, ['chanchito Feliz', 'chanchito Felipe']]


// a la tupla se le asignan los tipos de datos con los que se va a trabajar 


//---------------------------------------------------------------------------------------------------

//Enums

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'
// esta es l amanera de hacerlo sin los enums 


enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'}   // se utiliza PascalCase en todas las variables al usar Enums
const variable1 = Talla.Grande 
console.log(variable1)
// si no le pasamos a cada variable un tipo de dato typescript iniciara la primer variable (Chica) como 0, y a las siguientes con 1,2,3...


const enum LoadingState {Idle, Loading, Success, Error}
const estado = LoadingState.Success
// al inicializar el enum como constante nos d aun código mas optimizado ya que hasta no usar las variables estas no se crearan en el documento .js compilado
// en este caso solo se compila success


//------------------------------------------------------------------------------------------------

// Objects

const object1 = {id: 1, nombre: 'Holi'}



type Direccion = {
        numero: number,
        calle: string,
        pais: string
}


type Persona = {
        readonly id: number,
        nombre: string
        apellido?: string
        talla: Talla,
        direccion: Direccion
}

const objeto: Persona = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'chanchito landia'
    }
}
// se pueden usar objetos de tipo inferido, o declararlos como en este coso
// type esta definiendo el tipo de dato que se usara en 'objeto' pero se puede usar en un futuro para otro object
// si se declara un tipo de dato que no se usa provocara un error es por eso que se usa ? para indicar que es opcional
// readonly evita que podamos asignar valores en un futuro a ese atributo
//objeto.id = 42 >>>>>> por el readonly esta linea daría error 

const arr: Persona[] = []  // este arrego solo puede contener objetos del typo persona


//------------------------------------------------------------------------------------------------

//Funciones 

const fn: () => void = () => {

}

// void en una función significa que no esta devolviendo nada, pero también se puede usar el tipo inferido 


/**

También se pueden declarar asi

function fn() {

}

 */


const fn1: () => number = () => {
    let x = 2
    if (x > 5) {
        return 7
    }else{
        return 4
    }
}
// al asigna rle el tipo number a la función esta tiene que retornar si o si un  numero

const fn2: (a: number) => string = (edad: number) => {
    if (edad > 17)
        return 'puedes pasar'
    return 'no puedes pasar'
}

function validaEdad(edad: number, msg: string = 'chanchito feliz'): string {
    if (edad > 17)
        return `puede ingresar ${msg}`
    return 'no puedes ingresar'
}

const valida = validaEdad(18, 'Roberto')
console.log(valida)

//en esta función se pone por defecto 'chanchito feliz' pero al llamar la función se puede cambiar

//------------------------------------------------------------------------------------------------


//never

function ErrorUser():never {
    throw new Error('Error de usuario')
}
// se usa para una función que necesitamos que entregue un error 


//------------------------------------------------------------------------------------------------

// Union Type 

let puntaje: number | string = 98

puntaje =  'Hola Mundo'

// el union type nos permite asignarle mas de un tipo de dato a una variable 
// lo ideal es invitarlo ya que es como asignar un any

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string
}

let animal: Usuario | Animal = { id: 1, estado: '', name: ''}

// es posible pasarle las propiedades de dos tipos diferentes aun que también seria contraproducente 

function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2 
    }
    return parseInt(n) + 2
}

sumaDos('2')

//--------------------------------------------------------------------------------------------------------

// Intersection types

type Audit = {
    created_at: string,
    modified_at: string
}

type Product = {
    name: string,
}

const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: '',
}

// este tipo de dato (&) nos permite crear un objeto el cual esta obligado a contener las propiedades de los tipos de datos seleccionados

//------------------------------------------------------------------------------------------------


// Literal types 

type Fibo = 0 | 1 | 2 | 3 | 5

const nDeFibo: Fibo = 5 

// como su nombre nos dice nos permite pasar los valores literales que puede recibir en este caso la constante
// se recibiera por ejemplo 7, esto daría error ya que no esta asignado en el type

//---------------------------------------------------------------------------------------------------------------

// NUllable types

function toNumber(s: string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)
}

const n = toNumber(null) 

// esta es la mejor manera de poder recibir un valor undefined o null en una función

//---------------------------------------------------------------------------------------------------------------

// Optional chain operator 

function  getUser(id: number) {
    if (id < 0){
        return null
    }
    return{
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    }
}

// opción 1
const user = getUser(1)
console.log('usuario', user?.created_at)

// opción 2

const arr1 = null

console.log(arr1?.[0])

// opción 3

const fn5:any = null

console.log(fn5?.())

// este operador (?) nos permite acceder a una función, array u objeto y se este devuelve undefined o null, 
// entonces solo nos devolverá undefined y esto no provocara que la compilación  de nuestro código se detenga 

//------------------------------------------------------------------------------------------------

// Nullish coalescing operator 

const difficulty: number | null = 0

const user2 = {
    username: 'chanchito Feliz',
    difficulty: difficulty ?? 1
}

console.log(user2)

//  este operador ?? se usa cuando el valor de un string o el valor de 0 es util para nosotros

//------------------------------------------------------------------------------------------------

// Type assertion 

const elem: any = null

const elem1 = elem as number

// const input = <HTMLInputElement> document.getElementById('username')

// (as) o <...> forza en este caso a la constante a ser de un tipo en especifico, pero es muy susceptible a errores 
// debería usarse solo cuando se esta 100% seguro del tipo de dato que se va a recibir 

//------------------------------------------------------------------------------------------------

//Type narrowing

function Lala(x: string | number) {
    if (typeof x === 'number') {
        x
    }

    if (typeof x === 'string') {
        x
    }
}

// este sirve para llevar por un camino determinado al compilador ya que con el union type introducimos varios tipos de datos
// y con el type narrowing (que es un if en la función) le decimos al compilador cual dato elegir

//--------------------------------------------------------------------------------------------------

// Type unknown

function procesa(algo: unknown){
    if (typeof algo === 'number') {
        return algo.toString()
    }

    if (typeof algo === 'string') { 
        return algo.toUpperCase()
    }

    return 0

// >>>>>>> algo.haceCosas()
// >>>>>>> algo.otrasCosas()
// >>>>>>> algo.genkidama()
}

// es un manera similar pero mas aceptable de usar any, ya que nos permite usarla solo se le cuestionamos el tipo de dato después
// es por eso que genkidama daría error 

//-----------------------------------------------------------------------------------------------------------

// Clases 


// las propiedades son las variables dentro de las clases 
// los métodos son funciones dentro de las clases 


// class Personaje {     // las clases se nombran con mayúsculas 
//     readonly id: number  // readonly vuele la propiedad de solo lectura 
//     name: string
//     nivel: number
//     private _hp: number  // private vuele privada la propiedad evitando su acceso fuera de la clase
//     // se usa _ al inicio de el nombre de la propiedad privada 
//     profesion?: string  // con el ? podemos hacer uso de la propiedad en un futuro
//     constructor(id: number, name: string, nivel: number, hp: number){
//         this.id = id
//         this.name = name
//         this.nivel = nivel
//         this._hp = hp
//     }

//     subirNivel(): number {
//         this.nivel = this.nivel ++
//         return this.nivel
//     }

//     cambiarHp(cantidad: number): number {
//         this._hp = this._hp + cantidad
//         // no pasarse del máximo 
//         return this._hp
//     }

// }

// de la manera anterior se pueden crear clases, pero existe una mejor opción 


class Personaje {   // las clases se nombran con mayúsculas 
    profesion?: string  // con el ? podemos hacer uso de la propiedad en un futuro
    // profeson se deja fuera del constructor por no tener un valor inicial  
    private static _equipo: number = 1
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number){    // private vuele privada la propiedad evitando su acceso fuera de la clase
            // se usa _ al inicio de el nombre de la propiedad privada 
    }

    subirNivel(): number {
        this.nivel = this.nivel ++
        return this.nivel
    }

    static agregarPersonaje(): void {
        Personaje._equipo ++  // Personaje es la clase (esta en mayúsculas)
    }

    cambiarHp(cantidad: number): number {
        this._hp = this._hp + cantidad
        // no pasarse del máximo 
        return this._hp
    }


    get hp(): number {
        return this._hp
    }

    // set hp(cantidad: number) {
    //     this._hp = this._hp + cantidad     >>>>> los set se usan para cambiar el valor de una propiedad al estar fuera de la clase 
    // }

    static getEquipo(): number {
        return Personaje._equipo
    }

}





const personaje = new Personaje(1, 'Nicolas', 1, 100)   // la clase se instancia en minúscula 

personaje.cambiarHp(-10)
// console.log(personaje)


const personaje2 = new Personaje(2, 'Chanchito', 1, 120)
Personaje.agregarPersonaje()   // estoy cambiando desde la clase (la 'p' es mayúscula)

console.log(Personaje.getEquipo())




if (typeof personaje) {
    // esto nos devolverá object
}

if (personaje instanceof Personaje) {
    // esto nos devolverá boolean 
}

//--------------------------------------------------------------------------------------------------------------------
