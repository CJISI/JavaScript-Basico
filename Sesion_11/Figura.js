class Figura {
    _color = "";
    constructor(color) {
        this._color = color;
    }
    get getColor() {
        return this._color
    }
    set setColor(color) {
        this._color = color;
    }
}

// let figura = new Figura('rojo')
// console.log(figura.getColor)

export {
    Figura
}