//boton
let btnjsstyle = document.getElementById("jsstyle");
//parrafo 
let text = document.getElementById("text");


btnjsstyle.addEventListener("click",function(event){
    event.preventDefault();
    console.log("HOLA");

    text.style.color="blue";
    text.style.fontSize="200px";
    text.style.fontFamily= "Comics Sans"
})


