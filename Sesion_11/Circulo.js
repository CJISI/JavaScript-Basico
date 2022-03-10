import {
    Figura
} from "./Figura.js";

class Circulo extends Figura {
    radio = 0
    constructor(radio, color) {
        super(color)
        this.radio = radio
    }
}

let circulo = new Circulo(20,"rojo")
console.log(cir.getColor)
