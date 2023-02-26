//Ejercicio 1: 
//Se tiene una funcion ya creada llamada recorrerMatriz(), que recibe como parametro una matriz.
//recorrerMatriz no debe implementarse, se asume que al invocarla muestra por pantalla los elementos
//que la contienen

//por ejemplo como salida de pantalla con la matriz M seria:
//1
//2
//3
//4

//nota: notar que hace un recorrido por filas, esto es recorre la primera fila y imprime todos los elementos 
//que la componen y luego pasa a la siguiente fila y repite el mismo proceso, hasta terminar de recorrer la 
//matriz. El ejercicio consiste en completar la variable matriz para que se muestre por pantalla la 
//salida de la matriz.

//function recorrerMatriz(matriz){
//    ... //no importa como esta implementado
//}
//matriz = ...; // completar
//console.log(recorrerMatriz(matriz));

//salida:
//1
//2
//3
//4

function recorrerMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        var fila = ' ';
        for (let j = 0; j < matriz[i].length; j++) {
        fila = fila + ' ' + matriz[i][j];
        }
        console.log(fila);
    }
}


//Ejercicio 2
//Crear una funcion llamada recorrerMatriz que imprimira por pantalla todos los elementos de la matriz
//contiene dos parametros, matriz que corresponde a un arreglo que contiene arreglos como elementos
//fila corresponde a una variable booleana la cual si es true imprime los elementos recorriendo por fila 
//si es false imprime primero la columna 1, luego pasa a la columna 2 y asi sucesivamente

//Ejemplo:
//si : 
//    |1  2  3|
//M = |4  5  6| , fila = true
//    |7  8  9|

//console.log(recorrerMatriz(M,true)) //recorrido por filas
//Se debera mostrar por pantalla:
//1
//2
//3
//4
//5
//6

//si:
//    |1  2  3|
//M = |4  5  6| , fila = false
//    |7  8  9|

//Se debera mostrar por pantalla:
//1
//4
//7
//2
//5
//8
//3
//6
//9

function recorrerMatriz(matriz,valor) {}