const data =  {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
};

function getData(){
    return new Promise((resolve,reject) => {
        if(data==null){
            reject(new Error ("Data is null"));
        }//if
        setTimeout(() => {resolve(data)}, 3000)
    });
}//getData


async function fetchingData(){
    const res = await getData();
    console.log(res);
}//fetchingData

fetchingData()

// getData()
// .then((response)=>console.log("PromesaCumplida",response))
// .catch((err)=>console.log("Promesa rechazada", err.message));