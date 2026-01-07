const bodyElem = document.querySelector('body');
const inputElem = document.querySelector('.input');

inputElem.checked = JSON.parse(localStorage.getItem('mode'));
updateBody();

function updateBody(){
    if(inputElem.checked){
        bodyElem.style.background='black';
    } else {
        bodyElem.style.background='white';
    }
}

function setLocal() {
    localStorage.setItem('mode', JSON.stringify(inputElem.checked));
}

inputElem.addEventListener('input', ()=>{
    updateBody();
    setLocal();
})