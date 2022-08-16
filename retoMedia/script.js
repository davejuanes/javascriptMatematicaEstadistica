const lista = [1,-2,3,-4,5]

calcularMediaCuadratica(lista)

function calcularMediaCuadratica(lista) {
    const listaCuadrado = []
    const sumatoria = 0
    const elementoCuadrado = 0

    for (let i = 0; i < lista.length; i++) {
        listaCuadrado.push(Math.pow(lista[i],2))
    }

    calcularPromedio(listaCuadrado)
}

function calcularPromedio(listaCuadrado) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor
    }
    const sumaLista = listaCuadrado.reduce(sumarTodosElementos)
    const promedio = sumaLista / listaCuadrado.length

    const raizCuadradaPromedio = Math.sqrt(promedio)

    console.log(raizCuadradaPromedio);
    return promedio
}