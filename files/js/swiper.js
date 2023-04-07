let swiper2 = new Swiper('.partners-body__slider', {
   effect: 'slider',
   autoplay: {
      delay: 3000,
   },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 15,
      },
      640: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      992: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
});