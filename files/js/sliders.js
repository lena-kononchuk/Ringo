// works section swiper
const swiper1 = new Swiper('.works-page__slider', {
   loop: false,
   speed: 500,
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


// partners section swiper
let swiper2 = new Swiper('.partners-page__slider', {
   slidesPerView: 2,
   spaceBetween: 10,
   // Navigation arrows
   // Optional parameters



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
      1000: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
      1440: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
});
