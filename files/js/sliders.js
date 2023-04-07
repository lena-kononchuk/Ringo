// works section swiper
const swiper = new Swiper('.works-page__slider', {
   loop: false,
   speed: 500,
   autoplay: {
      delay: 3000,
   },
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 0,
      slideShadows: false,
   },
   initialSlide: 3,

   // Optional parameters
   centeredSlides: true,
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar

   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 40,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1000: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
      1440: {
         slidesPerView: 2,
         spaceBetween: 40,
      },
   },
});

