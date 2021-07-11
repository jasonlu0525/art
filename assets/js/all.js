"use strict";

;

(function () {
  var header_cart_list = document.querySelector('#header-cart-list');
  var cart = document.querySelector('#cart');
  var cart_CoverBg = document.querySelector('.cart-cover-bg');
  console.log(header_cart_list);
  console.log(cart);
  cart.addEventListener('click', function () {
    header_cart_list.classList.toggle('d-block');
    cart_CoverBg.classList.toggle('d-block');
  });
})();
//# sourceMappingURL=all.js.map
