import validarEmail from "./validaciones.js";
import {validarCURP, validarCP} from "./validaciones.js";

//const vEmail=require("./validaciones.js")
/* let email="jperezhotmailcom";
console.log(validarEmail(email)?"correo válido":"correo incorrecro"); */
//let curp= "OIAA980612MGTRLN09"


let txtCURP=document.getElementById("txtCURP");
let errortxtCURP = document.getElementById("errortxtCURP");

txtCURP.addEventListener("blur", function (event) {
    event.preventDefault;
    errortxtCURP.style.display="none";
    txtCURP.style.border=""
   if(! validarCURP(txtCURP.value)){
      errortxtCURP.innerHTML="favor de corregir el CURP"
        errortxtCURP.style.display="block";  
        txtCURP.style.border="red solid medium"
    } //if
});




let txtEmail=document.getElementById("txtEmail");
let errortxtEmail = document.getElementById("errortxtEmail");

txtEmail.addEventListener("blur", function (event) {
    event.preventDefault;
    errortxtEmail.style.display="none";
    txtEmail.style.border=""
   if(! validarEmail(txtEmail.value)){
      errortxtEmail.innerHTML="favor de corregir el correo electrónico"
        errortxtEmail.style.display="block";  
        txtEmail.style.border="red solid medium"
    } //if
});