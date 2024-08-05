// Arrays and loops
//Ejercicio 1
console.log("EJERCICIO 1");
//Fila inicial
let fila = ["Sofia", "David", "Juan"];
//Llegan Sara y Agustín
fila.push("Sara", "Agustín");
//Pasa el primero a la caja
console.log("Turno de "+ fila.shift());
console.log("Así queda la fila al terminar la parte 2 \n" + fila);
//Renata llega de colada atras de David
let i_david=fila.indexOf("David");
let newFila1=fila.slice(0,i_david+1);
let newFila2=fila.slice(i_david+1)
newFila1.push("Renata")
for (let index = 0; index < newFila2.length; index++) {
    newFila1.push(newFila2[index]);   
}
//Llega Elena y se forma.
newFila1.push("Elena")
console.log("Así queda la fila al terminar la parte 3 \n" + newFila1);

//Ejercicio 2
console.log("Ejercicio 2");

for (let fila = 0; fila <=5; fila++) {

    let arr=[]

    for (let colum=0; colum<fila; colum++){
        arr.push("*")
    }

    strArr=arr.join(" ");

    console.log(strArr);   
}




//Ejercicio 3
console.log("Ejercicio 3");
console.log("Parte 1");
let xValue=5;
while(xValue>0){
    console.log(xValue);
    xValue-=0.5;
}

console.log("Parte 2");
let num=1;
while(num<=100){
    if(num%2 !=0){
        console.log(num);
    }
    num++;
}


console.log("Parte 3");
let n=7;
let arreglo=[];
let entrada=n;

while (entrada>0) {
    //arreglo.unshift( "[" + entrada + "]" );
    arreglo.unshift( `[${entrada}]`);
    entrada--;
}
console.log(arreglo.join(" "));



console.log("Parte 4");
let n2=19;
let cont=0;
let suma=0;
while (cont<=n2){
    suma+=cont;
    cont++;
}
console.log(suma);