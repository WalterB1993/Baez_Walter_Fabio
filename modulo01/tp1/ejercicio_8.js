let val1, val2, num1, num2;
val1 = prompt("Introduce primer número ?", "0");
num1 = parseInt(val1);
val2 = prompt("Introduce segundo número ?", "0");
num2 = parseInt(val2);
let resultado = num1 + num2;
document.write(`<br/> <br/> La suma es ${resultado} ` );

// El método parseInt analiza un valor como una cadena y devuelve el primer entero. https:
//www.w3schools.com/jsref/jsref_parseint.asp

/*En este caso, el código contenía un error de sintáxis, pues las líneas de texto (primer entero. https:)
se encontraban debajo de las 2 barras utilizadas para realizar comentarios en una línea, 
subiendo nada más esas líneas de texto a la posición N° 9 se corrige el código,
y el mismo se puede ejecutar sin problemas
*/