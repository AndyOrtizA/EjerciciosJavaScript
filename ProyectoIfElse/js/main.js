let today = new Date();

if (today.getHours()>=19){
    console.log("Buenas tardes");
} else if (today.getHours()>=12){
    console.log("Buenas tardes");
} else if (today.getHours()<12){
    console.log("Buenos días");
}


dia = today.getDay();
mes = today.getMonth();
console.log(dia, mes);

// Primer intento 
if(mes==11){
    if(dia>=21){
         console.log("La estación del año es Invierno");
    }else{
        console.log("La estación del año es Otoño");
    }
} else if (mes>8){
    console.log("La estación del año es Otoño");
} else if (mes==8){
    if (dia>=23){
        console.log("La estación del año es Otoño");
    }else{
        console.log("La estación del año es verano");
    }
} else if(mes>5){
    console.log("La estación del año es verano");
} else if(mes==5){
    if(dia>=21){
        console.log("La estación del año es verano");
    }else{
        console.log("La estación del año es primavera");
    }
} else if (mes>2){
    console.log("La estación del año es primavera");
} else if (mes==2){
    if(dia>=20){
        console.log("La estación del año es primavera");
    }else{
        console.log("La estación del año es invierno");
    }
} else {
    console.log("La estación del año es invierno");
}

//Segundo intento 

if(((mes>=8)&&(dia>=23))&&(mes>=8)){
    console.log("Otoño");
} else if(((mes>=5)&&(dia>=21))&&(mes>=5)){
    console.log("Verano");
}if(((mes>=2)&&(dia>=20))&&(mes>=2)){
    console.log("primavera");
}else{
    console.log("Invierno");
}
