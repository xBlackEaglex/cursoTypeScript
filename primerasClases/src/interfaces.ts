interface Animalito {
    name: string;

    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animalito {
    name: string = 'Rocinante'

    caminar() {
        console.log('caminando');
    }

    onomatopeya(): string {
        return 'hin'
    }
}


class Cerdo implements Animalito {
    name: string = 'chanchito'

    caminar() {
        console.log('caminando');
    }

    onomatopeya(): string {
        return 'oinc'
    }
}

class Perro implements Animalito {
    name: string = 'Fido';
    caminar(): void {
        console.log('Perro caminando');
    }
    onomatopeya(): string {
        return 'guau'
    }

}

class DiccionarioUsuarios {
    [id: string]: string
}

let diccionarioUsuarios = new DiccionarioUsuarios()

diccionarioUsuarios['1a'] = 'usuario 1'
diccionarioUsuarios['a1'] = 'usuario 2'

console.log(diccionarioUsuarios)
