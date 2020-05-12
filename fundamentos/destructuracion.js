let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};

let { nombre: primerNombre, apellido, poder } = deadpool;

console.log(primerNombre, apellido, poder);

console.log(deadpool.getNombre());