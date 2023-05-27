export default function animation() {

  console.log('animation lottie');

  const anim = lottie

  console.log(anim);



  anim.loadAnimation({
    container: document.querySelector('.hero__lottie'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './vendor/lottie_1.json',
  })


    anim.loadAnimation({
    container: document.querySelector('.modal__lottie'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './vendor/lottie_1.json',
  })




}
