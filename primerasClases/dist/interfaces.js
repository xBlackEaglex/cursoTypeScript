"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin';
    }
}
class Cerdo {
    constructor() {
        this.name = 'chanchito';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'oinc';
    }
}
class Perro {
    constructor() {
        this.name = 'Fido';
    }
    caminar() {
        console.log('Perro caminando');
    }
    onomatopeya() {
        return 'guau';
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'usuario 1';
diccionarioUsuarios['a1'] = 'usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map