let today = new Date();
day= today.getDay();
hour=today.getHours();


//Parte 1
function bisnessHours(dayNumber, hourNumber){
 //1-5 días laborales
 //9-18 hrs horario laboral    
    if ((dayNumber>=1 && dayNumber<=5) &&(hourNumber>=9 && hourNumber<18)){
            //console.log("Horario laboral");
            return true;
        }
    else{
        //console.log("No es horario laboral");
        return false;
    }
}
//bisnessHours(day, hour)

//Parte 2

function getDayNumber(janFirstDayNumber, yearDayNumber){
    newday= (yearDayNumber + (janFirstDayNumber-1))%7;
    console.log(newday)
    /*
    if(newday==0){
        console.log("Es domingo");
    }else if(newday==1){
        console.log("Es lunes");
    }else if(newday==2){
        console.log("Es martes");
    }else if(newday==3){
        console.log("Es miercoles");
    }else if(newday==4){
        console.log("Es jueves");
    }else if(newday==5){
        console.log("Es viernes");
    }else if (newday==6){
        console.log("Es sabado");
    } 
    */
    return newday;
}

//getDayNumber(0,35)

//Parte 3

function workDayHour_atualYear(yearDayNumber, hourNumber){
    let today= new Date;
    //con el método de set reescribimos sobre today para mandar la fecha al dia o mes que queremos para posteriormente obtener el dia de la 
    //semana del dia 1 del mes 0 es decir el primero de enero y saber si es lunes martes miercoles, etc etc. 
    today.setDate(1);
    today.setMonth(0);
    return bisnessHours(getDayNumber(hoy.getDay(),yearDayNumber),hourNumber);
}
