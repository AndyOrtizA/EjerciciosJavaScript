let btn = document.getElementById("btn");
let links = document.getElementsByTagName("a");

btn.addEventListener("click", function(event){
    printLinks();
})//btn

function printLinks(){
    let size= links.length;
    console.log(size);
    console.log(links.item(0));
    console.log(links.item(size-1));
}

