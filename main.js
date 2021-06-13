const popularProductsBox = document.getElementById("popularProductsBox");
const imageContainer = document.getElementById("imageContainer");


function Product (name, photoUrl, prize,){
    this.name = name;
    this.photo = photoUrl;
    this.prize = prize;
}

let product1 = new Product("Arreglo 1", "imgs/producto1.png", 9.99);
let product2 = new Product("Arreglo 2", "imgs/producto2.png", 11.59);
let product3 = new Product("Arreglo 3", "imgs/producto3.png", 9.99);
let product4 = new Product("Arreglo 4", "imgs/producto4.png", 9.99);
let product5 = new Product("Arreglo 5", "imgs/producto5.png", 9.99);
let product6 = new Product("Arreglo 6", "imgs/producto6.png", 9.99);
let product7 = new Product("Arreglo 7", "imgs/producto7.png", 9.99);
let product8 = new Product("Arreglo 8", "imgs/producto8.png", 9.99);
let product9 = new Product("Arreglo 9", "imgs/producto9.png", 9.99);
let product10 = new Product("Arreglo 10", "imgs/producto10.png", 9.99);
let product11 = new Product("Arreglo 11", "imgs/producto11.png", 9.99);
let product12 = new Product("Arreglo 12", "imgs/producto12.png", 9.99);
let product13 = new Product("Arreglo 13", "imgs/producto13.png", 9.99);
let product14 = new Product("Arreglo 14", "imgs/producto14.png", 9.99);
let product15 = new Product("Arreglo 15", "imgs/producto15.png", 9.99);
let product16 = new Product("Arreglo 16", "imgs/producto16.png", 9.99);
let product17 = new Product("Arreglo 17", "imgs/producto17.png", 9.99);
let product18 = new Product("Arreglo 18", "imgs/producto18.png", 9.99);
let product19 = new Product("Arreglo 19", "imgs/producto19.png", 9.99);
let product20 = new Product("Arreglo 20", "imgs/producto20.png", 9.99);

let products = [product1,product2,product3]

let fragment = document.createDocumentFragment();

for (const itemproduct of products ){
    var tittles = document.createElement("p");
    tittles.textContent = itemproduct.name;
    fragment.appendChild(tittles);

    var imageCont = document.createElement("div");
    imageCont.setAttribute( 'id' , `product${itemproduct.name}`);
    fragment.appendChild(imageCont);
}

popularProductsBox.appendChild(fragment);

for (const cardImages of products){
    var img = new Image;
    img.src = cardImages.photo;

    var src = document.getElementById(`product${cardImages.name}`);
    src.appendChild(img);
}






/*for (const itemproduct of products ){
    
    var img = new Image;
    img.src = itemproduct.photo;
    popularProductsBox.innerHTML += `
    <div class="card" id="product${itemproduct.name}">
        <p>${itemproduct.name}</p>
        <div></div>
        <p>${itemproduct.prize}</p>
    </div>`
    var src = document.getElementById(`product${itemproduct.name}`);
    src.appendChild(img);
}*/
