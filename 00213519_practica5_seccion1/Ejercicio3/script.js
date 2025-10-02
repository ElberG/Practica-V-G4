const estanteria = {
    libros: [{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false,
    },
    {
        nombre: 'El mundo amarillo',
        autor: 'Alberto Espinosa',
        leido: false,
    },    
    {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: false,
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false,
    },
        {
        nombre: 'Bersek',
        autor: 'Kentaro Miura',
        leido: false,
    },
        {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false,
    }],
    log() {
        const { libros } = this;
        let resultado = ''
        for (const libro of libros) {
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}
            ${prefijo} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado)
    },
    sugerencial() {
        const librosNoLeidos = this.libros.filter(libro => !libro.leido)
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
        const elementosRandom = librosNoLeidos[indiceRandom]
        console.log(`Te sugiero ${elementosRandom.nombre} de ${elementosRandom.autor}`)
    }
}

console.log(estanteria.log())
console.log(estanteria.sugerencial())