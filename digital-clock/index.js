const hourElem = document.querySelector('.hour');
const minutesElem = document.querySelector('.minute');
const secondsElem = document.querySelector('.second');
const ampmElem = document.querySelector('.apmp');

function updateTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM'

    if ( h > 12 ) {
        h = h - 12
        ampm = 'PM'
    }
     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;
    
    hourElem.innerText = h;
    minutesElem.innerText = m;
    secondsElem.innerText = s;
    ampmElem.innerText =ampm;

    setTimeout(()=>{
        updateTime();
    },1000)

}
updateTime();