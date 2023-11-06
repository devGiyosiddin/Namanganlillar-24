const elModalOpener = document.querySelector('.modal-opener');
const elModal = document.getElementById('modal');
const elModalCloseButton = document.querySelector('.modal-close-button');

elModalOpener.addEventListener('click', function() {
    elModal.classList.add('modal-opener');
});
elModalCloseButton.addEventListener('click', function() {
    elModal.classList.remove('modal-opener')
});