//1. Calcular el promedio de 4 temperaturas medidas en ºC (Celsius) ymostrar su equivalente en ºF (Fahrenhei) 

function conversion (temp1,temp2,temp3,temp4){
    conversion= (temp1+temp2+temp3+temp4)*1.8 /4 +32; 
    let redondear = Math.floor(conversion);  
    return redondear;
}

console.log(`el promedio en Fahrenhei de las 4 temperaturas es ${conversion(30, 40, 10, 400)}`);

//1.2. Calcular un descuento del 25% para el precio de un curso y mostrarle al usuario cuanto se ahorra y cuanto va a pagar

function descuento(precio) {
    let cantidadDescuento = precio / 4;
    let descuentoFinal = precio - cantidadDescuento;
    return {descuentoFinal: descuentoFinal, cantidadDescuento: cantidadDescuento};
}
console.log(`el precio con 25% de descuento es ${descuento(300).descuentoFinal} y te has ahorrado ${descuento(300).cantidadDescuento}`);

//1.3. Convertir una cantidad de segundos, suministrados como un valor entero positivo, a minutos y a horas.

function conversionSeg(seg){
    let minutos= Math.floor(seg/60)
    let horas= Math.floor(minutos/60)
    return {horas: horas, minutos: minutos};
}
    console.log(`la cantida de segundos pasado a minutos es igual a ${conversionSeg(8000).minutos} y pasado a horas es igual a ${conversionSeg(8000).horas}`)


