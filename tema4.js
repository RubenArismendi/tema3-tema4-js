//1. Para un valor entero positivo Seg que representa una cantidad en segundos, indicar su equivalente en minutos, horas y días

function conversionSeg(seg){
    let minutos= Math.floor(seg/60)
    let horas= Math.floor(minutos/60)
    let dias= Math.floor(horas/24)
    return {horas: horas, minutos: minutos ,dias: dias};
}
    console.log(`la cantida de segundos pasado a minutos es igual a ${conversionSeg(86400).minutos}  pasado a horas
    es igual a ${conversionSeg(86400).horas} y pasado a dias es igual a ${conversionSeg(86400).dias} `)


// 2. Solicitar un valor entero que representa un año e indicar si se trata de un año bisiesto

function year(fecha){
    if((fecha % 400 === 0) || (fecha % 4 === 0 && fecha % 100 !== 0)){
        console.log(`${fecha} es un año bisiesto`)
    }else{
        console.log(` ${fecha} no es un año bisiesto`)
    }
}
year(2024)

//3. Dada una letra cualquiera indicar si es consonante, vocal o un dígito

function letra(digito) {
    if (typeof digito === "number") {
        console.log(`${digito} es un número`);
    } else if (["a", "e", "i", "o", "u"].includes(digito)) {
        console.log(`${digito} es una vocal`);
    } else {
        console.log(`${digito} es una consonante`);
    }
}
letra(9);

//4. Determinar si un dígito es par o impar

function digito(num){
    if(num===0){
        console.log("ingrese un numero mayor a 0")
    }else if(num%2 ===0){
        console.log(`${num} es par`)
    }else{
        console.log(`${num} es inpar`)
    }
}
digito(567)

//5. Determinar el máximo de 2 valores

function maxnum(num1,num2){
    if(num1===num2){
        console.log(`el maximo entre ${num1} y ${num2} es el mismo`)
    }else if (num1>num2){
        console.log(`${num1} es mayor que ${num2}`)
    }else{
        console.log(`${num2} es mayor que ${num1}`)
    }
}

maxnum(34,10)

//6. Calcular el valor absoluto de un número N

function valorAbsoluto(num){
    if(num<0){
        num = -num;
        console.log(num)
    }else{
        console.log(num)
    }
}

valorAbsoluto(-180)

//7. Determinar el signo de la suma de dos números, sin calcularla
function signo(numero1, numero2) {
    if (numero1 > 0 && numero2 > 0) {
        console.log("El signo de la suma es positivo");
    } else if (numero1 === 0 && numero2 === 0) {
        console.log("El signo de la suma es cero");
    } else {
        console.log("El signo de la suma es negativo");
    }
}
signo(-100,40);

//8. Solicitar un número entero de 4 dígitos significativo y descomponerlo para mostrar unidades de mil, centenas, decenas y unidades

function descomponerNumero(numero) {
    if (numero < 1000 || numero > 9999) {
        console.log("Error, el número debe ser de 4 cifras");
    } else {
        let unidades_de_mil = Math.floor(numero / 1000);
        let centenas = Math.floor((numero % 1000) / 100);
        let decenas = Math.floor((numero % 100) / 10);
        let unidades = numero % 10;

        console.log("Unidades de mil: " + unidades_de_mil);
        console.log("Centenas: " + centenas);
        console.log("Decenas: " + decenas);
        console.log("Unidades: " + unidades);
    }
}
descomponerNumero(4541);

//9. Indicar si un alumno aprobó o no una materia conformada por 2 parciales (que representan el 50% de la definitiva), 2
//quices (30% de la definitiva) y 2 proyectos (el primero 10% y el segundo 20%). En el caso de que su definitiva sea
//mayor o igual a 9 pero menor a 9,5, indicarle que debe asistir a actividades de recuperación. Si la nota es menor a 9 el
//alumno está reprobado.

/*
function calcularNotaDefinitiva() {
    let parcial1 = parseFloat(prompt("Ingrese la nota del primer parcial (0-100):"));
    let parcial2 = parseFloat(prompt("Ingrese la nota del segundo parcial (0-100):"));
    let quiz1 = parseFloat(prompt("Ingrese la nota del primer quiz (0-100):"));
    let quiz2 = parseFloat(prompt("Ingrese la nota del segundo quiz (0-100):"));
    let proyecto1 = parseFloat(prompt("Ingrese la nota del primer proyecto (0-100):"));
    let proyecto2 = parseFloat(prompt("Ingrese la nota del segundo proyecto (0-100):"));

    let definitiva = (parcial1 + parcial2) * 0.5 + (quiz1 + quiz2) * 0.3 + proyecto1 * 0.1 + proyecto2 * 0.2;

    console.log("La nota definitiva es: " + definitiva);

    if (definitiva >= 9 && definitiva < 9.5) {
        console.log("Debe asistir a actividades de recuperación.");
    } else if (definitiva < 9) {
        console.log("El alumno está reprobado.");
    }
}
calcularNotaDefinitiva();*/                      //EJECUTAR AL FINAL😁