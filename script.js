const container = document.querySelector('.container');
const clearBtn = document.querySelector('#clear');

function createGrid(size) {
    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

createGrid(16);