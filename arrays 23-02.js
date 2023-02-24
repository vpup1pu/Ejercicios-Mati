//Ejercicio 1:
//crear una funcion que se llame imprimirArray, que recibe un array que contiene cualquier tamaño y cualquier
//tipo de elementos e imprima en la consola todos sus elementos.
//Ejemplos: *recordar que lo imprime verticalmente
//console.log(imprimirArray([1,2,3])) retorna 1 2 3
//console.log(imprimirArray(['a','t',true])) retorna 'a' 't' true
//console.log(imprimirArray([false,true,[1,2,3]])) retorna false true [1,2,3]

function imprimirArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log(imprimirArray([1,2,3]))

function imprimirHorizontal(array) {
    let lista = array[0];
    for (let i = 0; i < array.length; i++) {
        lista = lista + ' ' + array[i];
    }
    return lista;
}

//Ejercicio 2:
//Crear una funcion llamada soloPares que reciba un array de numeros enteros y que imprima solo los numeros 
//pares
//a) Escribir un algoritmo con los pasos a seguir
//b)Crear la funcion
//Ejemplo:
//console.log(soloPares([1,2,3])) // 2
//console.log(soloPares([1,4,12,2,12,43])) //4 12 2 12

//a) Algoritmo Es_Par
//DE: Numero (entero)
//DS: par(booleano)
//DA: -
//Comienzo
//par <- false
//Si numero mod 2 = 0
//  entonces 
//      par <- true
//fin Si_entonces
//Escribir par
//Fin Algoritmo

//Algoritmo contar
//DE: array (conjunto de enteros)
//DS: cuenta
//DA: elemento
//Comienzo
//cuenta <- 0
//Para elemento desde 1 hasta N
//  cuenta <- cuenta + 1
//fin para
//Escribir cuenta
//Fin Algoritmo

//Algoritmo Diferencia_Pares_e_Impares
//DE: array (conjunto de enteros)
//DS: array2 (conjunto de enteros)
//DA: i, elemento
//Comienzo
//i <- 0
//array2 <- 0
//Mientras (i<contar(array)) hacer
//  si Es_Par(elemento) 
//      entonces
//          array2 <- elemento
//fin si_entonces
//Escribir array2
//Fin Algoritmo

//b)
function esPar(numero) {
    var par = false;
    if (numero % 2 === 0) {
        par = true;
    }
    return par;
}

function soloPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            console.log(array[i]);
        }
    }
}

//Ejercicio 3:
//leer : https://www.delftstack.com/es/howto/javascript/javascript-append-elements/