export default class Coche {
    
    peso = 0;
    potencia = 0;
    marca = '';

    constructor(peso, potencia, marca) {
        if ((typeof peso) === 'number' && (typeof potencia) === 'number') {
            this.peso = peso;
            this.potencia = potencia;
        }
        if ((typeof marca) === 'string') {
            this.marca = marca;
        }
        
    }
}

