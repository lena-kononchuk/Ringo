(() => {
   document.querySelector('.js-speaker-form').addEventListener('submit', e => {
      e.preventDefault();

      new FormData(e.currentTarget).forEach((value, name) =>
         console.log(`${name}: ${value}`),
      );

      e.currentTarget.reset();
   });
})();

// popup gifts
(() => {
   const refs = {
      openModalBtn: document.querySelector("[data-open]"),
      closeModalBtn: document.querySelector("[data-close]"),
      modal: document.querySelector("[modal]"),
   };

   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);

   function toggleModal() {
      // document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
   }
})();
// popup partner
(() => {
   const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
   };

   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);

   function toggleModal() {
      // document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
   }
})();