const popularProductsBox = document.getElementById("popularProductsBox");
const imageContainer = document.getElementById("imageContainer");


function Product (name, photoUrl, prize,){
    this.name = name;
    this.photo = photoUrl;
    this.prize = prize;
}

let product1 = new Product("Arreglo jarro con fresas", "imgs/producto1.png", 9.99);
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
let product21 = new Product("Arreglo 21", "imgs/producto21.png", 9.99);
let product22 = new Product("Arreglo 22", "imgs/producto22.png", 11.59);
let product23 = new Product("Arreglo 23", "imgs/producto23.png", 9.99);
let product24 = new Product("Arreglo 24", "imgs/producto24.png", 9.99);
let product25 = new Product("Arreglo 25", "imgs/producto25.jpg", 9.99);
let product26 = new Product("Arreglo 26", "imgs/producto26.jpg", 9.99);
let product27 = new Product("Arreglo 27", "imgs/producto27.jpg", 9.99);
let product28 = new Product("Arreglo 28", "imgs/producto28.jpg", 9.99);
let product29 = new Product("Arreglo 29", "imgs/producto29.jpg", 9.99);
let product30 = new Product("Arreglo 30", "imgs/producto30.jpg", 9.99);
let product31 = new Product("Arreglo 31", "imgs/producto31.jpg", 9.99);
let product32 = new Product("Arreglo 32", "imgs/producto32.jpg", 9.99);
let product33 = new Product("Arreglo 33", "imgs/producto33.jpg", 9.99);
let product34 = new Product("Arreglo 34", "imgs/producto34.jpg", 9.99);
let product35 = new Product("Arreglo 35", "imgs/producto35.jpg", 9.99);
let product36 = new Product("Arreglo 36", "imgs/producto36.jpg", 9.99);
let product37 = new Product("Arreglo 37", "imgs/producto37.jpg", 9.99);
let product38 = new Product("Arreglo 38", "imgs/producto38.jpg", 9.99);
let product39 = new Product("Arreglo 39", "imgs/producto39.jpg", 9.99);
let product40 = new Product("Arreglo 40", "imgs/producto40.jpg", 9.99);



let products = [product1,product2,product3,
                product4,product5,product6,product7,
                product8,product9,product10,
                product11,product12,product13,
                product14,product15,product16,
                product17,product18,product19,
                product20,product21,product22,
                product23,product24,product25,
                product26,product27,product28,
                product29]

let fragment = document.createDocumentFragment();






for (const itemproduct of products ){
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class","cards");
    
    const productImage = document.createElement("img");
    productImage.setAttribute("src", itemproduct.photo)
    const productName = document.createElement("p");
    productName.textContent = itemproduct.name;
    productName.setAttribute("class","productName");
    const productPrize = document.createElement("p");
    productPrize.textContent = `$${itemproduct.prize}`;
    productPrize.setAttribute("class","productPrize");
    const linkButton = document.createElement("a");
    linkButton.setAttribute("href",`https://${itemproduct.name}.com`);

    const textButton = document.createElement("p");
    textButton.textContent = "Comprar por Whatsapp";

    const linkContainer = document.createElement("div");
    linkContainer.setAttribute("class","buttonContainer");
    
    


    productContainer.appendChild(productName);
    productContainer.appendChild(productImage);    
    productContainer.appendChild(productPrize);
    linkButton.appendChild(linkContainer);
    linkContainer.appendChild(textButton);
    productContainer.appendChild(linkButton);
    fragment.appendChild(productContainer);
}

popularProductsBox.appendChild(fragment)



