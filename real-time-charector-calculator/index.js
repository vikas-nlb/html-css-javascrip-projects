const textAreaElem = document.querySelector('.textarea');
const totalCharectorsElem = document.querySelector('.total-counter');
const remainingCharectorsElem = document.querySelector('.remaining-counter');

updateStats();

textAreaElem.addEventListener('keyup', ()=>{
    updateStats();
})

function updateStats () {
    totalCharectorsElem.innerText = textAreaElem.value.length;
    remainingCharectorsElem.innerText = textAreaElem.getAttribute('maxlength') - textAreaElem.value.length;

}