var navEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menu = document.querySelector('.menu')
var mobileMenu = document.querySelector('.mobile-menu')
var shopingCart = document.querySelector('.product-detail')
var ordenContent = shopingCart.querySelector('.my-order-content-items')
var imgShopingCart = document.querySelector('.navbar-shopping-cart')
var totalOrder = document.querySelector('.total-order')
const cardsContainer = document.querySelector('.cards-container')
const productInfoAside = document.querySelector('.product-info-aside')
const closeInfoAside = document.querySelector('.product-info-aside .circle-close')
const imgAside = productInfoAside.querySelector('.image-container>img')
const asidePrice = productInfoAside.querySelector('.text-container .title')
const asideTitle = productInfoAside.querySelector('.text-container .subtitle')
const asideDescription = productInfoAside.querySelector('.text-container .product-info-text')
const asideButton = document.querySelector('.add-to-cart-button')
const MyAccount = document.querySelector('#my-account')
const MyAccount2 = document.querySelector('#my-account2')
const ventanaMyAccount = document.querySelector('.My-account')
const closeArrowShopingCart = document.querySelector('.product-detail .title-container img')
closeArrowShopingCart.addEventListener('click',toogleShopingCart)
const discountCode = document.querySelector('#discount');
var formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir la recarga de la página
  // Aquí puedes agregar el código para manejar el envío del formulario o cualquier acción que desees realizar
});
var descuento = 0;
discountCode.addEventListener('change',function(){
  descuento = Number(discountCode.value)
  totalOrder.innerText = "$"+ totalPrice*(1 - (descuento/100)) +".00"
})

var asideImgLink = ''
var priceAside = 0
var titleAside = ''
closeInfoAside.addEventListener('click',closeInfoAsideArrow)
MyAccount.addEventListener('click',habilitarMyaccount)
MyAccount2.addEventListener('click',habilitarMyaccount)
navEmail.addEventListener('click',toogleDesktopMenu);
menu.addEventListener('click',toogleMobileMenu);
imgShopingCart.addEventListener('click', toogleShopingCart)
var totalPrice = 0;
var productCount = 0;
const navBarCount = document.querySelector('.navbar-shopping-cart>div');
navBarCount.innerText = productCount

asideButton.addEventListener('click',addToCartButton)

function habilitarMyaccount(){
    ventanaMyAccount.classList.remove('inactive')
    if (!(desktopMenu.classList.contains('inactive'))){
        desktopMenu.classList.add('inactive')
    }
    if (!(mobileMenu.classList.contains('inactive'))){
        mobileMenu.classList.add('inactive')
    }
}

const padre = document.getElementById('mi-padre');
    const hijo = document.getElementById('mi-hijo');

    // Agrega un evento de escucha de clics en el elemento hijo
    hijo.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que el clic se propague al elemento padre
    });

    // Agrega un evento de captura para clics en todo el documento
    document.addEventListener('click', function(event) {
        // Comprueba si el clic ocurrió dentro del elemento hijo
        if (hijo.contains(event.target)) {
            // El clic ocurrió dentro del elemento hijo, así que no hacemos nada
            return;
        }

        // El clic ocurrió fuera del elemento hijo, así que cerramos el elemento padre
        padre.classList.add('inactive'); // Oculta el elemento padre (puedes ajustar esto según tus necesidades)
    }, true);

function closeInfoAsideArrow(){
    productInfoAside.classList.add('inactive')
}

function toogleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
if (!(shopingCart.classList.contains('inactive'))){
    shopingCart.classList.add('inactive')
}
if (!(productInfoAside.classList.contains('inactive'))){
    productInfoAside.classList.add('inactive');
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
  },
  {
    name: "Chairs",
    price: 45,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Elevate your home decor with these stylish and comfortable chairs. Crafted with high-quality materials, these chairs offer both elegance and durability. Perfect for dining rooms, living rooms, or home offices.",
  },
  {
    name: "Polaroid",
    price: 115,
    image:
      "https://images.pexels.com/photos/14906973/pexels-photo-14906973.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Capture your precious moments in an instant with this classic Polaroid camera. Its vintage design and modern technology make it a perfect companion for parties, travels, and special occasions. Share memories, create art, and have fun with this amazing camera.",
  },
  {
    name: "Cassette",
    price: 14,
    image:
      "https://images.pexels.com/photos/1228497/pexels-photo-1228497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Rediscover the joy of music with these nostalgic cassette tapes. Compatible with vintage cassette players and modern tape-to-digital converters, these cassettes allow you to enjoy the warm sound of analog music. Perfect for music enthusiasts and collectors.",
  },
  {
    name: "Music Player",
    price: 185,
    image:
      "https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Immerse yourself in the world of music with this advanced music player. Its high-resolution display and superior audio quality deliver a premium listening experience. Carry your entire music library wherever you go and enjoy hours of uninterrupted melodies.",
  },
  {
    name: "Travel Items",
    price: 55,
    image:
      "https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Travel in style and convenience with this essential set of travel items. It includes a sleek travel backpack, a handy travel pillow, and a stylish passport holder. Stay organized and comfortable during your adventures around the world.",
  },
  {
    name: "Car",
    price: 31999,
    image:
      "https://images.pexels.com/photos/1209774/pexels-photo-1209774.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Experience the thrill of the open road with this luxurious and powerful car. Its stunning design, cutting-edge technology, and smooth performance make it the perfect choice for car enthusiasts and those seeking unparalleled driving experiences.",
  },
  {
    name: "Jeans",
    price: 35,
    image:
      "https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Upgrade your wardrobe with these trendy and comfortable jeans. Made from premium denim, these jeans offer a perfect fit and timeless style. Whether you dress them up or down, they will be your go-to choice for any casual occasion.",
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

function addToCartButton(){
    agregarProducto(asideImgLink,titleAside,priceAside)
}

function openProductDetalAside(link,price,title,description){
    productInfoAside.classList.remove('inactive')
    imgAside.setAttribute('src',link);
    asidePrice.innerText = "$"+price +",00"
    asideTitle.innerText = title;
    asideDescription.innerText = description
    asideImgLink = link
    priceAside = price
    titleAside = title
    
    
    
    if (!(shopingCart.classList.contains('inactive'))){
        shopingCart.classList.add('inactive');
    }
    if (!(desktopMenu.classList.contains('inactive'))){
        desktopMenu.classList.add('inactive');
    }
}
function removeProduct(){
    const padre = this.parentNode;
    productCount --
    navBarCount.innerText = productCount
    const price2 = this.getAttribute('price')
    if (descuento ==0){
      totalPrice -= price2
      totalOrder.innerText = "$"+ totalPrice +".00"}
      else{
        totalPrice -= price2
      totalOrder.innerText = "$"+ totalPrice*(1 - (descuento/100)) +".00"}
    
    padre.remove();
}

function agregarProducto(imagen,nombre,precio){
    console.log(imagen, nombre,precio )
    const productAdd = document.createElement('div');
    productAdd.classList.add('shopping-cart');

    const figure = document.createElement('figure')
    const img = document.createElement('img')
    img.setAttribute('src',imagen)
    figure.appendChild(img);
    const productTitle = document.createElement('p')
    productTitle.innerText= nombre
    const productPrice = document.createElement('p')
    productPrice.innerText = "$" + precio +".00"
    const imgClose = document.createElement('img')
    imgClose.setAttribute('src',"./icons/icon_close.png")
    imgClose.addEventListener('click',removeProduct)
    imgClose.setAttribute('price',precio)

    productAdd.append(figure,productTitle,productPrice,imgClose)
    ordenContent.append(productAdd)
    productCount ++
    navBarCount.innerText = productCount
    if (descuento ==0){
    totalPrice += precio
    totalOrder.innerText = "$"+ totalPrice +".00"}
    else{
      totalPrice += precio
    totalOrder.innerText = "$"+ totalPrice*(1 - (descuento/100)) +".00"}
    
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
        productInfoFigure.addEventListener('click',agregarProducto.bind(null,product.image,product.name,product.price))
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