// // //1. Ejercicio Escribe un programa para contar las letras en la palabra: palindrome, mostrándolas una a una

// const contadorDeLetras = (palabra) => {
//     return palabra.length;
// }

// console.log(contadorDeLetras("palindromo"));
// // //2. Ejercicio Escribe un programa que muestre las letras del palíndromo “no lemon, no melon” en orden inverso.

// function invertirCadena(cad) {
//     return cad.split("").reverse().join("");
// }

// console.log(invertirCadena("no melon, no lemon"));

// // /*3. Ejercicio
// // Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.
// // ****
// // ****
// // ****
// // ****  */

// array = [];
// for (let i = 0; i < 4; i++) {
//     array[i] = "****/n";
// }

// console.log(array);

// /*4. Ejercicio
// Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A
// continuación, muestra cuál ha sido la temperatura media.*/

// const saludar = () => console.log("Hola chato");
// console.log(saludar());

// let tempLunes = 17;
// let tempMartes = 18;
// let tempMiercoles = 22;
// let tempJueves = 25;
// let tempViernes = 18;
// let tempSabado = 15;
// let tempDomingo = 4;

// const mediaTemp = (num1, num2, num3, num4, num5, num6, num7) => {
//     return (num1 + num2 + num3 + num4 + num5 + num6 + num7) / 7;
// }

// console.log("El sumatorio de la temp semanal es:", mediaTemp
//     (tempLunes,
//         tempMartes,
//         tempMiercoles,
//         tempJueves,
//         tempViernes,
//         tempSabado,
//         tempDomingo));

/*5. Ejercicio
Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: un string,
introducido por el usuario a través del prompt(), y un segundo parámetro, que será un objeto con las
funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.
El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación,
mediante un menú de consola, preguntará al usuario las siguientes opciones:
• Replace chars by signs?
• Capitalize?
• Replace spaces with commas?
La primera opción reemplazará de la siguiente forma:
• a → @
• e → 3
• i → 1
• o → 0
• s → $
La segunda opción pondrá la primera letra de cada palabra en mayúscula, y la tercera cambiará los
espacios por comas. No puede haber 2 comas seguidas.
El menú aceptará únicamente y para sí o n para no. Almacenará las respuestas en un objeto con las
propiedades: replaceChars, capitalize y replaceSpaces, cuyos valores asociados serán booleanos.
La salida del programa deberá mostrar el string original, y a continuación el string con cada una de
las modificaciones requeridas. Un ejemplo con todas las opciones marcadas como true:
• Lorem ipsum dolor sit amet
• L0r3m 1p$um d0l0r $1t @m3t
• Lorem Ipsum Dolor Sit Amet
• Lorem,ipsum,dolor,sit,amet
** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de
transformación del string hasta que termina. Después de los string requeridos, el programa mostrará
las siguientes líneas: **
• 5 words, 25 chars
• work done in 750 miliseconds*/

const ejercicio5 = () => {
    let replaceCharsBySings = false;
    let capitalize = false;
    let replaceSpacesWithCommas = false;

    if (prompt("Replace chars by signs? Y/N").toUpperCase() == "Y") {
        replaceCharsBySings = true;
    };

    if (prompt("Capitalize? Y/N").toUpperCase() === "Y") {
        capitalize = true;
    };

    if (prompt("Replace spaces with commas? Y/N").toUpperCase() === "Y") {
        replaceSpacesWithCommas = true;
    };

    let string = prompt('Please, enter your string')
    while (!string || string.length == 0);

    let stringReplaceChars = [...string];

    if (replaceCharsBySings == true) {
        for (let i = 0; i < string.length; i++) {

            if (string[i] == 'o') {
                stringReplaceChars[i] = '0';
            }

            if (string[i] == 'e') {
                stringReplaceChars[i] = '3';
            }

            if (string[i] == "i") {
                stringReplaceChars[i] = "1";
            }

            if (string[i] == "a") {
                stringReplaceChars[i] = "@";
            }

            if (string[i] == "s") {
                stringReplaceChars[i] = "$";
            }
        }
        console.log("Remplace chars by sings: ", stringReplaceChars.toString().replace(/,/g, ''));
    }

    let stringCapitalize = string.split(" ");

    if (capitalize == true) {
        for (let i = 0; i < stringCapitalize.length; i++) {
            stringCapitalize[i] = stringCapitalize[i][0].toLocaleUpperCase() + stringCapitalize[i].substring(1);
        }
        console.log("Capitalize: ", stringCapitalize.toString().replace(/,/g, ' '));
    }

    if (replaceSpacesWithCommas == true) {
        console.log("Replace spaces with commas: ", stringCapitalize.toString().replace(/ /g, ','));
    }
}
/*Ejercicio sin numero, Crea una clase llamada User,
que define un constructor, que recibe 1 parametrom dni

A continuacion, añade los setters y getters para el nombre
y el email.

Crea un objeto, dale un nombre y un email y muestralos por consola*/


const ejercicioSinNumero = () => {
    class User {
        constructor(dni) {
            this.dni = dni;
            this.names = [];
            this.emails = [];
        }
        set name(newName) {
            this.names.push(newName);
        }
        set email(newEmail) {
            this.emails.push(newEmail);
        }
        get name() {
            return this.names.join();
        }
        get email() {
            return this.emails.join();
        }
    }

    let Juan = new User("1234567T");
    Juan.name = "Moisés";
    Juan.email = "asdfgtrew@gmail.com";

    console.log(Juan.dni);
    console.log(Juan.name);
    console.log(Juan.email);
}

/*6. Ejercicio
Escribe un programa para generar estadísticas de texto. Recibirá un string proporcionado por el
usuario, y a modo de ejemplo, para la entrada: Lorem ipsum dolor sit amet, mostrará la siguiente
salida:
• Length: 26 characters
• Length witout white-space: 22 charactersWords: 5
• Unique words: 5
• Unique words(%): 100%
• Length of shortest word: 3 characters
• Length of longest word: 5 characters
• Avg. word length: 4 (con redondeo al número entero más cercano)*/

const ejercicio6 = () => {

    let entradaDeTexto = prompt("Introduce string");

    console.log(entradaDeTexto.length); /*Longitud con espacios*/
    console.log(entradaDeTexto.replace(/ /g, '').length); /*Longitud sin espacios*/
    console.log(entradaDeTexto.split(" ")); /*Creacion array de palabras*/

    const arrayClasificado = [] = entradaDeTexto.split(" ").sort();//Inicio, contador de palabras repetidas
    let repetitionCounter = 0;
    for (let i = 0; i < arrayClasificado.length; i++) {
        if (arrayClasificado[i] === arrayClasificado[i + 1]) {
            repetitionCounter++;
        }
    }
    console.log(`Se repiten ${repetitionCounter} palabras`);//Fin, contador palabras repetidas
}

/*7. Ejercicio - Playing games
Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable.
A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El
programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: “You
win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”. Si agota los intentos y
no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”.*/

const ejercicio7 = () => {

    let ramdomNumberForGame = Math.floor(Math.random() * 11);
    for (let i = 0; i < 3; i++) {
        console.log(`Intento numero ${i}, quedan ${3 - i} intentos`);
        if (ramdomNumberForGame == prompt("Adivine el numero secreto")) {
            console.log('You win!');
            break;
        } else if (i != 2) {
            console.log('Try again');
        } else if (i == 2) {
            console.log("Sorry, Good luck in love");
        }
        console.log(ramdomNumberForGame);
    }
}

/*8. Ejercicio – Password Generator
Investigando como obtener caracteres a partir de valores ASCII, vamos a crear un generador de
contraseñas.
En primer lugar, pregunta al usuario cuantos caracteres tendrá la contraseña deseada, (mínimo 8 y
máximo 16).
A continuación, pregunta si quiere incluir, paso a paso, cada uno de los siguientes caracteres:
minúsculas, mayúsculas, números y símbolos.
En caso de que el usuario diga que no a las 4 posibilidades, la contraseña estará hecha en
minúsculas.
Cada carácter será generado con la siguiente fórmula:
• Math.floor(Math.random() * (max + min + 1) + min;
En una función que devuelva números enteros aleatorios, y reciba 2 parámetros.
La contraseña generada debe ser mostrada con alert().
** Bonus opcional: asegura que la contraseña no contiene 2 caracteres iguales seguidos. **    */

do {
    longitud = prompt("Introduce la longitud deseada minimo 8 maximo 16 caracteres");
} while ((longitud < 8 || longitud > 16) && NaN);

let ramdonPassword = [];

let passContainMinus = false;
let passContainMayus = true;
let passContainNumbers = false;
let passContainSymbols = false;

let arrayMinusculas = [];
let arrayMayusculas = [];
let arraySimbolos = [];
let arrayNumeros = [];
let arrayUserSelected = [];

for (let i = 0; i < 25; i++) { //Array que guarda en decimal los valores ascii mayus
    arrayMayusculas[i] = 65 + i;
}

for (let i = 0; i < 25; i++) { //Array que guarda en decimal los valores ascci minus
    arrayMinusculas[i] = 97 +i;
}

for (let i = 0; i < 13; i++) { //Array que guarda en decimal los valores ascci simbolos
    arraySimbolos[i] = 33 + i;
}

for (let i = 0; i < 10; i++) { //Array que guarda en decimal los valores ascci numeros 0-9
    arrayNumeros[i] = 48 + i;
}

if (prompt("¿Desea que la contraseña contenga numeros?") == "si") {//Ejemplo selector para password
    passContainNumbers = true;
}

if (prompt("¿Desea que la contraseña contenga minusculas?") == "si") {//Ejemplo selector para password
    passContainMinus = true;
}

if (prompt("¿Desea que la contraseña contenga mayusculas?") == "si") {//Ejemplo selector para password
    passContainMayus = true;
}

if (prompt("¿Desea que la contraseña contenga simbolos?") == "si") {//Ejemplo selector para password
    passContainSymbols = true;
}

switch (true) { //SIN TERMINAR Este bucle se encargar de agregar los valores seleccionados a un nuevo array
    case passContainMayus == true:
        for (let i = 0; i < arrayMayusculas.length; i++) {
            arrayUserSelected.push(arrayMayusculas[i])
        }
    case passContainMinus == true:
        for (let i = 0; i < arrayMinusculas.length; i++) {
            arrayUserSelected.push(arrayMinusculas[i])
        }
    case passContainNumbers == true:
        for (let i = 0; i < arrayNumeros.length; i++) {
            arrayUserSelected.push(arrayNumeros[i])
        }
    case passContainSymbols == true:
        for (let i = 0; i < arraySimbolos.length; i++) {
            arrayUserSelected.push(arraySimbolos[i])
        }
    default:
        break;
}

// console.log(String.fromCharCode(arrayMinusculas[1]));//Convierte valor decimal ascii code a valor real minusculas

// console.log(longitud);

// for (let i = 0; i < arrayUserSelected.length; i++) {//comprobar que se guardaron los datos seleccionados
//     console.log(arrayUserSelected[i]); 
// }

for (let i = 0; i < longitud; i++) {
    ramdonPassword.push(arrayUserSelected[Math.floor(Math.random() * arrayUserSelected.length)]);
}

for (let i = 0; i < longitud; i++) {
    console.log(String.fromCharCode(ramdonPassword[i]));   
}


