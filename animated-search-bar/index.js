const searchBarContainerElem = document.querySelector('.search-bar-container');
const maginifierElem = document.querySelector('.magnifier');

maginifierElem.addEventListener('click', ()=>{
    searchBarContainerElem.classList.toggle('active')
})