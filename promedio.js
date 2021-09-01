// const lista1 = [100, 200, 300, 500];

// let sumaList1 = 0;
// for (let i = 0; i < lista1.length; i++) {
//     sumaList1 = sumaList1 + lista1[i];
// }

// const promedioLista1 = sumaList1 / lista1.length;

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    // sumaLista = sumaLista + lista[i];
    // }

    // Iterar en array con métodos del array como alternativa del ciclo for:
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElmento) {
            return valorAcumulado + nuevoElmento;
        }
    ); //reduce recibe como argumento una función y realiza una operación aritmetica de un elemento con el que le sigue y asi sucecivamente

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

