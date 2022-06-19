const bodyElement = document.querySelector('body');
const btnElement = document.querySelector('.btn');

let hexElement = document.querySelector('.hex');

function generateHex() {
    let resources = '0123456789ABCDEF';
    let result = '#';

    for (let i = 0; i < 6; i++) {
        result += resources[Math.floor(Math.random() * 16)];
    }

    return result;
}


btnElement.addEventListener('click', () => {
    let hexCode = generateHex();

    bodyElement.style.background = hexCode;
    hexElement.innerHTML = hexCode;
})
