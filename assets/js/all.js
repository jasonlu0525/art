"use strict";

;

(function () {
  var header_cart_list = document.querySelector('#header-cart-list');
  var cart = document.querySelector('#cart');
  var cart_CoverBg = document.querySelector('.cart-cover-bg');
  var swiper = new Swiper('.guesee', {
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  cart.addEventListener('click', function () {
    header_cart_list.classList.toggle('d-block');
    cart_CoverBg.classList.toggle('d-block');
  });
})();
//# sourceMappingURL=all.js.map
