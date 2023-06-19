/*
Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.
*/

let dia,mes,año;
 mes=prompt('Introduzca el número del mes:',''); 
mes=parseInt(mes);
 if (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes ==10 || mes==12) { document.write('Este mes tiene 31 dias.'); }
 else { if (mes==2)
 document.write('Este mes puede tener 30 dias.'); 
else document.write('Este mes tiene 30 dias.'); 
}
