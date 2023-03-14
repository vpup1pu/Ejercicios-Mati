// Ejercicios Repaso A) Sentencias condicionales, bucles y funciones

// Notas: 
// *No usar ningun IDE (por ej. Visual Studio Code) para realizar o probar los ejercicios, cada ejercicio debe estar resuelto 
// abajo de los puntos u incisos (se debe responder debajo de 'Codigo' ó '//Respuesta', también puede pasar que solo se deba 
// completar algun dato faltante, por ejemplo si se tiene algo como: (...) esto indicará que hay que completar).

// *ESCRIBIR UNA TRAZA para lo que se realiza, cada vez que se termina un ejercicio probarlo a mano con una traza, siguiendo 
// EXACTAMENTE lo que se programo, recordar que probar en un IDE esta prohibido.

// *Si se cree que hay algun error de sintaxis o posible error con algun bucle infinito preguntar.

// 1)
// Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

// var numero1 = 5;
// var numero2 = 8;
 
// if(numero1<numero2) {
//   console.log("numero1 no es mayor que numero2");
// }
// if(numero2>0) {
//   console.log("numero2 es positivo");
// }
// if(numero1<0 || numero1 !== 0) {
//   console.log("numero1 es negativo o distinto de cero"); 
// }
// if(numero1+1<numero2) {
//   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// b)
// Escribir los resultados, dada las variables numero1 y numero2 definidas arriba:

// //respuesta:
// numero1 no es mayor que numero2
// numero2 es positivo
// Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2

// c)
// ¿Que resultado imprime este nuevo codigo? (manteniendo las condiciones de las sentencias del punto anterior)

// var numero1 = 2;
// var numero2 = -1;

// if(numero1<numero2) {  // (...) es la condicion del punto anterior
//   console.log("numero1 no es mayor que numero2");
// }
// else if(numero2>0) { 
//   console.log("numero2 es positivo");
// }
// if(numero1<0 || numero1 !== 0) {
//   console.log("numero1 es negativo o distinto de cero");
// }
// else if(numero1+1<numero2) { 
//   console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// //respuesta
// numero 1 es negativo o distinto de cero

// 2)

// El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores 
// n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

// Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

// Codigo:
const numero = 5;
if (numero === 0) {
    console.log(1);
}
else 
if (numero < 0) {
    console.log('Usar enteros mayores o iguales a cero.');
}
let total = numero;
for (let i = 1; i < numero -1; i++) {
    let n = numero-i;
    total = total*n;
}
console.log(total);

// 3)
// Dado los siguientes codigos separados y asilados de los demas -no se ejecutan uno despues del otro-:
// y teniendo en cuenta que funcionX(parametro) devolvera True solo si y solo si parametro vale: -2 , -1 , 1 , 3, 9 y 15
// Escribir abajo de '//respuesta' lo que se imprime en pantalla al ejecutarse el bloque o la funcion:

// ejemplo:
// for(let i = 1; i<=2;i++){
// 	console.log(i);}
// //respuesta
// 1
// 2

// a)
// for(let i = 0; i<4;i++) {
// 	if (funcionX(i)) {
// 		continue;
// 		console.log('Viva artozka');
// 	}
// 	console.log('El valor de i es ' + i);
// }
//respuesta
// El valor de i es 0
// El valor de i es 2


// b)
// function funcionFor(){
// 	for(let i = 0; i<4;i++) {
// 		if (funcionX(i)) {
// 			console.log('Viva artozka');
// 			break;
// 			return 4;
// 		}
// 	console.log('El valor de i es ' + i);
// 	}
// }
// funcionFor();
//respuesta
//El valor de i es 0
//Viva artozka

// b inciso 2) -no esta repetido-

// function funcionFor(){
// 	for(let i = 0; i<4;i++) {
// 		if (funcionX(i)) {
// 			console.log('Viva artozka');
// 			break;
// 			return 4;
// 		}
// 	console.log('El valor de i es ' + i);
// 	}
// }
// console.log(funcionFor());
//respuesta
//El valor de i es 0
//Viva artozka
//undefined

// c)
// for(let i = 0; i<4;i++) {
// 	if (funcionX(i)) {
// 		console.log('Viva artozka');
// 		continue;
// 	}
// 	console.log('El valor de i es ' + i);
// }
//respuesta
//El valor de i es 0
//Viva artokza
//El valor de i es 2
//Viva artozka

// d)
// for(let i = 0; i<4;i++) {
// 	for (let j = 0; j<i; j++) {
// 		console.log(j , i, j+i);
// 	}
// 	console.log('//');
// }
//respuesta
// //
// 0, 1, 1
// //
// 0, 2, 2
// 1, 2, 3
// //
// 0, 3, 3
// 1, 3, 4
// 2, 3, 5
// //

// e)
// var o = -1;
// while (true){
// 	console.log(o);
// 	console.log(++o);
// 	console.log(o++);
// 	console.log(o);
//    if (o>=1 && o<3) {
//       console.log(o++ * 2);
//       continue;
//    }else{
//       console.log(o);
//       break;
//    }
// }
//respuesta
// -1
// 0
// 0
// 1
// 2
// 2
// 3
// 3
// 4
// 4

// f)
// function funcionFor(){
// 	for(let i = 0; i<4;i++) {
// 		if (funcionX(i)) {
// 			console.log('Viva artozka');
// 			return 4;
// 		}
// 	console.log('El valor de i es ' + i);
// 	}
// }
// a = functionFor();
// console.log(a);
//repuesta
// El valor de i es 0
// Viva artozka
// 4

// 4)
// a) Averiguar sobre la funcion Math.random
// Math.random devuelve un numero al azar mayor o igual a 0 y menor a 1.

// b)Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener 
// números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y 
// guardar la suma en un arreglo mientras se este jugando y mostrarlo al final, por lo menos se debe jugar 5 veces.

// Ejemplo
// dado1 <- 1
// dado2 <- 2
// total <- 3

// dado1 <- 4
// dado2 <- 2
// total <- 6

// dado1 <- 3
// dado2 <- 6
// total <- 9

// se debe mostrar por pantalla: [3,6,9]

// Codigo:
// funcion obtenida de mozilla dev javascript
function getRandomInt(num) {
    return Math.floor(Math.random()*num)+1;
}
let suma = [];
for (let i = 0; i < 5; i++) {
    var dado1 = getRandomInt(6);
    var dado2 = getRandomInt(6);
    suma.push(dado1+dado2);
}
console.log(suma)

// c)Siguiendo la misma idea de tirar 2 dados y sumar el resultado de lanzarlos, el objetivo ahora es anotar en un array el 
// número de apariciones de dicha suma, repitiendo 10 veces esta operación.

// ejemplo con 3 repeticiones:
// dado1 <- 5
// dado2 <- 2
// en total se tiene 7

// se tira de nuevo <-
// dado1 <- 2
// dado2 <- 4
// en total se tiene 6

// se tira de nuevo <-
// dado1 <- 2
// dado2 <- 5
// en total se tiene 7

// se debe mostrar por pantalla: [[7,2],[6,1]]

let suma1 = [12, 10, 8, 8, 8, 4, 7, 7, 9, 11];

let apariciones = [];
for (let i = 0; i < suma1.length; i++) {
    let contar = 1;
    for (let j = i+1; j < suma1.length; j++){
        if (suma1[i] === suma1[j]) {
            contar++;
            suma1.splice(j,1);
        }
    }
    apariciones.push([suma1[i], contar])
}
console.log(apariciones);

// 5)
// Crear la funcion valorColumna(matriz) que recibe una matriz CUADRADA no vacia que contiene solo valores enteros y debe 
// devolver un array (la cantidad de elementos que contendrá sera igual a la cantidad de las columnas de la matriz) donde 
// cada elemento del mismo contiene la suma total de todos los elementos de una columna de la matriz, el recorrido de la 
// matriz debe hacerse POR COLUMNAS y empezara desde la ultima columna y la ultima fila, e ira avanzando hasta terminar la 
// columna y pasar a la columna anterior o finaliza al recorrer todas las columnas.
// Ademas el array a retornar debe mantener las posiciones de las columnas de la matriz original, esto es que el primer 
// elemento sera el total del valor de la suma de los elemento de la columna de la primera columna de la matriz, el segundo 
// (si es existe) el valor total de sumar los elementos de la segunda columna, y asi hasta la ultima columna.

// Ejemplo 
//    a = 	[[1,2,3],
// 	 [4,5,6],
// 	 [7,8,9] ] ;

// console.log(valorColumna(a)); //retorna: [12,15,18] esto es : [(1+4+7),(2+5+8),(3+6+9)]

// Recorrido:
// Empieza desde el ultimo elemento de la matriz, en este caso es 9 ,el proximo valor a leer es el 6 y luego el 3 -> el total 
// es 18, luego el recorrido empezara por la columna anterior, en este caso empezara por 8 , luego 5 y por ultimo 2 -> el 
// total es 15 y el proximo (y ultimo) recorrido será a partir de 7,luego 4 y por ultimo 1 -> el total es 12

// Ejemplo 2:
 
//    a = 	[[4,-2,-4,10],
// 	  [2,2,2,10],
// 	  [1,1,0,10],
// 	 [-1,-1,0,10] ] ;

// console.log(valorColumna(a)); // [6,0,-2,40]

// Ejemplo3:

// a = [ [1] ]
// console.log(valorColumna(a)) // [1]

// Ejercicio para completar a mano:

// a = [ [10, 20],
//       [30, 40] ];
// console.log(valorColumna(a)); // COMPLETAR SALIDA-> [ 40, 60]

// Nota: 
// 1)No hacer de memoria el recorrido por columna, pensar la estrategia para avanzar en la columna y luego pasar a la anterior 
// y de paso leer todas las filas
// 2)se puede usar funciones ya creadas (implementadas en js) para los arrays que no son matrices (el array a retornar), es 
// un plus resolverlo sin usar funciones implementadas pero no es obligatorio.

// Codigo:

function valorColumna(matriz) {
    let valores = [];
    for (let i = matriz.length - 1; i > -1; i--) {
        let total = 0;
        for (let j = matriz[i].length - 1; j > -1; j--) {
            total = total + matriz[j][i];
        }
        valores.unshift(total);
    }
    return valores;
}

var matriz = ([1,2], [3,4])
console.log(valorColumna(matriz));