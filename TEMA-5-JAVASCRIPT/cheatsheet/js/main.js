//-----------------------------Uso externo JS-------------
function saludo() {
    alert("Hola desde un script externo")
}
/*document.getElementsByTagName("a").item(2).addEventListener("click", saludo);*/

//-----------------------------Depuracion - loggin------------
//alert ("Mensaje");
console.log("Mensaje");

//------------------------------Variables--------------
//var -> funtion scope
//let / const -> block scope

function saludar() {
    let contador;
    console.log("Inicial: ", contador);

    for (let contador = 0; contador < 3; contador++) {
        console.log(contador);
    }
    console.log("Final: ", contador);
}

saludar();

console.clear();

//inicializacion
let day;
day = 5;

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
str = str + ". Adios Mundo";
str += ". Adios Mundo";
console.log(str);

console.log(str.replace("Mundo", "futuro"));
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

console.log("1" + 1, "1" - 1); //Peculiaridad js

//---------------Object------------
person = {
    name: "john",
    age: 30,
    blonde: false,
    jump() {
        console.log("Hey, estoy saltando")
    }
};

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

// This
const person2 = {
    name: "Thomas",
    talk() {
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();

console.clear();
//-------------------Object
let selectedColors = ["red", "blue"]; // Array de string
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = "green";
console.log(selectedColors, selectedColors.length);//agrega elemento

selectedColors.push("violet");
console.log(selectedColors, selectedColors.length); //agrega elemento

selectedColors.pop();
console.log(selectedColors, selectedColors.length);//elimina elemento

selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);//agregar al unicio

selectedColors.shift();
console.log(selectedColors, selectedColors.length);//elimina el unicio

selectedColors.sort();
console.log(selectedColors, selectedColors.length);//Ordena

console.log(selectedColors.indexOf("red"));//busca y devuelve indice

console.log(selectedColors.slice(1, 3));//devuelve un rango, exclulle el final
console.log(selectedColors);

console.log(selectedColors.splice(1, 3));//elemina un rango
console.log(selectedColors);

/* Crear un objeto 'niño' que tenga las propiedades nombre, altura, genero y amigoS. 
Amigos estara inicialmente vacio y añadiremos posterioremente 3 elementos con los 
nombres.*/


let niño = {
    nombre : "juan",
    altura : "1.7m",
    genero : "masculino",
    blonde : false,
    amigoS : [],
    perderAmigo() {
        this.amigoS.pop();
    }
}

console.log(niño);

niño.amigoS.push("laura", "luis", "carlos");

console.log(niño);

niño.perderAmigo();

console.log(niño);

//----------------- Condicionales

// const randomNumber = 9;
// const guessedNumber = "5";

// if (randomNumber == guessedNumber) {
//     console.log("Has acertado el número");
// } else if(randomNumber > guessedNumber) {
//     console.log("El número secreto es mayor");
// } else {
//     console.log("El número secreto es menor");
// }

//Ternari operator
// let person = {
//     name: "Moisés",
//     age: 31,
//     blonde: false,
//     presentarse() {
//         console.log(`hola soy ${this.name}, tengo ${this.age}, y ${this.blonde ? "soy rubio" : "no soy rubio"}`);
//     }
// }

// person.presentarse();

//switch
let option = 3;
switch (option) {
    case 1:
        // Bloque de codigo para el valor 1
        console.log("Option vale 1");
        break;
    case 2:
        // Bloque de codigo para el valor 1
        console.log("Option vale 2");
        break;
    case 3:
        // Bloque de codigo para el valor 1
        console.log("Option vale 3");
        break;
    default:
        // "De otro modo" de pseint
        console.log("otra opcion");
        break;
}
console.clear();
//----------------------Funciones/Fuctions----------------

//Nombradas
function greet(name, lastName) {
    return `Hola, ${name} ${lastName}. ¿Que tal?`;
}

console.log(greet("Marcos", "Aurelio"));
// greet("Marcos", "Aurelio");

// Que devuelva el cuadrado de un numero que recibe por parametro
function square(number) {
    let square = number * number;
    return square;
}

console.log(square(5));

//Anonimas
let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); //Ordena por ASCII
console.log(numbersArray);


function orderNumbers (a, b) { //Para ordenar numeros por su valor
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

numbersArray.sort(function (a, b) {return a - b}); //Lo escrito en esta linea y en la linea 292 es igual, para esta opcion se obvia la fincion en linea 278.

// numbersArray.sort(orderNumbers);

console.log(numbersArray);

// Arrow Functions
const perimeterOfSquare = (side) => side*4;

console.log(perimeterOfSquare(5));

// Ordenar mediante flechas

let orderList = [5, 7, 1, 9];

orderList.sort((a, b) => a - b);
console.log(orderList);
console.clear();
//---------------Bucles/Loops-------

// For
for (let i = 0; i <= 10; i++) {
    console.log(`Indice: ${i}`);
}

// Definir y rellenar un array con el índice i
array2 = [];

for (let i = 0; i <= 10; i++) {
    array2.push(i);
}

console.log(array2);

// While
let contador = 0;
while (contador <= 10) {

    console.log(contador)
    
    contador++;
}

// ForEach
array3 = [];

for (let i = 0; i <= 10; i++) {
    array3.push(i * i);
}

console.log(array3);

array3.forEach(function (value, index) {
    console.log(`Indice ${index}: ${value}`);
})

// (side) => side * 4

array3.forEach((value, index) => console.log(`Indicee es: ${index}, valor ${value}`));

// Copiar array

let otherArray = [];

array3.forEach(item => otherArray.push(item))

console.log(`other ${otherArray}`);

console.clear();

// For of
for(let item of numbersArray) {
    console.log(item);
}

// Continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; //Salta a la siguiente iteración
    }
    console.log("Using continue", i);
}
console.clear();
// Break

// -----------------------------DOM (Document Object Model)----------------
console.log(document);
console.log(document.URL);
console.log(document.title);
// document.tettle = "Cheatsheet JavaScript (DOM)";
document.title += " (DOM)";
console.log(document.title);

// Selectors
const family = document.getElementsByTagName("div");
console.log(family);

const grandParent = document.getElementById("grandparent");
console.log(grandParent);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector(".grandparent div");
console.log(element);

const changeBackground = (element) => element.style.backgroundColor = "#333";

changeBackground(children[3]);
changeBackground(parent1);
children[2].parentNode.parentNode.style.backgroundColor = "xxxxxxxxxxxxx";//parentNode suber un escalon para aplicar
children[1].textContent; //Coge solo el texto y obvia la etiqueta

// Agregar una clase a un padre 
console.log("Classlist", parent1.classList);
parent1.classList.remove(); //Para remover una clase de un padre
parent1.classList.add("bg-red");//Para agregar una clase a un padre
parent1.classList.toggle("bg-red");//Hace lo contario, lo pone o lo quita
parent1.setAttribute("name", "nombre-parent1");//Crea carasteristica y nombre

console.clear();
// Create / Remuve elements
let myDiv = document.createElement("div");
myDiv.id = "new-div";
myDiv.classList.add("child");
myDiv.textContent = "child 2.5";

let myDiv2 = myDiv;

parent2.appendChild(myDiv2);
parent1.appendChild(myDiv);

myDiv2 = myDiv.cloneNode(true);//Creamos un nuevo nodo a partir del original
parent2.appendChild(myDiv2);
myDiv2.textContent = "child 5";