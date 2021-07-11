;
(function () {
  let header_cart_list = document.querySelector('#header-cart-list');
  let cart = document.querySelector('#cart');
  let cart_CoverBg = document.querySelector('.cart-cover-bg');
  cart.addEventListener('click', function () {

    header_cart_list.classList.toggle('d-block');
    cart_CoverBg.classList.toggle('d-block');
  });

})();