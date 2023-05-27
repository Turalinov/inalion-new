export default function solutions(){
  console.log('solutions');

  const solutions = document.querySelector('.solutions');


  const variants = solutions.querySelectorAll('.variant__item');

  if (variants) {
    const choises = solutions.querySelectorAll('.choise__item');


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
      })
    })

  }
}
