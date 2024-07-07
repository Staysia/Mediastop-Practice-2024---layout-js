const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".js-arrow-next",
      prevEl: ".js-arrow-prev",
    },
    centerMode: true
  });
 
  if (window.matchMedia('(max-width: 1250px)').matches) {
    cardsSwiper.params.slidesPerView = 1;
  } 

