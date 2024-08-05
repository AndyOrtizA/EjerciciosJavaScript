
//valores de entrada del forms
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");

let btn=document.getElementById("btn");

btn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("The first name is: " + firstName.value);
    console.log("The last name is: " + lastName.value);


})



