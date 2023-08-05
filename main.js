var navEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu')
var mobileMenu = document.querySelector('.mobile-menu')
var shopingCart = document.querySelector('.product-detail')
var imgShopingCart = document.querySelector('.navbar-shopping-cart')

navEmail.addEventListener('click',toogleDesktopMenu);
menu.addEventListener('click',toogleMobileMenu);
imgShopingCart.addEventListener('click', toogleShopingCart)

function toogleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
if (!(shopingCart.classList.contains('inactive'))){
    shopingCart.classList.add('inactive')
}}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    if (!(shopingCart.classList.contains('inactive'))){
        shopingCart.classList.add('inactive')
    }
    
}
function toogleShopingCart(){
    shopingCart.classList.toggle('inactive')

    if (!(mobileMenu.classList.contains('inactive'))){
        mobileMenu.classList.add('inactive');
    }
    if (!(desktopMenu.classList.contains('inactive'))){
        desktopMenu.classList.add('inactive');
    }
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})