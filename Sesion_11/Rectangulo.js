import {
    Figura
} from "./Figura.js";

class Rectangulo extends Figura {
    base = 0
    altura = 0

    constructor(base, altura, color) {
        super(color)
        this.base = base
        this.altura = altura
    }

    calcularArea(){
        return this.base * this.altura
    }

}

let rectangulo = new Rectangulo(20,20,"azul")
console.log('El color del rectangulo es ' + rectangulo.getColor)

console.log('El area del rectangulo es ' + rectangulo.calcularArea().toFixed(2))