var emailNav=document.querySelector(".navbar-email");

var accMenu=document.querySelector(".desktop-menu");

emailNav.addEventListener('click',toggleMenu);

function toggleMenu(){
    accMenu.classList.toggle('inactive')
}

var menuMob=document.querySelector(".menu");

var mobMenu=document.querySelector(".mobile-menu");
menuMob.addEventListener('click',toggleMenuMob);

function toggleMenuMob(){
    mobMenu.classList.toggle('inactive')
}
