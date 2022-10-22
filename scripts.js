var emailNav = document.querySelector(".navbar-email");
var accMenu = document.querySelector(".desktop-menu");

var menuMob = document.querySelector(".menu");
var mobMenu = document.querySelector(".mobile-menu");

var cart = document.querySelector(".navbar-shopping-cart");
var cartMenu = document.querySelector(".product-detail");

var cardsContainer = document.querySelector(".cards-container");

emailNav.addEventListener("click", toggleMenu);
function toggleMenu() {
  cartMenu.classList.add("inactive");
  accMenu.classList.toggle("inactive");
}

menuMob.addEventListener("click", toggleMenuMob);
function toggleMenuMob() {
  cartMenu.classList.add("inactive");
  mobMenu.classList.toggle("inactive");
}

cart.addEventListener("click", toggleCart);
function toggleCart() {
  mobMenu.classList.add("inactive");
  accMenu.classList.add("inactive");
  cartMenu.classList.toggle("inactive");
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

    const img = document.createElement("img");
    img.setAttribute("src", product.image);

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

    productCard.appendChild(img);
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
