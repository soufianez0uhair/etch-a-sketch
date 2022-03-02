// select the grid that we want to add the 16 grid to
const grid = document.querySelector("#grid");
// generate 16*16 squares in the grid
function generateGrid() {
    for(let i = 0; i < 256; i++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'item');
        item.addEventListener('mouseover', () => item.classList.add('changeColor'))
        grid.appendChild(item)
    }
    const button = document.querySelector('button');
    button.addEventListener('click',() => reset())
}
generateGrid()

// change the color of each one when hover on it
function reset() {
    const squaresChanged = document.querySelectorAll('.changeColor');
    squaresChanged.forEach(item => item.classList.remove('changeColor'))
}