// slider
$('.reviews__items-mobile').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    dots: true,
  });
      
// mobile menu
const mobileMenuBtn = document.querySelector(".header-mobile__menu svg");
const popupMobile = document.querySelector(".popup-mobile");

mobileMenuBtn.addEventListener('click', () => {
    popupMobile.classList.toggle("popup-mobile__active")
})