const cardData = [
    {
        src: 'https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8',
        name: 'Shanthala',
        about: 'Shanthala is a good girl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident delectus nisi minus et laboriosam consectetur vitae facere suscipit neque sint.'
    },
    {
        src: 'https://images.unsplash.com/photo-1767732337868-335e85582d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D',
        name: 'Anagha',
        about: 'Anagha is a good girl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident delectus nisi minus et laboriosam consectetur vitae facere suscipit neque sint.'
    },
    {
        src: 'https://plus.unsplash.com/premium_photo-1760569522438-3c8aae7c8557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        name: 'Aishwarya',
        about: 'Aishwarya is a good girl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident delectus nisi minus et laboriosam consectetur vitae facere suscipit neque sint.'
    },
    {
        src: 'https://images.unsplash.com/photo-1766678003099-9df6ac5f3749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D',
        name: 'Aparna',
        about: 'Aparna is a good girl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident delectus nisi minus et laboriosam consectetur vitae facere suscipit neque sint.'
    }
]

const imgElem = document.querySelector('.top-image');
const nameElem = document.querySelector('.name');
const aboutElem = document.querySelector('.about');

let cardIndex = 0;

updateCard();

function updateCard() {
    const {src, name, about} = cardData[cardIndex];

    imgElem.src = src;
    nameElem.innerText = name;
    aboutElem.innerText = about;

    cardIndex++;
    if(cardIndex === cardData.length) {
        cardIndex = 0;
    }
    setTimeout(()=>{
        updateCard();
    },2000)
}