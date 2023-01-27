


// SWIPER

const swiperReview = new Swiper('.review__swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {

    768: {
        slidesPerView: 1,
    },

  }
});