/* 
Librería de validaciones JS para formularios 
 */
// validación de email 
function validarEmail(email) {
    //let re = new RegExp ("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
    let re= new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return re.test(email);
}//email

// validación de CP 
export function validarCP(cp){
    let re = new RegExp ("^[0-9]{5}$");
    return re.test(cp);
}//cp

// validación del CURP
export function validarCURP(curp) {
    let re = new RegExp ("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{6}[HM]{1}[A-Z]{5}[A-J0-9]{1}[0-9]{1}$");
    return re.test(curp);
}//curp

// validación del RFC
function validarRFC(rfc) {
    let re = new RegExp ("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{6}[A-Z0-9]{3}$");
    return re.test(rfc);
}//rfc

export default validarEmail;
//module.exports=validarEmail;