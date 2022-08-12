console.group('Cuadrado');

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4

// const areaCuadrado = ladoCuadrado * ladoCuadrado
const areaCuadrado = Math.pow(ladoCuadrado, 2)

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});
console.groupEnd('Cuadrado')

console.group('Triangulo');

const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloBase = 4
const alturaTrinagulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo = (ladoTriangulo1 * alturaTrinagulo) / 2

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triangulo isosceles')
    } else {
        // h = raizCuadrada(lado1**2 - (b**2) / 4)
        return Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base, 2) / 4))
    }
}

function calcularAlturaTrianguloEscaleno(a, b, c) {
    const semiperineo = (a + b + c) / 2

    return (2 / a) * Math.sqrt(semiperineo * (semiperineo - a) * (semiperineo - b) * (semiperineo - c))
}

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTrinagulo,
    perimetroTriangulo,
    areaTriangulo
});

console.groupEnd('Triangulo')

console.group('Circle')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo ** 2) * PI

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
});

function calcularCirculo(radio) {
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(5),
    }
}
