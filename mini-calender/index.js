const monthElem = document.getElementById('month-container');
const weekElem = document.getElementById('week-container');
const dayElem = document.getElementById('day-container');
const yearElem = document.getElementById('year-container');

const date = new Date();
monthElem.innerText = date.toLocaleString('en', {
    month: 'long'
})
weekElem.innerText = date.toLocaleString('en', {
    weekday: 'long'
})
dayElem.innerText = date.getDay();
yearElem.innerText = date.getFullYear();