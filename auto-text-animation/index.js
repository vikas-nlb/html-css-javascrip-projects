const containerElement = document.querySelector(".container");

const work = ['Developer', 'Son', 'Brother', 'Husband', 'Friend', 'Devotee', 'Aspiring Director']

let workIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  const firstLetter = work[workIndex][0].toLowerCase();
  const article = ['a', 'e', 'i', 'o', 'u'].includes(firstLetter) ? 'an' : 'a';
  containerElement.innerHTML = `<h1>I am ${article} ${work[workIndex].slice(0, characterIndex)} </h1>`

  if (characterIndex === work[workIndex].length) {
    workIndex++;
    characterIndex = 0;
  }
  if (workIndex === work.length) {
    workIndex = 0;
    characterIndex = 0;
  }
  setTimeout(updateText, 500);
}