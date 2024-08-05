const marcas= ["Hp", "Dell", "Lenovo", "Toshiba", "Acer", "Asus"];

console.log (marcas);
marcas[3]="Gateway";
//marcas[6]="VAIO";
marcas.push("VAIO");
console.log(marcas.push("MSI"));


marcas.unshift("Toshiba");
console.log(marcas[3]);
console.log(marcas[6]);

console.log(marcas);

console.log(marcas.pop());
console.log(marcas.shift());
console.log(marcas.length);

let strMarcas=marcas.join(", ")
console.log(strMarcas);

let newMarcas=strMarcas.split(", ")
console.log(newMarcas);

console.log(newMarcas.at(0)); // [0]

//Ciclo for 
/*
for (let cont = 0; cont < newMarcas.length; cont++) {
    console.log(cont + "." +newMarcas[cont]);
}

for (let cont=0; cont<100; cont+=5){
    console.log(cont);
}
*/
//newMarcas.console.log(marcas);

//while
/*
let cont=0;
while (cont < newMarcas.lenght) {
    console.log(cont + ". "+ newMarcas[cont]);
    cont++;
}//while newMarcas

cont=0;// solo inicie cont en cero porque ya había sido declarada más arriba
while (cont<100) {
    console.log(cont);
    cont+=5;
}
*/

//do while 
/*
let cont=0
do {
    console.log(cont + ". "+ newMarcas[cont]);
    cont++
} while (cont<newMarcas.length);

cont=0
do {
    console.log(cont);
    cont+=5;
} while (cont<100);
*/

newMarcas.forEach((element, index) => {
    console.log(index+ ". "+element);  
});