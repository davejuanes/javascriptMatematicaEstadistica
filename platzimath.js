function esPar(lista) {
    return !(lista.length % 2)
}

function esImpar(lista) {
    return lista.length % 2
}

function calcularMediana(lista) {
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

