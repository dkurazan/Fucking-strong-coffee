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
const headerMobileLogo = document.querySelectorAll(".header-mobile-logo path");
const cartIcon = document.querySelectorAll(".cart-button-icon path");
const cartLabel = document.querySelectorAll(".header-mobile__cart span");
const sideMenuBtn = document.querySelectorAll('.side-menu-button');
const sideMenuActiveBtn = document.querySelector('.side-menu-active-button');

mobileMenuBtn.forEach( item => {
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
