class Figura {
    _color = "";
    constructor(color) {
        this._color = color;
    }
    get getColor(){ return this._color}
    set setColor(color){
        this._color = color;
    }
}