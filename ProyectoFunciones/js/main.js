let today = new Date();

console.log(today);
console.log(today.getFullYear()); //2024
console.log(today.getMonth()); // 4 los meses en JS empiezan en 0
console.log(today.getDate());
console.log(suma(7,7));
console.log(multiplica(4,4));

function suma(a,b){
    return a+b;
}//suma

function multiplica(a,b){
    return a*b;
}//multiplica

const resta = function(a,b){
    return a-b;
}// resta 
console.log(resta(2,5));

const divide = (a,b) => (a/b);
console.log(divide(9,3));


// Ejercicio 1 

function costs(transaccion){
    return ((transaccion+3)*1.01).toFixed(2);
}//costs
console.log(costs(100));



//Ejercicio 2
function friends(name1, name2, name3){
    console.log("welcome "+name1+", "+name2+", "+name3);
    return;
}//Welcome to friends
friends("Andy", "JC", "Amy");



//Ejercicio 3
function age(yearOfBirth){
    //let today =new Date();
    year= today.getFullYear(); // Al inicio esta declarada de la función
    return year-yearOfBirth;
}//age

function friends2(name1, year1, name2, year2, name3, year3){  
    console.log("welcome "+name1+", you are "+ age(year1)+ ". "+ "welcome "+name2+", you are "+age(year2)+ ". "+
    "welcome "+name3+", you are "+age(year3)+ ".");
    return;
}//welcome to friends and age
friends2("Andy", 1998, "JC", 1990, "Amy", 1995);


//Challenge Yourself
function grading(grade){
    if (grade >=5){

        if(grade>8 && grade<11){
            console.log("Excellent");
        } 

        if(grade==11){
            console.log("Perfect");
        }
    
       return true;
    
    } 
    else return false;

}//grading

console.log(grading(11));
