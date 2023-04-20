
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
// ----------------------------- upload
//  ------------------------ handleFileSelect
function handleFileSelect(event) {
   const files = event.target.files;
   const fileList = document.getElementById('file-list');
   fileList.innerHTML = '';

   for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = document.createElement('span');
      fileName.textContent = file.name;
      fileList.appendChild(fileName);
   }

   document.getElementById('file-input').style.display = 'none';
   fileList.style.display = 'block';
}

document.getElementById('file-input').addEventListener('change', handleFileSelect);

// // video play
// const videoFirst = document.getElementById("myVideo");
// const videoSecond = document.getElementById("myVideoSec");

// window.addEventListener('load', (event) => {
//    videoFirst.play();
//    // videoSecond.play();
// });