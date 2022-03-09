export default class Coche {
    #peso = 0;
    #potencia = 0;
    #marca = "";

    constructor(peso, potencia, marca) {
        if ((typeof peso) === 'number' && (typeof potencia) === 'number') {
            this.#peso = peso;
            this.#potencia = potencia;
        }
        if ((typeof marca) === 'string') {
            this.#marca = marca;
        }
    }
    get getPeso() {
        return this.#peso
    }
    set setPeso(peso) {
        this.#peso = peso;
    }
    get getPotencia() {
        return this.#potencia
    }
    set setPotencia(potencia) {
        this.#potencia = potencia;
    }
    get getMarca() {
        return this.#marca
    }
    set setMarca(marca) {
        this.#marca = marca;
    }
}