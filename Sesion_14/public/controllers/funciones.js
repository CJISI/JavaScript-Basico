let lista = ['Juan', 'Alberto', 'Antonio', 'Laura', 'Nerea', 'Aida']

listarNombres(lista)

function listarNombres(lista) {
    let elemento = document.querySelector('#lista')
    ul = '<ul>'
    lista.forEach(e => {
        ul += '<li>' + e + '</li>'
    })
    ul += '</ul>'
    elemento.innerHTML = ul
}