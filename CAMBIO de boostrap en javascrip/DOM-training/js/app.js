//seleccionar elementos desde js
let nav = document.querySelector("nav");
console.log(nav);

//seleccionar elemnto con clase
let active = document.querySelector(".active");
console.log(active);

//seleccionar multiples elementos con la misma etiqueta
let headersAndParragraph = document.querySelectorAll("p, h1")
console.log(headersAndParragraph [0].innerText);

//Sobreescribir hmtl, en este caso el body
// document.body.innerHTML="<h1>wow!</h1>";

// document.querySelector("section")

// console.log(document.querySelector("section"));
