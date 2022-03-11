const express = require('express');
const app = express()

app.use(express.static(__dirname + '/public/'))

app.listen('4000', () => {
    console.log('Servidor web escuchando el puerto 4000')
})

console.log('Servidor iniciado')