var navEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu')
var mobileMenu = document.querySelector('.mobile-menu')
var shopingCart = document.querySelector('.product-detail')
var imgShopingCart = document.querySelector('.navbar-shopping-cart')
const cardsContainer = document.querySelector('.cards-container')
const productInfoAside = document.querySelector('.product-info-aside')
const closeInfoAside = document.querySelector('.product-info-aside .circle-close')
const imgAside = productInfoAside.querySelector('.image-container>img')
const asidePrice = productInfoAside.querySelector('.text-container .title')
const asideTitle = productInfoAside.querySelector('.text-container .subtitle')
const asideDescription = productInfoAside.querySelector('.text-container .product-info-text')
closeInfoAside.addEventListener('click',closeInfoAsideArrow)
navEmail.addEventListener('click',toogleDesktopMenu);
menu.addEventListener('click',toogleMobileMenu);
imgShopingCart.addEventListener('click', toogleShopingCart)



function closeInfoAsideArrow(){
    productInfoAside.classList.add('inactive')
}

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
    if (!(productInfoAside.classList.contains('inactive'))){
        productInfoAside.classList.add('inactive');
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
    if (!(productInfoAside.classList.contains('inactive'))){
        productInfoAside.classList.add('inactive');
    }
}

const productList = [{
    name: "Vintage Bike",
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Experience the joy of riding with our Vintage Bike. This classic two-wheeler takes you back in time, evoking the nostalgia of carefree days. Its timeless design and sturdy build ensure a smooth and comfortable ride. Whether you're cruising through the city streets or exploring scenic countryside routes, our Vintage Bike promises an unforgettable journey in style.",
  },
  {
    name: "Classic Camera",
    price: 500,
    image: "https://images.pexels.com/photos/17397815/pexels-photo-17397815/free-photo-of-camara-fotografia-vintage-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Capture life's most cherished moments with our Classic Camera. Inspired by the golden era of photography, this vintage gem combines timeless aesthetics with modern functionality. Its premium lens and reliable mechanics deliver stunning, high-quality images that stand the test of time. From family gatherings to breathtaking landscapes, our Classic Camera will be your loyal companion, preserving memories for generations to come.",
  },
  {
    name: "Antique Writing Machine",
    price: 150,
    image: "https://images.pexels.com/photos/4551315/pexels-photo-4551315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Unleash your creativity with the Antique Writing Machine. A treasure from the past, this typewriter brings back the charm of manual writing. The satisfying clicks of the keys and the distinct typeface evoke a sense of craftsmanship rarely found in today's digital age. Whether you're an aspiring novelist, a poet, or simply enjoy the art of letter-writing, the Antique Writing Machine will inspire and delight you in every stroke.",
  },
  {
    name: "Retro Disk Player",
    price: 200,
    image: "https://images.pexels.com/photos/775414/pexels-photo-775414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Immerse yourself in the golden era of music with our Retro Disk Player. This vintage beauty allows you to play your cherished vinyl records, bringing back the warm analog sound that audiophiles adore. Its elegant design and high-fidelity audio output make it a centerpiece of any retro-loving music enthusiast's collection. Whether you're rediscovering classic albums or starting a new vinyl journey, the Retro Disk Player promises an unparalleled sonic experience.",
  },{
    name: "Gaming Console",
    price: 400,
    image: "https://images.pexels.com/photos/4511372/pexels-photo-4511372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Dive into the immersive world of gaming with our state-of-the-art Gaming Console. Equipped with the latest technology and powerful graphics, this console delivers an extraordinary gaming experience like never before. From action-packed adventures to breathtaking sports simulations, our Gaming Console brings your favorite games to life in stunning detail and realism. Join the gaming revolution and embark on unforgettable virtual journeys with our Gaming Console.",
  },{
    name: "Antique Scooter",
    price: 250,
    image: "https://images.pexels.com/photos/690816/pexels-photo-690816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Ride back in time with our Antique Scooter. This classic two-wheeler brings the spirit of a bygone era, offering a unique and stylish way to explore your surroundings. Its vintage design, complete with retro curves and details, is sure to turn heads as you cruise through the streets. The Antique Scooter's reliable engine and comfortable ride make it a joy to drive, whether you're commuting or simply enjoying leisurely rides. Embrace the charm of yesteryears and create unforgettable memories with this timeless gem.",
  },{
    name: "Classic Camera",
    price: 300,
    image: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Capture life's most cherished moments with our Classic Camera. Inspired by the golden era of photography, this vintage gem combines timeless aesthetics with modern functionality. Its premium lens and reliable mechanics deliver stunning, high-quality images that stand the test of time. Whether you're a professional photographer or an amateur enthusiast, our Classic Camera will be your reliable companion, preserving memories for generations to come.",
  },
  {
    name: "Retro Phone",
    price: 150,
    image: "https://images.pexels.com/photos/209716/pexels-photo-209716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Step back in time with our Retro Phone. This vintage-inspired device pays homage to the iconic telephones of yesteryears. With its classic rotary dial and sturdy build, the Retro Phone adds a touch of nostalgia to your modern communication. Use it as a decorative piece or experience the joy of traditional conversations with this fully functional and elegantly designed phone. Our Retro Phone is a perfect blend of retro charm and practicality, making it a delightful addition to any vintage enthusiast's collection.",
  },];


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

function openProductDetalAside(link,price,title,description){
    productInfoAside.classList.remove('inactive')
    imgAside.setAttribute('src',link);
    asidePrice.innerText = "$"+price +",00"
    asideTitle.innerText = title;
    asideDescription.innerText = description
    
    
    if (!(shopingCart.classList.contains('inactive'))){
        shopingCart.classList.add('inactive');
    }
}
function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const img = document.createElement('img');
        img.setAttribute('src',product.image)
        img.addEventListener('click',openProductDetalAside.bind(null,product.image,product.price,product.name, product.description))
        
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