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
}

let rectangulo = new Rectangulo(20,20,"azul")
console.log(rectangulo.getColor)