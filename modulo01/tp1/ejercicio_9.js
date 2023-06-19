/*
Ejercicio 9:
Crear el archivo “ejercicio_9.js”. Declarar un array llamado “vocales” con las 5 letras. Luego se
deben imprimir en el navegador uno debajo de otro.
*/

var vocales = ["a", "e", "i", "o", "u"];

    for (var letra of vocales) {
        document.write(letra + "</br>");
    }