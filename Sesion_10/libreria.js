import moment from "moment"

function saludar(str) {
    return `Hola ${str}`
}

// console.log(saludar("Marcos"))

function hora() {
    return moment().format('HH:mm')
}

// console.log(hora())

export {saludar, hora} 