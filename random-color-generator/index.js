const containerElement = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainerElement = document.createElement('div');
    const randomColor = generateRandomColor();
    colorContainerElement.classList.add('color-container');
    colorContainerElement.style.backgroundColor = randomColor;
    colorContainerElement.innerText = randomColor;
    containerElement.appendChild(colorContainerElement)
    
}
function generateRandomColor () {
    const chars = '0123456789abcdef'
    const colorLength = 6;
    let randomColor = '#'
    for (let index = 0; index < colorLength; index++) {
        let random = Math.floor(Math.random() * chars.length);
        randomColor += chars.substring(random, random +1);
    }
    return randomColor;
}