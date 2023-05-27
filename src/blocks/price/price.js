
import Swiper from 'swiper/bundle';




export default function price(){
  console.log('price');

let tarifSwiper;

  const price = document.querySelector('.price');


  const variants = price.querySelectorAll('.variant__item');

  if (variants) {




 const enableSwiper = function () {


//swiper

  tarifSwiper = new Swiper('.tarif-slider', {
    // Optional parameters
    // loop: false,
    grabCursor: true,
    // spaceBetween: 20,
    autoHeight: true,
    slidesPerView: 3, //сколкько видны
    // slidesPerView: 'auto',
    // centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.tarif-slider-button-next',
    //   prevEl: '.tarif-slider-button-prev',
    // },

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
        slidesPerView: 3,
        spaceBetween: 34
      },
      // // when window width is >= 640px
      // 1200: {
      //   // slidesPerView: 2,
      //   // spaceBetween: 20
      // }
    }
  });
 }


 enableSwiper();




    const choises = price.querySelectorAll('.tarif__item');


    function deleteActiveClassVariants() {
      variants.forEach(variant => {
        variant.classList.remove('active');
      })
    }

    function setActiveClassVariant(id) {
      variants[id].classList.add('active');
    }



    function deleteActiveClassChoises() {
      choises.forEach(choise => {
        choise.classList.remove('active');
      })
    }

    function setActiveClassChoise(id) {
      choises[id].classList.add('active');
    }




    variants.forEach((variant, index) => {

      const link = variant.querySelector('.variant__link');

      link.addEventListener('click', (e) => {
        e.preventDefault();
        deleteActiveClassVariants();
        setActiveClassVariant(index);
        deleteActiveClassChoises();
        setActiveClassChoise(index);

        if (tarifSwiper !== undefined) {
          console.log();
          tarifSwiper.forEach(sw => {
            sw.destroy(true, true);
          })

          enableSwiper();
        }



      })
    })








  }
}
