//Ejercicio 1:
//Escribir una funcion llamada dosFor -sin parametros- que contenga dos bucles for anidados,esto es 
//un bucle for que contiene otro bucle adentro, los dos con indices de distinto nombre 
//el primer for debera imprimir el siguiente mensaje: 'Primer For: indice vale : ' y debera mostrar el valor
//del indice 
//El segundo for debera imprimir el siguiente mensaje: 'Segundo For: indice vale : ' y debera mostrar el valor
//del indice 
//el tope del primer for (condicion de corte es cuando el indice es < 3) y el del segundo for tambien 
//(condicion de corte es cuando indice es < 3)

//a)
function dosFor(){
    for (let i = 0; i < 3; i++) {
        console.log('Primer For: indice vale : ' + i);
        for (let j = 0; j < 3; j++) {
            console.log('Segundo For: indice vale : '+ j);
        }
    }
} 

//b)cuantas veces aparece el mensaje 'Primer For: ...' y cuantas veces aparece el mensaje 'Segundo For:...'
//rta: por cada vez que aparece el mensaje 'Primer For: ...', el mensaje 'Segundo For: ...' se repite 3 veces
//Por lo tanto, el mensaje 'Primer For: ...' aparece 3 veces, y el mensaje 'Segundo For: ...' 9 veces

//Ejercicio 2
//a) Averiguar que significa la conversion de tipos.
//Son funciones que convierten automaticamente los parametros ingresados al tipo correcto. Las mas usadas 
//son toString() (representa un valor en forma de texto), toNumber() (ocurre automaticamente cuando se
//involucran operaciones matematicas) y toBoolean (convierte valores como 0, null, "", undefined y NaN
// en false; mientras que el resto de los valores los convierte en true).
//fuente: https://es.javascript.info/type-conversions

//b) leer https://www.w3schools.com/js/js_type_conversion.asp

//c) Crear una funcion que imprima por pantalla los primero diez multiplos de la tabla del 1 al 5
//nota: no necesariamente vas a utilizar lo visto arriba de forma explicita
//console.log(tablaHastaCinco())
//Salida:
//1 2 3 4 5 6 7 8 9 10
//2 4 6 8 10 12 14 16 18 20
//3 6 9 12 15 18 21 24 27 30
//4 8 12 16 20 24 28 32 36 40
//5 10 15 20 25 30 35 40 45 50

//nota: para lograr que se imprima en horizontal deberas crear un string e ir concatenando cada valor 
//hasta llegar al ultimo multiplo

function tablaHastaCinco() {
    for (let i = 1; i < 6; i++) {
        var tabla = ' ';
        for (let j = 1; j < 11; j++) {
            tabla = tabla + ' ' + i*j;
        }
        console.log(tabla);
    }
}

function tablaHastaCinco2() {
    for (let i = 1; i < 6; i++) {
        var tabla = i;
        for (let j = 2; j < 11; j++) {
            tabla = tabla + ' ' + i*j;
        }
        console.log(tabla);
    }
}