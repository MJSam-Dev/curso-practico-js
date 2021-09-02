// HELPERS
function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElmento) {
            return valorAcumulado + nuevoElmento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// CALCULADORA DE MEDIANA
function medianaSalarios(lista) {
    //obtenemos el # de elementos que esta en la lista y la dividimos a la mitad para encontrar la mediana:
    const mitad = parseInt(lista.length / 2);

    //determinamos si en la mitad hay uno o dos elementos:
    if (esPar(lista.length)) {
        //si es par (dos elementos) se obtiene el promedio:
        const personaMitad1 = lista[mitad - 1]; //del índice que se obtuvo se tiene que bajar una posición en la lista para promediar los dos que quedaron en medio
        const personaMitad2 = lista[mitad];

        //se usa la funcion que trajimos del otro taller para sacar el promedio, pasandole los argumentos como lista con sus []
        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    } else {
        //si es impar (un elemento), metemos el resultado de mitad como indice de la lista para obtener el elemento:
        const personaMitad = lista[mitad];
        return personaMitad
    }
}


// MEDIANA GENERAL

// Convertir la lista en array pero solo con salarios:
const salariosMex = mexico.map(
    function (persona) {
        return persona.salary;
    }
);

// Ordenar el array creado:
const salariosMexOrd = salariosMex.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
)
const medianaGeneralMex = medianaSalarios(salariosMexOrd)


// MEDIANA DEL TOP 10%

const spliceStart = (salariosMexOrd.length * (100 - 10) / 100);
const spliceCount = salariosMexOrd.length - spliceStart;

const salariosMexTop10 = salariosMexOrd.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);


// MOSTRAR RESULTADOS
console.log({medianaGeneralMex, medianaTop10Mex});