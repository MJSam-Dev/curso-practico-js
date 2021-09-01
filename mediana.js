function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElmento) {
            return valorAcumulado + nuevoElmento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// const lista = [100, 200, 500, 400000000,];

// const mitadLista = parseInt(lista.length / 2);

// function esPar(numero) {
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista.length)) {
//     const elemento1 = lista[mitadLista - 1];
//     const elemento2 = lista[mitadLista]

//     const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
//     mediana = promedioElemento1y2;
// } else {
//     mediana = lista[mitadLista];
// }

function onClickButtonCalcularMediana() {
    let lista = [];

    const dato1 = document.getElementById('dato1');
    const dato1Valor = dato1.value;
    lista.push(dato1Valor);

    const dato2 = document.getElementById('dato2');
    const dato2Valor = dato2.value;
    lista.push(dato2Valor);

    const dato3 = document.getElementById('dato3');
    const dato3Valor = dato3.value;
    lista.push(dato3Valor);

    const dato4 = document.getElementById('dato4');
    const dato4Valor = dato4.value;
    lista.push(dato4Valor);

    const dato5 = document.getElementById('dato5');
    const dato5Valor = dato5.value;
    lista.push(dato5Valor);

    lista.sort(function(a, b) {
        return a - b;
    });


    function mediana(lista) {
        
        const mitadLista = parseInt(lista.length / 2);
        function esPar(numero) {
            if (numero % 2 === 0) {
                return true;
            } else {
                return false;
            }
        }
    
        if (esPar(lista.length)) {
            const elemento1 = lista[mitadLista - 1];
            const elemento2 = lista[mitadLista]
        
            const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
            mediana = promedioElemento1y2;
        } else {
            mediana = lista[mitadLista];
        }
        return mediana;
    }
    const resultadoMediana = mediana(lista);
    const resultado = document.getElementById('resultado');
    resultado.innerText = 'La Mediana corresponde al valor: ' + resultadoMediana;
}
