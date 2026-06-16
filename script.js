const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');

function createGrid(size) {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.classList.add('hovered');
        });
    }
}

createGrid(16);

clearBtn.addEventListener('click', () => {
    let userInput = prompt('Enter the number of squares per side (max 100):');
    userInput = parseInt(userInput);
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }
    container.innerHTML = '';
    createGrid(userInput);
});