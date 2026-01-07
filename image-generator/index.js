const imgContainerElement = document.querySelector('.img-container');
const btnElement = document.querySelector('.btn');

imageGenerator(5);

function imageGenerator (imageNumber) {
    for (let index = 0; index < imageNumber; index++) {
        const imgElement = document.createElement('img');
        const randomNumber = Math.floor(Math.random() * 2000)
        imgElement.src = `https://picsum.photos/300?random=${randomNumber}`;
console.log(randomNumber)
        imgContainerElement.appendChild(imgElement);
    }
}

btnElement.addEventListener('click', (event)=> {
    imageGenerator(5);
})