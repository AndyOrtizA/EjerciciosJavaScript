const itemsContainer = document.querySelector("#list-items");

function addItem(item) {

    
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.pantone_value + '</p>\n' +
        '        <div style="background:' + item.color + ';">' + item.color + '</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';


    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);

  
}//addItem




// after fetching the colors, call addItem with each color
function fetchColorsList() {

    const promesa = fetch ("https://reqres.in/api/unknown", {method : "GET"})
    promesa.then(response=>{
        response.json().then(data=>{
            console.log(data.data)
            data.data.forEach(element => {
                addItem(element)
            });
            localStorage.setItem('colors', JSON.stringify(data.data));
        })
        .catch(
            (error) => {console.log("promesa con el json" + error);}
        );

    })
    


}//fetchColorsList



function loadColorsFromStorage() {
    if (this.localStorage.getItem("colors")!= null){
        colors = JSON.parse(this.localStorage.getItem("colors"));
        colors.forEach(element => {
            addItem(element);
        });
    }
    
}//loadColorsFromStorage



window.addEventListener("load", function (event) {
    event.preventDefault();
    console.log("se cargo");
    loadColorsFromStorage();
})
let btnClear = `<button id="btnClear">Limpiar Colores</button>` 
let btnLoad = `<button id="btnLoad">Cargar Colores</button>`

itemsContainer.insertAdjacentHTML("beforeBegin", btnClear);
itemsContainer.insertAdjacentHTML("beforeBegin", btnLoad);

let clear = document.getElementById("btnClear");
let load = document.getElementById("btnLoad")


load.addEventListener("click", function (event) {
    event.preventDefault();
    itemsContainer.innerHTML='';
    fetchColorsList();    
})

clear.addEventListener("click", function (event) {
    event.preventDefault();
    itemsContainer.innerHTML='';

    localStorage.removeItem('colors');
})

