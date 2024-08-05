let titulo = document.getElementById("titulo");
const btnMostrar = document.getElementById("btnMostrar");
const txtName = document.getElementById("txtName");
const txtName2 = document.getElementById("txtName2");
const txtName3 = document.getElementById("txtName3");

const lista =  document.getElementsByTagName("ul");
const listaAgrupada = document.getElementsByClassName("list-group-item");

const elemento = document.querySelector("ul > li");
console.log(elemento);
const elementos = document.querySelectorAll("ul > li");
console.log(elementos);
const elemento2 = document.querySelectorAll("ul > li:last-child");
console.log(elemento2);


for(let index = 0; index < listaAgrupada.length; index++){
    console.log(listaAgrupada.item(index));
    if((index%2)== 0){
        listaAgrupada.item(index).innerText=index + ".";
    }// if
}// for index


console.log("listaAgrupada "+ listaAgrupada.length);
console.log(listaAgrupada);
console.log(lista.length);
console.log(lista.item(0));


txtName.addEventListener("blur", quitarEspacios);
txtName2.addEventListener("blur", quitarEspacios);
txtName3.addEventListener("blur", quitarEspacios);


function quitarEspacios (event){
    event.preventDefault();
    const campo = event.target;
    console.log(`[${campo.value}]`);
    campo.value = campo.value.trim();
    if (campo.value.length<3){
        console.log("El campo no puede quedar vacio")
        campo.focus();
    }
}

//Botón 
btnMostrar.addEventListener("click", function(event){
    event.preventDefault();
    let item = document.createElement("li"); /*Crear la etiqueta*/
    item.classList.add("list-group-item", "list-group-item-info"); //agrega clases a la etiqueta 
    item.innerText="A simple default list group item createElement";

    //let item2 = document.createElement("li"); /*Crear la etiqueta*/
    //item2.classList.add("list-group-item", "list-group-item-info"); //agrega clases a la etiqueta 
    //item2.innerText="A simple default list group item createElement";

    //Agregar el elemento al final de la lista ul
    //lista.item(0).append(item); 
    lista.item(0).append(item); 

    //Agregar el elemento al principio de la lista ul
    //lista.item(0).prepend(item.cloneNode(true)); 

    let item2=item.cloneNode(true);
    item2.innerText = "Elemento de lista para el ejercicio del DOM"
    lista.item(0).prepend(item2)


    //Agregar el elemento antes de la lista 
    //lista.item(0).before(item); 

    //Agregar el elemeto después de la lista
    //lista.item(0).after(item); 

    //con el metodo de .clone
    let listElement = item.cloneNode(true);
    listElement.innerText ="Este es el primer elemento de la segunda lista"
    lista.item(1).insertAdjacentElement("afterbegin", listElement);

    let listElement2 = item.cloneNode(true);
    listElement2.innerText ="Este es el últimos elemento de la segunda lista"
    lista.item(1).insertAdjacentElement("beforeend", listElement2);

    let listElement3 = item.cloneNode(true);
    listElement3.innerText ="Este es el primer elemento de la segunda lista"
    lista.item(1).insertAdjacentElement("beforebegin", listElement3);

    let listElement4 = item.cloneNode(true);
    listElement4.innerText ="Este es el últimos elemento de la segunda lista"
    lista.item(1).insertAdjacentElement("afterend", listElement4);


    let row= `<li class=>Esta es una prueba para el .insertAdjacentHTML</li>`
    lista.item(1).insertAdjacentHTML("afterbegin",row)
    
});

btnMostrar.addEventListener("mouseover", function(event){
    console.log("se ha pasado el mouse por encima del btnMostrar");
});

window.addEventListener("load", function(event){
    console.log("Página ha terminado de cargar");
});



//console.log(titulo);
//console.log(titulo.id);

//Modificar el contenido en formato texto de la etiqueta
//titulo.innerText="Hola CH41!";
//Leer el contentenido en formato texto de la etiqueta
//console.log(titulo.innerText);

//titulo.innerHTML ="Hola <br/> CH41 !!!";