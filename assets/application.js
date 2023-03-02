// slider
$('.reviews__items-mobile').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
  });
      
// mobile menu
const mobileMenuBtn = document.querySelectorAll(".header-mobile__menu div");
const popupMobile = document.querySelector(".popup-mobile");
const header = document.querySelectorAll(".header");
const cartIcon = document.querySelectorAll(".cart-button-icon path");
const cartLabel = document.querySelectorAll(".header-mobile__cart span");
const sideMenuBtn = document.querySelectorAll('.side-menu-button');
const sideMenuActiveBtn = document.querySelector('.side-menu-active-button');

mobileMenuBtn.forEach( item => {
  const headerMobileLogo = document.querySelectorAll(".header__logo-inner path");
  item.addEventListener('click', () => {
    popupMobile.classList.toggle("popup-mobile__active");
    header.forEach( item => {
      item.classList.toggle("header__popup-mobile-active");
    });
    headerMobileLogo.forEach( item => {
      item.classList.toggle("mobile-logo-active")
    });
    cartIcon.forEach( item => {
      item.classList.toggle("mobile-cart-logo-active")
    });
    cartLabel.forEach( item => {
      item.classList.toggle("mobile-cart-label-active")
    });
    document.body.classList.toggle("body_mobile-menu-active");
    sideMenuActiveBtn.classList.toggle("side-menu-button-hidden");
    console.log(sideMenuBtn)
    sideMenuBtn.forEach( item => {
      item.classList.toggle("side-menu-button-hidden");
    })
  })
})


// collection filter
const filterBtn = document.querySelectorAll(".filter__button");

filterBtn.forEach( item => {
  item.parentElement.addEventListener('click', () => {
    item.parentElement.nextElementSibling.classList.toggle('filter__checkbox-hidden');
    if(item.parentElement.nextElementSibling.classList.contains('filter__checkbox-hidden')){
      item.innerHTML = `<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="4.5" x2="9" y2="4.5" stroke="#6C7175"/>
                          <line x1="4.5" x2="4.5" y2="9" stroke="#6C7175"/>
                        </svg>
                        `
    } else{
      item.innerHTML = `<svg width="9" height="2" viewBox="0 0 9 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="9" y2="1" stroke="#6C7175"/>
                        </svg>`
    }
  })
})

// scroll down button
const scrollDownButton = document.querySelector('.scroll-down');

if(scrollDownButton){
  scrollDownButton.addEventListener('click', () => {
    window.scrollTo({ left: 0, top: (document.body.scrollHeight ), behavior: "smooth" });
  })
}



// product tabs
const allTabs = document.querySelectorAll('.product__tabs-titles li');
const tabContent = document.querySelectorAll(".product__tabs-content");

allTabs.forEach(function(el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  var btnTarget = el.currentTarget;
  var tabBtn = btnTarget.dataset.title;

  tabContent.forEach(function(el) {
    el.classList.remove("active");
  });

  allTabs.forEach(function(el) {
     el.classList.remove("product-tab-active");
  });

  document.querySelector("#" + tabBtn).classList.add("active");
  
  btnTarget.classList.add("product-tab-active");
}


//product video button
const videoPlayBtn = () => {
  if( document.querySelector('.video-play-button') ){
    const playBtn = document.querySelector('.video-play-button');
    const pauseBtn = playBtn.nextElementSibling;
    const video = playBtn.previousElementSibling;

    function playVideo (item) {
      item.addEventListener('click', () => {
        video.play();
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        setTimeout( () => {
          pauseBtn.classList.add('video-pause-button-enabled')
        }, 1500 )
      });
    }

    function pauseVideo (item) {
      item.addEventListener('click', () => {
        video.pause();
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
        pauseBtn.classList.remove('video-pause-button-enabled')
      });
    }

    playVideo(playBtn);
    pauseVideo(video);
    pauseVideo(pauseBtn);
  }
}

videoPlayBtn();

// collection filter
function collectionFilter(){
  const filterOpenBtn = document.querySelector('#filter-open-button');
  const filterCloseBtn = document.querySelector('#filter-close-button');
  const filterPopup = document.querySelector('.filter__popup');
  const filterOverlay = document.querySelector('.overlay');

  filterOpenBtn.addEventListener('click', () => {
    filterPopup.classList.add('active');
    document.body.classList.add('overflow-hidden');
    filterOverlay.classList.add('active');
  })

  function closeFilterPopup(item) {
    item.addEventListener('click', () => {
      filterPopup.classList.remove('active');
      document.body.classList.remove('overflow-hidden');
      filterOverlay.classList.remove('active');
    })
  }

  closeFilterPopup(filterOverlay);
  closeFilterPopup(filterCloseBtn);
}

if( document.querySelector('#filter-open-button') ){
  collectionFilter()
}


// product collection sorting
function collectionSorting() {
  Shopify.queryParams = {};

  if (location.search.length) {
    var params = location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
      var keyValue = params[i].split('=');

      if (keyValue.length) {
        Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
    }
  }

  // Update sort_by query parameter on select change
  document.querySelector('#sort-by').addEventListener('change', function(e) {
    var value = e.target.value;

    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
  });
}

if(  document.querySelector('#sort-by') ) {
  collectionSorting()
}



//cart counter
const quantityValue = document.querySelectorAll(".cart__counter-father input");
const fatherElement = document.querySelectorAll(".cart__counter-father");
const headerCartLabel = document.querySelector('.headerCartLabel');

function Counter(incrementButton, decrementButton, inputField){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }

    this.increment = function(){
        if(this.domRefs.inputField.value < 10){
            this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        } 
    }

    this.decrement = function(){
        if(this.domRefs.inputField.value > 1){
            this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        } 
    }

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this))
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this))
}
fatherElement.forEach(item => {
    let decrementButtons = item.firstElementChild;
    var quantityValue = item.firstElementChild.nextElementSibling;
    let incrementButtons = item.lastElementChild;
    
    let counter1 = new Counter(incrementButtons, decrementButtons, quantityValue)
})


//product slider
const productImagesSm = document.querySelectorAll('.product__image-sm');
const productBigImage = document.querySelector('.product__image-big');

productImagesSm.forEach(pic => {
  pic.addEventListener('click', () => {
    productBigImage.setAttribute("src", `${pic.getAttribute('src')}`); 
  })
});

//footer email subscribtion completed

const footerInput = document.querySelector('#Contact_footer-email');

if(window.location.href.includes('?customer_posted=true#Contact_footer')){
  footerInput.classList.add('active');
}

//product variants
const productRadio = document.querySelectorAll('.product_variants input');
const productSelect = document.querySelector('#productSelect');
const variantPrice = document.querySelectorAll('.product__price span');

function selectProductVariant(btns) {
  btns.forEach(item => {
    item.addEventListener('click', () => {
      productSelect.value = item.value
    })
  })
}

if(productRadio){
  selectProductVariant(productRadio);
  productRadio[0].checked = true;
}

productRadio.forEach(radio => {
  const variantImg = document.getElementsByName(`${radio.value}`)[0];

  if(radio.checked){
      variantPrice.forEach(price => {
        const priceId = price.getAttribute('variant-price');
        
        if(priceId == radio.value){
          price.classList.add('active')
        }
      });
  }

  radio.nextElementSibling.addEventListener('click', () => {
    productBigImage.setAttribute("src", `${variantImg.getAttribute('src')}`);

    variantPrice.forEach( price => {
      const priceId = price.getAttribute('variant-price');
      
      if( priceId == radio.value ){
        price.classList.add('active')
      } else{
        price.classList.remove('active')
      }
    })
  })
  
})