console.log(sumar(1, 3))

function sumar(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Uno de los parametros no es un numero. ')
        }
        return a + b
    } catch (error) {
            console.error(error)
    }
}