/*
Ejercicio 7:
Crear el archivo correspondiente a “ejercicio_7.js”, Ejecutarlo y luego agregar lineas de comentario
explicando que hace el programa
*/

let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
document.write(resultado);


/*
Con la función o método window.prompt lo que se hace es pedirle al cliente que ingrese un dato o valor,
en este caso, solicitamos que ingrese dos datos, el nombre y el apellido, luego con resultado es igual a
concatenamos ambos valores, por último mediante document.write mostramos en pantalla del cliente
la unión de ambos valores o datos.
*/