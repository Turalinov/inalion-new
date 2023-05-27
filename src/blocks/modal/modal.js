export default function modal() {

  // закрыть все модалки
  const modals = document.querySelectorAll('.modal');
  const body = document.querySelector('body');

  function closeAllModals() {
    modals.forEach(modal => {
      modal.classList.remove('active');
      body.classList.remove('lock');
    })
  }


  const btnRecords = document.querySelectorAll('.js-btn-record');


  if (btnRecords && btnRecords.length > 0) {
    const modal = document.querySelector('.modal#modal-record');


    btnRecords.forEach(btnRecord => {
      btnRecord.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
        modal.classList.add('active');
        body.classList.add('lock');
      })
    });
  }



   const close = document.querySelectorAll('.modal__close');


    close.forEach(cl => {
      cl.addEventListener('click', (e) => {
      const modal = e.currentTarget.closest('.modal');
      modal.classList.remove('active');
      body.classList.remove('lock');
    })
    })





}
