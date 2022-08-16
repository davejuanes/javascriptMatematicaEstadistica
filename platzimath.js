function esPar(lista) {
    return !(lista.length % 2)
}

function esImpar(lista) {
    return lista.length % 2
}

function calcularModa(lista) {
    const listaCount = {}

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i]

        if (listaCount[elemento]) {
            listaCount[elemento] += 1
        } else {
            listaCount[elemento] = 1
        }        
    }
    const listaArray = Object.entries(listaCount)
    const listaOrdenada = ordernarListaBidimensional(listaArray, 1)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1]
    // console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber);
    // console.log('La moda es: '+ listaMaxNumber[0]);

    const moda = listaMaxNumber[0]
    return moda
}

function calcularMediana(listaDesordenada) {
    const lista = ordernarLista(listaDesordenada)
    const listaEsPar = esPar(lista)

    if (listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1
        const indexMitad2ListaPar = lista.length / 2

        // const mitad1ListaPar = lista[(lista.length / 2) - 1]
        // const mitad2ListaPar = lista[lista.length / 2]

        const listaMitades = []
        listaMitades.push(lista[indexMitad1ListaPar])
        listaMitades.push(lista[indexMitad2ListaPar])

        const medianaListaPar = calcularPromedio(listaMitades)
        return medianaListaPar
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2)
        const medianaListaImpar = lista[indexMitadListaImpar]
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);

        return medianaListaImpar
    }
}

function calcularPromedio(lista) {
    // sumar elementos / cantidad de elementos
    
    /* let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
    } */

    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor
    }

    // const sumarTodosElementos = (valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor

    const sumaLista = lista.reduce(sumarTodosElementos)

    // const sumaLista = lista.reduce((a, b) => a + b)


    const promedio = sumaLista / lista.length

    // console.log(promedio);
    return promedio
}

function ordernarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        /* if (valorAcumulado < nuevoValor) {
            return -1
        } else if (valorAcumulado == nuevoValor) {
            return 0
        } else if (valorAcumulado > nuevoValor) {
            return 1
        } */

        //return nuevoValor - valorAcumulado //Ordena ASC
        return valorAcumulado - nuevoValor //Ordena DESC
    }

    const lista = listaDesordenada.sort(ordenarListaSort)

    return lista
}
// [ [], [], [], []]
function ordernarListaBidimensional(listaDesordenada, i) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[i] - nuevoValor[i]
    }

    const lista = listaDesordenada.sort(ordenarListaSort)

    return lista
}