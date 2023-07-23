// console.log('Hello, World!!!');

// var foo = null;
// console.log(typeof foo);
// foo;

// let bar;
// console.log(typeof bar);

// //Ejercicio para comprobar tipo y valor de una variable
// let ejercicioTipoyValorA = 838 < 542;
// console.log("A", typeof ejercicioTipoyValorA, ejercicioTipoyValorA);

// let ejercicioTipoyValorB = 17 / 5;
// console.log("B", typeof ejercicioTipoyValorB, ejercicioTipoyValorB);

// let ejercicioTipoyValorC = 12 * 6;
// console.log("C", typeof ejercicioTipoyValorC, ejercicioTipoyValorC);

// let ejercicioTipoyValorD = 35 % 8; //el % entrega en una division el resto
// console.log("D", typeof ejercicioTipoyValorD, ejercicioTipoyValorD);

// let ejercicioTipoyValorE = 1 == 3 || 5 > 7 || 10 * 5 > 40;
// console.log("E", typeof ejercicioTipoyValorE, ejercicioTipoyValorE);

// let ejercicioTipoyValorF = 13 % 2 == 0;
// console.log("F", typeof ejercicioTipoyValorC, ejercicioTipoyValorC);

// let ejercicioTipoyValorG = "CODE" + " " + "SPACE";
// console.log("G", typeof ejercicioTipoyValorG, ejercicioTipoyValorG);

// let ejercicioTipoyValorH = (21 / 2) % 3;
// console.log("H", typeof ejercicioTipoyValorH, ejercicioTipoyValorH);

// let ejercicioTipoyValorI = 5 == "5";
// console.log("I", typeof ejercicioTipoyValorI, ejercicioTipoyValorI);

// let ejercicioTipoyValorJ = !(1 == 1);
// console.log("J", typeof ejercicioTipoyValorJ, ejercicioTipoyValorJ);

let fecha = new (Date);
console.log(fecha);

let month = fecha.getMonth();
console.log(month);

if (month == 6 || month == 7 || month == 8) {
    console.log("Es verano");
} else if (month == 9 || month == 10 || month == 11) {
   console.log("Es otoño");
} else if ( month == 0 || month == 1 || month == 2) {
    console.log("Es invierno");
}  else if ( month == 3 || month == 4 || month == 5) {
    console.log("Es primavera");
}

let character = "Black Widow";
switch (character) {
    case "Capitan America":
        power = "Indesctructible shield";    
        break;
    case "Black Widow":
        power = "Master spy & assassin"
        break;
    case "Iron Man":
    power = "Genius-level intellect";
        break;
    case "Thor":
        power = "The hammer of Thoer";
        break;
    default:
        console.log("Choose you hero!");
}
console.log(power);

//Ejercicio selector de idiomas


// let lenguajeSelected = prompt("Selecciona idioma: español, ingles, aleman o polaco");

// switch (lenguajeSelected) {
//     case "español":
//         console.log("Ha seleccionado Español");
//         break;
//     case "ingles":
//         console.log("Lenguaje is English, execute code for English");
//         break;
//     case "aleman":
//         console.log("Ha seleccionado Aleman");
//         break;
//     case "polaco":
//         console.log("Ha seleccionado Polaco");
//         break;
//     default:
//         console.log("Idioma no disponible, seleccione otro idioma");
        
//}

//Ejercicio: Escribe un programa que compurebe un numero previamente guardado en una variable,
//y como resultado nos dia por consola si el numero es menor que 0, si esta entre 0 o10
//si esta entre 11 y 20, o si es mayor que 20

let secretNumber = 0;

if (secretNumber < 0) {
    console.log("El numero es menor que 0")
    }

    else if(secretNumber > -1 && secretNumber <11) {
        console.log("El numero esta entre 0 y 10")
    }

    else if(secretNumber > 10 && secretNumber < 21) {
        console.log("El numero esta entre 10 y 20")
    }

    else if(secretNumber > 20) 
    {console.log("El numero es mayor que 20")
};

let multiplicador = 0;
let resultado;

while (multiplicador <= 10) {
    resultado = multiplicador * 2;
    console.log(multiplicador, "x 2 = ", resultado);
    multiplicador++;
}

