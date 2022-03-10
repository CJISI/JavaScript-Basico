class Figura {
    constructor(color) {
        this._color = color;
    }
    get getColor() {
        return this._color
    }
    set setColor(color) {
        this._color = color;
    }

    calcularArea() {
        return -1
    }

}

// let figura = new Figura('rojo')
// console.log(figura.getColor)

export {
    Figura
}