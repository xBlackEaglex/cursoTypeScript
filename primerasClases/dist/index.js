"use strict";
let message = "Hola Mundo";
message = 'holi';
message = 'chao MUndo';
console.log(message);
let extincionDinosaurios = 76000000;
let dinosaurioFaborito = 'T-Rex';
let extintos = true;
function chanchitoFeliz(config) {
    return config;
}
let animales = ['chanchito', 'feliz', 'felipe'];
let nums = [1, 2, 3];
let checks = [];
let nums2 = [];
let tupla = [1, ['chanchito Feliz', 'chanchito Felipe']];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const estado = 2;
const object1 = { id: 1, nombre: 'Holi' };
const objeto = {
    id: 1,
    nombre: 'Hola Mundo',
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'chanchito landia'
    }
};
const arr = [];
const fn = () => {
};
const fn1 = () => {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    else {
        return 4;
    }
};
const fn2 = (edad) => {
    if (edad > 17)
        return 'puedes pasar';
    return 'no puedes pasar';
};
function validaEdad(edad, msg = 'chanchito feliz') {
    if (edad > 17)
        return `puede ingresar ${msg}`;
    return 'no puedes ingresar';
}
const valida = validaEdad(18, 'Roberto');
console.log(valida);
function ErrorUser() {
    throw new Error('Error de usuario');
}
let puntaje = 98;
puntaje = 'Hola Mundo';
let animal = { id: 1, estado: '', name: '' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
sumaDos('2');
const product = {
    created_at: '',
    modified_at: '',
    name: '',
};
const nDeFibo = 5;
function toNumber(s) {
    if (!s) {
        return 0;
    }
    return parseInt(s);
}
const n = toNumber(null);
function getUser(id) {
    if (id < 0) {
        return null;
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    };
}
const user = getUser(1);
console.log('usuario', user === null || user === void 0 ? void 0 : user.created_at);
const arr1 = null;
console.log(arr1 === null || arr1 === void 0 ? void 0 : arr1[0]);
const fn5 = null;
console.log(fn5 === null || fn5 === void 0 ? void 0 : fn5());
const difficulty = 0;
const user2 = {
    username: 'chanchito Feliz',
    difficulty: difficulty !== null && difficulty !== void 0 ? difficulty : 1
};
console.log(user2);
const elem = null;
const elem1 = elem;
function Lala(x) {
    if (typeof x === 'number') {
        x;
    }
    if (typeof x === 'string') {
        x;
    }
}
function procesa(algo) {
    if (typeof algo === 'number') {
        return algo.toString();
    }
    if (typeof algo === 'string') {
        return algo.toUpperCase();
    }
    return 0;
}
class Personaje {
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        this.nivel = this.nivel++;
        return this.nivel;
    }
    static agregarPersonaje() {
        Personaje._equipo++;
    }
    cambiarHp(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje._equipo;
    }
}
Personaje._equipo = 1;
const personaje = new Personaje(1, 'Nicolas', 1, 100);
personaje.cambiarHp(-10);
const personaje2 = new Personaje(2, 'Chanchito', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
if (typeof personaje) {
}
if (personaje instanceof Personaje) {
}
//# sourceMappingURL=index.js.map