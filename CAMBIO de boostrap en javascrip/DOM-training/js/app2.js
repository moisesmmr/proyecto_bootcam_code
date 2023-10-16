//Navegacion por el DOM


console.log("Working DOM");
//El elemento padre
document.body.parentNode
//total de elementos hijos
document.body.children.length
document.body.childElementCount
//primer elemento hijo
document.body.children[1];
//primer y ultimo nodos hijos
document.body.firstElementChild
document.body.lastElementChild
//siguiente y anterior hermano
document.body.nextElementSibling
document.body.previousElementSibling
//llegar a class active desde nav
console.log(nav.children[0].children[0].children[0]);
//Sacar contenido de etiqueta
console.log(document.querySelector("section".innerHTML));

console.log(document.querySelector("section".outerHTML));

// //Insertar nav
// document.body.insertAdjacentHTML("afterbegin", "<nav>navigation</nav>")
// //insertar h1 antes de nav
// document.querySelector("nav").insertAdjacentHTML("beforebegin", "<h1>Main Header</h1>")
// //Insertar enlace a gogole despues de nav
// document.querySelector("nav").insertAdjacentHTML("afterend", '<a href="http://google.es">google</a>')
let header = document.createElement("h1");
//inserta despues de la seleccion por append
header.append("Hellor World!");
document.body.append(header);
//Inserta justo antes de donde este header
header.prepend("!")
document.querySelector("h1").firstChild.before("!!")
//agregar un parrafo despues de h1
let parragraph = document.querySelector("p")
parragraph.textContent = "writing a parragraph"
document.body.append(parragraph);
//sustituir elemento
document.querySelector("h1").replaceWith(parragraph)
//eliminar elemento
// parragraph.remove();
parragraph.style.textAlign = "center";
parragraph.style.textTransform = "capitalize";
parragraph.style.backgroundColor = "black";
parragraph.style.color = "white";
parragraph.style.padding = "2em";
parragraph.setAttribute("class", "main");
//agregar clase cuando ya tiene una, si se usa setAttribute
//se sobreescribe
parragraph.classList.add("light")
console.log(parragraph.getAttribute("class"));
console.log(parragraph.style.cssText);