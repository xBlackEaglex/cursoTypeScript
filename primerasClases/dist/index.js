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
//# sourceMappingURL=index.js.map