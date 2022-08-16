const lista = [1,2,3,4,5]

calcularMediaCuadratica(lista)

function calcularMediaCuadratica(lista) {
    const listaCuadrado = []
    const sumatoria = 0
    const elementoCuadrado = 0

    for (let i = 0; i < lista.length; i++) {
        // console.log(Math.pow(lista[i],2));
        elementoCuadrado = Math.pow(lista[i],2)

        sumatoria = elementoCuadrado + sumatoria

        listaCuadrado.push(elementoCuadrado)
        
    }
    console.log(sumatoria);
}