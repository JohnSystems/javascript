var lista = ["John", "Júlia", "Alanna", "Nathan"]

function imprimaLista () {
    for (let index = 0; index < lista.length; index++) {
        if (index / 2 == 1) {
            console.log(lista[index])
        }  
    }
}

imprimaLista()