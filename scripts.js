var emailNav = document.querySelector(".navbar-email");
var accMenu = document.querySelector(".desktop-menu");

var menuMob = document.querySelector(".menu");
var mobMenu = document.querySelector(".mobile-menu");

var cart = document.querySelector(".navbar-shopping-cart");
var shoppingCartContainer = document.querySelector("#shoppingCartContainer");

var cardsContainer = document.querySelector(".cards-container");

var closeDetailCard=document.querySelector('.product-detail-close')
closeDetailCard.addEventListener('click',unactiveProductDetail)


emailNav.addEventListener("click", toggleMenu);
function toggleMenu() {
  productDetail.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  accMenu.classList.toggle("inactive");
}

menuMob.addEventListener("click", toggleMenuMob);
function toggleMenuMob() {
  productDetail.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobMenu.classList.toggle("inactive");
}

cart.addEventListener("click", toggleCart);
function toggleCart() {
  productDetail.classList.add("inactive");
  mobMenu.classList.add("inactive");
  accMenu.classList.add("inactive");
  shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 220,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Computadora",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click',activeProductDetail)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    const figure = document.createElement("figure");
    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    figure.appendChild(imgCard);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

var productDetail = document.querySelector("#productDetail");
var productsElement = document.querySelectorAll(".product-card");

// for (productElement of productsElement) {
//     console.log(productElement);
//   productElement.addEventListener("click", toggleProductDetail);
// }
function unactiveProductDetail(){
    productDetail.classList.add("inactive");
}
function activeProductDetail() {
  mobMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  accMenu.classList.add("inactive");
  productDetail.classList.remove("inactive");

}
