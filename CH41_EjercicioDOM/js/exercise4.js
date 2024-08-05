let listas_tag = document.getElementsByTagName("section");
let lista_id = document.getElementById("container");
let second = document.getElementsByClassName("second");
let lista_

let lista_ul = document.getElementsByTagName("ul").item(0);

let lista_ol = document.getElementsByTagName("ol").item(0);
//let thrid_ol = lista_ol.getElementsByClassName("third");
let third_ol = document.getElementsByClassName("third");


let footer = document.getElementsByClassName("footer").item(0);


//Give the text "Hello!" to the section with a container id.
lista_id.insertAdjacentText("beforebegin", "Hello!");

//Agregue la clase principal al div con una clase de pie de página.
footer.classList.add('main');
console.log(footer.outerHTML);
//Remove the main class on the div with a footer class.
footer.classList.remove('main');
console.log(footer.outerHTML);

//Create a new li element.
//Give the li the text "four".
let row= `<li class=>four</li>`
//Append the li to the ul element.
lista_ul.insertAdjacentHTML("beforeend",row)



