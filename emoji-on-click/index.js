bodyElem = document.querySelector('body');

bodyElem.addEventListener('mousemove', (event)=>{
    const xPostion = event.offsetX;
    const yPosition = event.offsetY;
    const spanElem = document.createElement('span');
    spanElem.style.left = xPostion + 'px';
    spanElem.style.top = yPosition + 'px';
    bodyElem.appendChild(spanElem);
    const size = Math.random() * 100;
    spanElem.style.width = size + 'px';
    spanElem.style.height = size + 'px';
    setTimeout(()=> {
        spanElem.remove();
    },3000)
})