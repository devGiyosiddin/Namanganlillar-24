const elModalOpener = document.querySelector('.modal-opener');
const elModal = document.getElementById('modal');

elModalOpener.addEventListener('click', function() {
    elModal.classList.add('modal-opener');
    //close modal on escape;
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            elModal.classList.remove('modal-opener')
        }
    })
});