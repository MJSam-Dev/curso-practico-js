// Código del cuadrado:
console.group('Cuadrados');
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


// Código del triángulo:
console.group('Triángulos')
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();


// Código del círculo:
console.group('Círculos')
function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro =  diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();


// Interactuando con HTML:

//Cuadrados:
function calcularPerimetroCuadrado() {
    //obtener el valor ingresado por el usuario:
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    //obtener perimetro usando la función creada antes:
    const perimetro = perimetroCuadrado(value);
    alert(perimetro); 
}

function calcularAreaCuadrado() {
    const input = document.getElementById('inputCuadrado');
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area); 
}

//Triángulos:
function calcularPerimetroTriangulo() {
    const inputA = document.getElementById('inputTrianguloA');
    const valueA = inputA.value;

    const inputB = document.getElementById('inputTrianguloB');
    const valueB = inputB.value;
    
    const inputBase = document.getElementById('inputTrianguloBase');
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(valueA, valueB, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {    
    const inputBase = document.getElementById('inputTrianguloBase');
    const valueBase = inputBase.value;

    const inputAltura = document.getElementById('inputTrianguloAltura');
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura)
    alert(area);
}

//Círculos:
function calcularPerimetroCirculo() {
    const input = document.getElementById('inputRadioCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById('inputRadioCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// Triángulo Isóseles:
function trianguloIsoseles(ladosIguales, base) {
    const altura = Math.sqrt(ladosIguales * ladosIguales - ((base * base) / 4));
    return altura;
}

function calcularAlturaIsoseles() {
    const ladoIgualA = document.getElementById('inputTrianguloIsoselesLadoA');
    const valueLadoA = ladoIgualA.value;
    
    const ladoIgualB = document.getElementById('inputTrianguloIsoselesLadoB');
    const valueLadoB = ladoIgualB.value;
    
    const base = document.getElementById('inputTrianguloIsoselesBase');
    const valueBase = base.value;

    if (valueLadoA == valueLadoB){
        const altura = trianguloIsoseles(valueLadoA, valueBase);
        alert(altura);
    } else {
        alert('Por favor asegurate de que el lado "a" y el lado"b" midan los mismo')
    }
}