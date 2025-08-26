// New Binding

function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro');
console.log(auto);

// Windows Binding

window.color = 'Verde'
function colores() {
    console.log(color);
}

colores();