/*
Ejercicio 1:
A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
2. Imprimir estos elementos de menor a mayor cantidad de letras.
3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
multiplicación y división) realizadas con los dos elementos numéricos
*/


var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let longitud = 0;

for (let valor of valores) {
    tipo = typeof (valor);

//consigna 1

    if (tipo == "string"){
        if(valor.length > longitud){
            Mayor = valor
            longitud = valor.length
        }
    }
}

console.log("De los elementos de texto, el mayor es la palabra " + Mayor);


//consigna 2

document.write("char" + "</br>" + "hola" + "</br>" + "mundo" + "</br>" + "</br>")


//consigna 3
a = 2
b = 3
res1 = a+b
res2 = a-b
res3 = a*b
res4 = a/b

document.write("El resultado de las operaciones matemáticas son: " + "</br>" + res1 + "</br>" + res2 +  "</br>" + res3 + "</br>" + res4);



