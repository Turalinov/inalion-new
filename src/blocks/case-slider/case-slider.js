import Swiper from 'swiper/bundle';

export default function caseSlider() {

  document.querySelectorAll('.case-slider').forEach(item => {


  const caseSwiper = new Swiper(item, {
    // Optional parameters
    // loop: false,
    // grabCursor: true,
     allowTouchMove: false,
    // spaceBetween: 34,
    // autoHeight: true,
    // slidesPerView: 3, //сколкько видны
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true
    // },

    // Navigation arrows
    navigation: {
      nextEl: item.querySelector('.case-slider-button-next'),
      prevEl: item.querySelector('.case-slider-button-prev'),
    },

    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    //   formatFractionCurrent: addZero,
    //   formatFractionTotal: addZero
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        // spaceBetween: 34
      },
      // when window width is >= 768
      // 768: {
      //   slidesPerView: 3,
      //   spaceBetween: 34
      // },
      // when window width is >= 480px
      992: {
        // slidesPerView: 3,
        // spaceBetween: 34
      },
      // // when window width is >= 640px
      // 1200: {
      //   // slidesPerView: 2,
      //   // spaceBetween: 20
      // }
    }
  });

  })

}
