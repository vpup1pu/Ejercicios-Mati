// 1) variables y scope: https://www.freecodecamp.org/espanol/news/javascript-variables-para-principiantes/
//responder:

// ¿que es el scope? Es el lugar (en el codigo) en donde las variables pueden ser utilizadas
// ¿que se diferencia el scope con un bloque? En que el scope se refiere a cualquier lugar (no necesariamente 
//a todo el codigo), mientras que el bloque es un lugar definido por las llaves {}, es decir de comienzo y 
//final.
// ¿que diferencia existe entre crear una variable con la sintaxis var,let y const? La principal diferencia
//esta en el alcance de cada una. var tiene un alcance de funcion (o global si se define por fuera de la 
//funcion), mientras que const y let tienen un alcance de bloque. Por otro lado. var y let pueden ser 
//reasignadas mientras que const solo puede ser decladara una vez. 

// 2) referencias: leer el pdf referencias.pdf

// responder:
// a)¿Que utilidad tiene las referencias?
//la referencia de un objeto es la ruta de acceso al mismo. Permite que el objeto sea "encontrado" por
//otros objetos, asi como tambien modificado o que sea utilizado para ejecutar alguna funcion.

// b)Dado el siguiente codigo:

// Asumir que:
// 1) Array contiene numeros enteros en sus elementos, puede estar vacio.
// 2) esPar(numero) esta implementado y devuelve si un numero es par o no.

// function cambiarPares(array){
// for (let i = 0;i<array.length;i++){
// 	if (esPar(array[i])){
// 		array[i]='!';
// 	}
//  }
// return array;
// }

// function cambiarPares2(array){
// devolver = []
// for (let i = 0;i<array.length;i++){
// 	if (esPar(array[i])){
// 		devolver.push('!');
// 	}else{
// 		devolver.push(array[i])
// 	 }
//  }
// return devolver;
// }

// arreglo = [1,2,3,4,5];
// console.log(cambiarPares2(arreglo));
// console.log(arreglo); 
// console.log(cambiarPares(arreglo)); 
// console.log(arreglo); 

// responder:
// ¿que diferencia existe entre la funcion cambiarPares() y cambiarPares2()? En cambiarPares(), la funcion
//recorre el array que ingresa como parametro, cambia los numeros pares por ! y devuelve ese mismo arreglo.
//En cambiarPares2(), la funcion crea un nuevo array llamado devolver y le agrega ! si el elemento del array
//ingresado por parametro es par, o el mismo elemento si es impar. Al final devuelve el array devolver.
// ¿que devuelven los console.log()? 
// console.log(cambiarPares2(arreglo)); -> devuelve [1, !, 3, !, 5]
// console.log(arreglo); -> devuelve [1, 2, 3, 4, 5]
// console.log(cambiarPares(arreglo)); -> devuelve [1, !, 3, !, 5] 
// console.log(arreglo); -> devuelve [1, !, 3, !, 5]

//Si por ejemplo estuvieran al reves, 
//console.log(arreglo); -> devuelve [1, 2, 3, 4, 5]
// console.log(cambiarPares(arreglo)); -> [1, !, 3, !, 5]
// console.log(arreglo); -> devuelve [1, !, 3, !, 5]

// ¿por qué es importante entender el paso por referencia?
//En la funcion cambiarPares2, solo hace una sola referencia para usar el arreglo que entra por parametro.
//Pero lo que devuelve tiene una referencia diferente al arreglo original. En cambio, en cambiarPares(),
//usa y modifica el arreglo cada vez que se ejecuta, es decir siempre utiliza la misma referencia.
//Creo que lo importante es no perder la referencia del objeto original, en estas funciones sencillas 
//pareciera que no hay diferencia pero en una mas compleja, donde solo ingrese un dato, funciones que 
//creen nuevas referencias (como cambiarPares2()) no servirian. 

//Por Mati uwu: Con el tema de la importancia de las referencia es que podes hacer cagadas si no lo tenes 
//en cuenta, si vos modificas un array por referencia (como la primera funcion de los ejercicios) dsp no 
//podes usar mas ese arreglo porque fue modificado (a menos que sea tu idea). Un buen principio es hacer 
//una copia de ese arreglo y dsp trabajar con el