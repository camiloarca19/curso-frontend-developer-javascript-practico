var navEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}