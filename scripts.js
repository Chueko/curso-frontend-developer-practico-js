var emailNav=document.querySelector(".navbar-email");

var accMenu=document.querySelector(".desktop-menu");

emailNav.addEventListener('click',toggleMenu);

function toggleMenu(){
    accMenu.classList.toggle('inactive')
}