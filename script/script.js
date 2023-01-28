


// SWIPER

const swiperReview = new Swiper('.review-swiper', {
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


const swiperGrid = new Swiper('.grid__swiper', {
    slidesPerView: 1,
    centeredSlides: true,

    spaceBetween: 20,
    autoHeight: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        
        720: {
            slidesPerView: 2,
            centeredSlides: true,

            spaceBetween: 50,
            autoHeight: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },

    }
    
});


