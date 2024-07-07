const cardsSwiper = new Swiper(".js-swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".js-arrow-prev",
      prevEl: ".js-arrow-next",
    },
    centerMode: true
  });