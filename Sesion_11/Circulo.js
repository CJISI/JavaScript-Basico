import {
    Figura
} from "./Figura.js";

class Circulo extends Figura {
    radio = 0
    constructor(radio, color) {
        super(color)
        this.radio = radio
    }

    calcularArea() {
        return this.radio * 3.14
    }

}

let circulo = new Circulo(20,"rojo")
console.log("El color del circulo es " + circulo.getColor)

console.log('El area del ciruclo es ' + circulo.calcularArea().toFixed(2))
