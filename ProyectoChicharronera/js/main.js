function chicharroneraX1(a,b,c){
    let x1=(-b+Math.sqrt(Math.abs(b**2-4*a*c)))/(2*a)
    return x1;
}

function chicharroneraX2(a,b,c){
    let x2=(-b-Math.sqrt(Math.abs(b**2-4*a*c)))/(2*a)
    return x2;
}


//Ejemplo del switch 
//MB = 10
//B 8-<10
//s 6-<8
//NA

function calificaciones(num){
    num=Math.floor(num);
    switch (num) {
        case 10:
            console.log("MB")
            break;
        case 9:
            console.log("B")
            break;
        case 8:
            console.log("B")
            break;
        case 7:
            console.log("s")
            break;
        case 6:
            console.log("s")
            break;            
        default:
            console.log("NA")
            break;
    }
}

// como hacerlo más corto 
function calificaciones2(num){
    num=Math.floor(num);
    switch (num) {
        case 10:
            console.log("MB")
            break;

        case 9:
        case 8:
            console.log("B")
            break;

        case 7:
        case 6:
            console.log("s")
            break; 

        default:
            console.log("NA")
            break;
    }
}