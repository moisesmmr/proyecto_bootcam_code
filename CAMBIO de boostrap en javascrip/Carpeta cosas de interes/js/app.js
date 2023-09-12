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

let letters = 0;

letters = sayHelloName("Pablo", "Good afternoon");
console.log(`Your name has ${letters}`);

/*constructor para crear objetos*/

class avengers {
    constructor(character, name) {  /*construye un objeto con diferentes caracteristicas mediante constructor*/
        this.character = character;//this se usa para diferenciar la carteristica del objeto del dato que viene del exterior
        this.name = name;
        this.powers = [];
        this.bio = "";
    }
    set power(newPower) {
        this.powers.push(newPower) //Agrega una caracteristica a powers
    }
    get power() {
        console.log(this.powers.join(",")); //obtientes el Arrray powers separado por comas
    }
    static avengersBio() {
        this.bio = `Eartg's mightiest Heroes stan as the planet's fisrt line of defense agains the most powerful threats in the universe.`;
        console.log(this.bio);
    }
}

let ironMan = new avengers("Iron Man", "Tony Stark"); //La propiedad new invoca el construcor de avengers para agregar el nuevo objeto
ironMan.power = "Fligth"; // invoca la funcion anteriormente crada para agregar valores al apartado powers
ironMan.power = "Artficial Intelligence";
ironMan.power; //Muestra en la consola un string con el array de power
avengers.avengersBio()//Metodo estatico

/* Hay tres formas de almacenar datos dentro de la clase
las clases siempre empiezan por mayuscula

---Set: Para guardar un valor
---Get: Para mostrar un valor
---Static: Para que llamarlo si necesitar el objeto "ironMan.power"*/

//forEach

let arrayNameUser = ["moi", "moi2", "moi3", "moi4",];

arrayNameUser.forEach(name => {
    console.log(name);
});