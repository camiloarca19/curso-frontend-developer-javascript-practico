var navEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu')
var mobileMenu = document.querySelector('.mobile-menu')
var shopingCart = document.querySelector('.product-detail')
var imgShopingCart = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')

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
productList.push({
    name:'Camera',
    price: 200,
    image: "https://images.pexels.com/photos/17397815/pexels-photo-17397815/free-photo-of-camara-fotografia-vintage-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'writing machine',
    price: 50,
    image: "https://images.pexels.com/photos/4551315/pexels-photo-4551315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Disk player',
    price: 140,
    image: "https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'Camera',
    price: 200,
    image: "https://images.pexels.com/photos/17397815/pexels-photo-17397815/free-photo-of-camara-fotografia-vintage-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'writing machine',
    price: 50,
    image: "https://images.pexels.com/photos/4551315/pexels-photo-4551315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Disk player',
    price: 140,
    image: "https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

// <!-- <div class="product-card">
//                 <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//                 <div class="product-info">
//                   <div>
//                     <p>$120,00</p>
//                     <p>Bike</p>
//                   </div>
//                   <figure>
//                     <img src="./icons/bt_add_to_cart.svg" alt="">
//                   </figure>
//                 </div>
//             </div> -->

function renderProducts(arr){


    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src',product.image)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price + ",00"
        
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        
        const productInfoFigure = document.createElement('figure');
        const productInfoAdd = document.createElement('img')
        productInfoAdd.setAttribute('src','./icons/bt_add_to_cart.svg')
        
        productInfo.append(productInfoDiv,productInfoFigure)
        productInfoDiv.append(productPrice, productName)
    
        productCard.append(img, productInfo)
        productInfoFigure.appendChild(productInfoAdd)
    
        cardsContainer.append(productCard)
    }
}

renderProducts(productList)