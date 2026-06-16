const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('square');

        div.style.width = `calc(100% / ${size})`;
        div.style.height = `calc(100% / ${size})`;

        container.appendChild(div);
        
        div.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;    
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