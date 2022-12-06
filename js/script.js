var swiper = new Swiper(".parceiros", {
  slidesPerView: 4,
  spaceBetween: 50,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".parceiros .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".parceiros .swiper-button-next",
    prevEl: ".parceiros .swiper-button-prev",
  },
});

var swiper = new Swiper(".antesDepois", {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".animalGaleria", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".animalGaleria .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".animalGaleria .swiper-button-next",
    prevEl: ".animalGaleria .swiper-button-prev",
  },
});
