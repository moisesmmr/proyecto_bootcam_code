//-----------------------------Uso externo JS-------------
function saludo () {
    alert("Hola desde un script externo")
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//-----------------------------Depuracion - loggin------------
//alert ("Mensaje");
console.log("Mensaje");

//------------------------------Variables--------------
//var -> funtion scope
//let / const -> block scope

function saludar() {
    let contador;
    console.log("Inicial: ", contador);
 
    for (let contador = 0; contador < 3; contador ++ ) {
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar();

console.clear();

//inicializacion
let day;
day=5;

let month = 10;

let hour, minute, second;


let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; // avanzada
console.log(var1, var2, var3);

//const -> block scope
const x = 1;
//x = 2;    Error

console.clear();
//-------------------Tipo de datos

let str = String("I'm a string");
let str2 = "I'm another string";//Recomendada
console.log(typeof str, typeof str2, typeof "");

// let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3);

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");

let undef;
console.log(undef, typeof undef);

let selectedColor = null;
console.log(selectedColor, typeof selectedColor);

//Objects
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

//------------------String
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no present"));
console.log("La ultima ocurrencia de 'u' Esta en el indice", str.lastIndexOf("u"));

console.log(str.substring(1, 3));

console.log("Hola mundo".concat(". Adios mundo."));
console.log("Hola mundo" + ". Adios Mundo");
str=str + ". Adios Mundo";
str += ". Adios Mundo";
console.log(str);

console.log(str.replace ("Mundo", "futuro"));
console.log(str.replaceAll("Mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(`El dia de mi cumpleaños es ${day}. `); //string template
console.log("El dia de mi cumpleaños es", day, ".");

//parsin (Conversacion de un tipo a otro)
let number = Number("algo"); //NaN = not a numbre
console.log(number, typeof number);

number = Number("1000");//NaN
console.log(number, typeof number);

number += "1000";//Entiende que es una concatenacion, no una suma.
console.log(number, typeof number);

console.log("1" +1, "1" - 1); //Peculiaridad js

//---------------Object------------
let person = {
    name: "john",
    age : 30,
    blonde : false,
    jump () {
        console.log("Hey, estoy saltando");
    }
}

//Acceso por punto / Dot natation
console.log(typeof person, person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

// Acceso por corchete / Brackets natation
let propertyName = "age";
console.log(person[propertyName]);

// Ampliacion
person.children = ["Marta", "Piter"]; //nueva cualidad
console.log(person);

person.jump()