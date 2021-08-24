const popularProductsBox = document.getElementById("popularProductsBox");
const imageContainer = document.getElementById("imageContainer");


function Product (name, photoUrl, prize,){
    this.name = name;
    this.photo = photoUrl;
    this.prize = prize;
}

let product1 = new Product("Arreglo jarro con fresas", "imgs/producto1.png", 7.99);
let product2 = new Product("Casita de Chocolate", "imgs/producto2.png", 7.99);
let product3 = new Product("Ramo de Fresas", "imgs/producto3.png", 12.99);
let product4 = new Product("Arreglo frutal con Heineken", "imgs/producto4.png", 11.99);
let product5 = new Product("Arreglo en Canasta", "imgs/producto5.png", 24.99);
let product6 = new Product("Regalo para Cumpleaños", "imgs/producto6.png", 14.99);
let product7 = new Product("Cumpleaños de Fresas y Piña", "imgs/producto7.png", 11.99);
let product8 = new Product("Regalo Frutal para Papá", "imgs/producto8.png", 17.99);
let product9 = new Product("Fresas y Masmellos", "imgs/producto9.png", 11.99);
let product10 = new Product("Caja de Corazón con Fresas y Uvillas", "imgs/producto10.png", 10.99);
let product12 = new Product("Regalo de Fresas Cuadrado", "imgs/producto12.png", 19.99);
let product13 = new Product("Marco de Chocolate con Ositos", "imgs/producto13.png", 7.99);
let product14 = new Product("Arreglo Frutal de Corazón especial", "imgs/producto14.png", 11.99);
let product15 = new Product("Canasta de Fresas", "imgs/producto15.png", 11.99);
let product17 = new Product("Pirámide de Fresas", "imgs/producto17.png", 11.99);
let product18 = new Product("Especial de Fresas", "imgs/producto18.png", 11.99);
let product19 = new Product("Arreglo de Fresas para Mamá", "imgs/producto19.png", 14.99);
let product20 = new Product("Arreglo con Rosas para Papá", "imgs/producto20.png", 19.99);
let product22 = new Product("Arreglo Torre de Fresas", "imgs/producto22.png", 14.99);
let product23 = new Product("Arreglo con Lazo", "imgs/producto23.png", 17.99);
let product24 = new Product("Arreglo Enamorados", "imgs/producto24.png", 9.99);
let product25 = new Product("Arreglo 25", "imgs/producto25.jpg", 27.99);
let product26 = new Product("Arreglo 26", "imgs/producto26.jpg", 9.99);
let product27 = new Product("Arreglo 27", "imgs/producto27.jpg", 9.99);
let product28 = new Product("Ajedrez de Chocolate", "imgs/producto28.jpg", 9.99);
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
                product12,product13,
                product14,product15,
                product17,product18,product19,
                product20,product22,
                product23,product24,product28]

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
    linkButton.setAttribute("href",`https://api.whatsapp.com/send?phone=593978778213&text=Quisiera%20comprar%20${itemproduct.name}%0A${itemproduct.prize}%0Alo%20necesito%20para%20el%20d%C3%ADa...%0Ami%20direcci%C3%B3n%20es...`);
    linkButton.setAttribute("target", "_blank");
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



