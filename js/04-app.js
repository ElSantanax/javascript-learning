// Implicit binding

const usuario = {
    nombre: 'José',
    edad: 27,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },

    mascota: {
        nombre: 'Copito',
        edad: 2,
        informacion() {
            console.log(`Su nombre es ${this.nombre} y tiene ${this.edad} años`);
        },
    }
}

usuario.informacion();
usuario.mascota.informacion();