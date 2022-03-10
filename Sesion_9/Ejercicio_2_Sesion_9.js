console.log(sumar(1,"2"))

function sumar(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
             throw new Error('Uno de los parametros no es un numero. ')
        }
        return a + b
    } catch (error) {
            return console.error(error.message)
    }
}