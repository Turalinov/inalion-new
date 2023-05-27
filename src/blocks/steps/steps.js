export default function steps() {
  // получаем координаты элемента в контексте документа
  function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

  function getHeightCoords(parent, child) {

      child = parent.querySelector(`.${child}`);

      let heightParent = parent.scrollHeight;

      let topParent = getCoords(parent).top;
      let topChild = getCoords(child).top;
      let maxHeightParent = topChild - topParent


      parent.style.maxHeight = maxHeightParent + 'px';

      return {heightParent, maxHeightParent};

  }


  const parents = document.querySelectorAll('.delimiter-wrap');

  if(parents) {


    function phonesFunction() {

    console.log(parents);

    parents.forEach(parent => {

      let {heightParent, maxHeightParent} = getHeightCoords(parent, 'delimiter')

      console.log(heightParent, maxHeightParent);

      let more = parent.nextElementSibling;

            console.log({more});

      let moreBtn = more.querySelector('.more__btn');

    if (moreBtn) {

    moreBtn.addEventListener('click', function (e) {
      e.preventDefault();

        parent.classList.toggle('opened');

        if (parent.classList.contains('opened')) {
          parent.style.maxHeight =  heightParent + 'px';
          moreBtn.classList.add('opened');
        } else {
          parent.style.maxHeight = maxHeightParent + 'px';
          moreBtn.classList.remove('opened');
        }


    })
  }


    });


    }

    // брекпоинт для уничтжения swiper
    const breakpoint = window.matchMedia('(max-width: 768px)');


    //функция проверки
    const breakpointChecker = function () {

      if (breakpoint.matches === true) {
        console.log('тут вызываем нашу функцию');
        /* окно просмотра имеет ширину не больше 768px пикселей */
        phonesFunction()

      } else {
        console.log('а тут ее не нужно');
         /* окно просмотра имеет ширину больше 768px пикселей */

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
}
