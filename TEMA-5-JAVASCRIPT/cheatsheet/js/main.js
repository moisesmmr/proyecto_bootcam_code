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