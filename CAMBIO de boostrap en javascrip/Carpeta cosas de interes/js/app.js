// Cambiar color del string

console.log("%c <--este simbolo tiene que ir al principio del string al que le cambiar el nombre", "color: red");//A continuacion el color

//los siguientes dos elementos muestran los datos en forma de array
// Object.valius("variable") // muestra la el contenido de un objeto
// Object.keys("Variable") // muestra las llaves del objeto y no muestra el contenido

//Recorrer array con key (Key tiene uso de contador y permite ir leyendo un array)
// for (let key in array) {
//     console.log(array[key].name);//Accede al apartado name del array
//     console.log(array[key].id);//Accede al apartado id del array
// }

//Las comillas `${key}: ${value}` se usar para escribir algo literal (no string) 

//--------------------FUNCIONES----------------
//Algunas funciones ya viene predefinidas
function sayHello() {
    console.log("Hello, good afternoon!")
};

sayHello();

function sayHelloName(name, moment) {
    console.log(`Hi, ${moment}, ${name}`);
    return name.length;
}

let letters=0;

letters = sayHelloName("Pablo", "Good afternoon");
console.log(`Your name has ${letters}`);
