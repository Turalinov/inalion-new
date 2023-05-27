
import Swiper from 'swiper/bundle';

export default function projectsSlider() {

  const reviewsSwiper = new Swiper('.projects-slider', {
    // Optional parameters
    // loop: false,
    // grabCursor: true,
    spaceBetween: 34,
    autoHeight: true,
     allowTouchMove: false,
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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 34
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
function addZero(num){
      return (num > 9) ? num : '0' + num;
    }

  const revTitleContainer = document.querySelector('.projects__title-wrap');
  const revSliderContainer = document.querySelector('.projects-slider');
  const targetBtns = document.querySelector('.projects-slider-btns');

  // брекпоинт для уничтжения swiper
    const breakpoint = window.matchMedia('(max-width: 768px)');


    //функция проверки
    const breakpointChecker = function () {

      if (breakpoint.matches === true) {
        console.log('тут вызываем нашу функцию');
        /* окно просмотра имеет ширину не больше 768px пикселей */

        revSliderContainer.appendChild(targetBtns);
      } else {
        console.log('а тут ее не нужно');
         /* окно просмотра имеет ширину больше 768px пикселей */

        revTitleContainer.appendChild(targetBtns);
        // очищаем старые экземпляры и встроенные стили, когда они доступны

        // или / и ничего не делать
        return;
      }
    }


    // следим за изменениями размера области просмотра
    breakpoint.addListener(breakpointChecker);

    //старт
    breakpointChecker();
}
