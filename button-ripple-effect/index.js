const buttonElem = document.querySelector('.btn');

buttonElem.addEventListener('mouseover', (event) => {
const x = event.pageX - buttonElem.offsetLeft;
const y = event.pageY - buttonElem.offsetTop;

buttonElem.style.setProperty('--xPos', x + 'px');
buttonElem.style.setProperty('--yPos', y + 'px')
})