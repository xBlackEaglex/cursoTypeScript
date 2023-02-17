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