//Ejercicio 1 Escribe un porograma que indique en la consola  cuantos dias tiene el mes en curso, obteniendo el mes real del sistema

// let mesTreintaUno = 1;
// let mesTreinta = 0;
// let mesFebrero = 28;

// let fecha = new Date;

// let mesActual = fecha.getMonth();
// console.log(mesActual);

// if (mesFebrero / mesActual == 14) { //Es febrero
//     console.log("Es febrero tiene 28 dias");

// }   else if (mesActual % 2 == mesTreinta ) { //El mes es par
//     console.log("El mes tiene 30 dias");

// }   else if (mesActual % 2 == mesTreintaUno) { //El mes es impar
//     console.log("El mes tiene 31 dias");
// }   

// Ejercicio 2 Escribe un programa que le pregunte al usuario un mes, y le indique cuantos dias tiene el mes. En caso de error, indicarle el mensaje :
//"That's not a real month"

// let mesInput = prompt ("Introduce un mes");

// switch (mesInput) {
//     case ("enero" || "marzo" || "mayo" || "julio" || "septiembre" || "noviembre"):
//         console.log("El mes tiene 31 dias");
//         break;
//     case ("abril" || "junio" || "agosto" || "octubre" || "diciembre"):
//         console.log("El mes tiene 30 dias");
//         break;
//     case ("febrero"):
//         console.log("El mes es febrero, tiene 28 dias");
//         break;
//     default:
//         console.log("That's not a real month");
//         break;
// }

//Ejercicio 3 Escribe un programa que pregunte la temperatura exterior al usuario. Si la temperatura está por debajo de 15 grados,
//lanzar una alerta con el mensaje: "Warm up". En caso de que la temperatura sea de entre 15 grados y 25, lanzar una alerta con el
//mensaje:"Enjoy de wather". En caso de que la temepratura sea de más de 25 grados, lanzar la alerta con el mensaje : "Cool down".

// let temeperatureWeather = prompt("¿A que temeperatura esta el agua?");

// if (temeperatureWeather < 15) {
//     console.log("Warm up"); //Frio
// } else if (temeperatureWeather >= 15 && temeperatureWeather <= 25) {
//     console.log("Enjoy the weather"); //Temperatura agradable
// } else if(temeperatureWeather > 25) {
//     console.log("Cool down"); //Calor
// }

//Ejercicio 4 Escribe un programa que simula un semáforo. El semáforo estará controlado por una variable "centinela" llamada "isGreen". Si el semáforo está 
//verde, mostrar por consola:"Cross the road", en caso contrario mostrar: "Please wair".

// for (let isGreen = 0; isGreen < 15; isGreen++) {
//     if (isGreen > 0 && isGreen <5) {//esta verde
//         console.log("Cross the road");
//     }   else if (isGreen >= 5 && isGreen <10) {
//         console.log("Please wait");//Esta rojo
//     }   else if(isGreen >= 10) {
//         console.log("Cross the road");//Vuelve a estar verde y termina el algoritmo
//     }
// }

//Ejerccio 5 . Ejercicio
//Teniendo en cuenta las siguientes temperaturas:
//• Absolute Zero → -273.15°C
//• Freezing point → 0°C
//• Body Temperature → 37°C
//• Boiling point → 100°C
//Escribe un programa que convierta estas temperaturas a Fahrenheit (mediante la estructura
//switch). ** Buscar la fórmula en Google**

// let absoluteZeroCelsius = -273.15;
// let freezingPoint = 0;
// let bodyTemperature = 37;
// let boilingPoint = 100;
// let temperatureFahrenheit = 33.8;


// switch (true) {
//     case (true):
//         console.log("Absolute Zero", ((absoluteZeroCelsius * 1.8) +32), "ºF");

//     case (true):
//         console.log("FreezingPoint", ((freezingPoint * 1.8) +32), "ºF");

//     case (true):
//         console.log("Body Temperature", ((bodyTemperature * 1.8) +32), "ºF");

//     case (true):
//         console.log("Boiling Point", ((boilingPoint * 1.8) +32), "ºF");

//     default:
//         console.log("--------------------------------");
//         break;
// }
//En este caso me equivoco en cuando a lo que pedia el ejercicio, dando todos los resultados la estructura switch es
//totalmente innecesaria y se pierde el objetivo del ejercicio.


//Ejercicio 6 Escribe un programa que pida al usuario email y contraseña. Deberá comparar los datos
//introducidos con los siguientes, que deberán estar guardados en variables:
//• email: tolkien@lordofrings.com
//• password: aNBR6ZeWPY
//En caso de que los datos introducidos sean correctos, mostrar una alerta con el mensaje: “Welcome
//Mr. Tolkien”, en caso contrario mostrar el mensaje: “Wrong password or email”.

// let userEmail = "tolkien@lordofrings.com";
// let userPass = "aNBR6ZeWPY";


// if (userEmail === prompt("Introduzca email") && userPass === prompt("Introduzca pass"))
//     {console.log("Welcome");
// }   else if (true) {
//     console.log("Wrong password or email");
// }

// console.log("------------------");

//Ejercicio 7 Ejercicio
// Mediante una estructura switch, escribe un programa para convertir euros a:
// • Dólar americano
// • Yen Japonés
// • Libra esterlina
// • Franco suizo
// Y muestre por consola el siguiente resultado: XXX euros equivalen a YYY dólares americanos, ZZZ
// yen japoneses, NNN libras esterlinas y MMM francos suizos. Aplicar template literal para mostrar el
// resultado.
// ** Buscar el valor al cambio en Google**

//No entiendo muy bien que hacer en cuanto a que se un selector de divisas o que haga el cambio a todas
//las divisas a la vez, lo hare como selector con opcion a que lo haga en todas.

// switch (importeEnEuros = prompt("Introduce importe en euros"), 
//         divisaSeleccionada = prompt("Introduce divisa: dollar, yen japones, libra esterlina, franco suizo o todas")) {
//     case "dollar":
//         console.log((importeEnEuros * 1.106), "Dolares");
//             break;
//     case "yen japones":
//         console.log((importeEnEuros * 156.818), "Yenes");
//             break;
//     case "libra esterlina":
//         console.log((importeEnEuros * 0.8638), "Libras");
//             break;
//     case "franco suizo":
//         console.log((importeEnEuros * 0.9616), "Francos suizos");
//             break;
//     case "todas":
//         console.log((importeEnEuros * 1.106), "Dolares", 
//                     (importeEnEuros * 156.818), "Yenes", 
//                     (importeEnEuros * 0.8638), "Libras", 
//                     (importeEnEuros * 0.9616), "Francos suizos");
//             break;
// }

//Ejercicio 8 Escribe un programa que pregunte al usuario 2 números y la operación a realizar (suma, resta, multi,
//divide). A continuación, mostrar el resultado de la operación requerida por consola.

// let apagarCalculadora = "si";

// for (;apagarCalculadora != prompt("¿apagar? si/no");) {

//     num1 = parseInt(prompt("Introduzaca primer nuemero"));
//     num2 = parseInt(prompt("Introduzca segundo numero"));

//     switch (tipoDeOperacion = prompt("Seleccione un tipo de operación: sumar, restar, multiplicar o dividir")) {
//         case "sumar":
//             console.log("Resultado de la suma");
//             console.log(num1 + num2);
//                 break;
//         case "restar":
//             console.log("Resultado de la resta");
//             console.log(num1 - num2);
//                 break;
//         case "multiplicar":
//             console.log("Resultado de la multiplicación");
//             console.log(num1 + num2);
//                 break;
//         case "dividir":
//             console.log("Resultado de la división");
//             console.log(num1 / num2);
//                 break;
//         default:
//             console.log("Revise que los datos sean correctos, realice el proceso de nuevo");
//             break;
//     }
// }
// console.log("La calculadora se ha apagado");

//Ejercicio 9 Ejercicio
//Preguntar al usuario su DNI o NIE. Comprobar, mediante las funciones para strings, si los datos
//introducidos son válidos, teniendo en cuenta lo siguiente.
//• El NIE debe escribirse con la X o T inicial, todos los números y la letra final, sin espacios ni
//guiones. Ejemplo: X0523821F.
//• El DNI está formado por ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678ª.
//** Consultar la tabla ASCII para poder resolver el ejercicio. **

// for (;true;) {
//     dniInput = prompt("Introduzca DNI o NIE");
//     if (dniInput.length == "9" && (dniInput.startsWith("X") || dniInput.startsWith("T"))) {
//         console.log("Formato DNI o NIE correcto");
//         break;
//     }   else if (dniInput.length != "9") {
//         console.log("Formato DNI o NIE incorrecto, compruebe y vuelva a introduccir los datos");
//     }
// }

// console.log("fin");//Linea no necesaria. Solo uso para comprobacion.
//El ejercicio nueve aunque funciona, pero tiene varios fallos, como que no comprueba si son numeros o letras. (no se dedica excesivo tiempo).
//(REVISAR EN EL FUTURO).

//Ejercicio 10 Investiga el objeto Math, y genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados.
//Comprueba los resultados obtenidos y muestra por consola el ganador. Por ejemplo: “Player 1
//wins!”, o “draw”, en caso de empate.

let tiradaDadoUno = Math.floor(Math.random() * 6) + 1;
let tiradaDadoDos = Math.floor(Math.random() * 6) + 1;

console.log(tiradaDadoUno);
console.log(tiradaDadoDos);

if (tiradaDadoUno < tiradaDadoDos) {
    console.log("Gana jugador dos");
}   else if (tiradaDadoUno == tiradaDadoDos) 
        {console.log("Empate Draw");
}   else {console.log("Gana jugador uno");}