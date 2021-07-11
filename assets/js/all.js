"use strict";

;

(function () {
  var header_cart_list = document.querySelector('#header-cart-list');
  var cart = document.querySelector('#cart');
  var cart_CoverBg = document.querySelector('.cart-cover-bg');
  cart.addEventListener('click', function () {
    header_cart_list.classList.toggle('d-block');
    cart_CoverBg.classList.toggle('d-block');
  });
})();
//# sourceMappingURL=all.js.map
