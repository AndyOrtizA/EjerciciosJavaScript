let divPersonas = document.getElementById("divPersonas"); 
/**
 * Clase person que representa a una persona y su información 
 */

class Person{
    /**
     * @property {String} name - Identifica el nombre de la persona 
     */
    name="";
    /**
     *  @property {String} email - Corro electronico de la persona 
     */
    
    email="";
    age = 0;
    resume ="";
    id=0;

    /**
     * @static {Number} total - Identifica el numero total de personas registradas. 
     */
    static total=0 //Existe solo una vez y existe para la clase no en el objeto 
                  //Propiedad estática, solo exite una vez y se accede mediante la clase

    /**
     * @constructor 
     * @param {*} name 
     * @param {*} email 
     * @param {*} age 
     * @param {*} resume 
     */              

    constructor(name, email, age, resume){
        this.name = name.toUpperCase() ;
        this.email = email.toLowerCase() ;
        this.age =(age<1)?1:age;
        this.resume = resume;
        Person.total++;
        this.id = Person.total;
    }//constructor
    printInfo(div){
        div.insertAdjacentHTML("Beforeend",
        `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.email}</div>
        <div class="card-body" id="cardBody_${this.id}" >
          <h5 class="card-title">${this.name} - ${this.age}</h5>
          <p class="card-text">${this.resume}</p>
        </div>
      </div>`);
    }//printInfo
    static printTotal(div){
        div.insertAdjacentHTML("afterbegin",
            `<div class="alert alert-danger" role="alert">
            Numero de personas archivadas : ${Person.total}
            </div>`
        );
    }//printTotal
}//class Person

///Employee hereda las propiedades de la clase Persona
class Employee extends Person{
    department="";
    salary=0.0;

    constructor(name, email, age, resume, department, salary){
        super(name, email, age, resume);
        this.department = department;
        this.salary =salary;
    }//constructor
    printInfo(div){
        super.printInfo(div);// llama al printInfo de Person
        let cardBody =document.getElementById(`cardBody_${this.id}`);
        cardBody.insertAdjacentHTML("beforeend",
            `<p class="card-text">${this.department}</p>
            <p class="card-text text-end"><strong>$ ${this.salary}</strong></p>`
        );
    }//printInfo
    setEmail(email){
        let re = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
        this.email= (re.test(email))? email:"correo@dominio.com";
        
    }//setEmail
}//ClassEmployee

let empleados = new Array();

empleados.push( new Employee("Brian Osegurea", "brian@gmail.com", 21, "Java Developer FullStack", "Development", 355.20)); 
/* brian.name = "Brian Oseguera";
brian.email = "brian@gmail,com";
brian.age = 22;
brian.resume ="Java Developer FullStack"; */
//console.log(brian);
empleados.push( new Employee("Vero", "vero@gmail.com", 20, "Java Developer FullStack", "Development", 380.5));
empleados.push( new Employee("Karen Garcia", "kareng@mail.com", 20, "Java Developer FullStack", "QA", 380.5));

empleados[1].setEmail("vero2024yahoo.com");


empleados.forEach((empleado)=> empleado.printInfo(divPersonas));



/* brian.printInfo(divPersonas); //el divPersonas es lo que devinimos del lugar donde irá la información
vero.printInfo(divPersonas);
karen.printInfo(divPersonas); */

Person.printTotal(divPersonas);