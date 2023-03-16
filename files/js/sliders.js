// works section swiper
let swiper1 = new Swiper('.works-page__slider', {
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // Optional parameters



   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },


   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
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
});
