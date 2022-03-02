// select the grid that we want to add the 16 grid to
const grid = document.querySelector("#grid");
// size of the grid
const size = 640;
// colors
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// generate 16*16 squares in the grid and listening on button and giving user ability to choose dimensions of grid's item
function reset() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => item.remove())
    const dimension = parseInt(prompt('Enter specific dimension: '));
    for(let i = 0; i < (dimension * dimension); i++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'item');
        item.addEventListener('mouseover', () => {
            const color = Math.floor(Math.random() * 7); 
            item.style.backgroundColor = colors[color]
        });
        item.style.width = size / dimension + "px";
        item.style.height = size / dimension + "px";
        grid.appendChild(item)
    }
}
function generateGrid() {
    for(let i = 0; i < 256; i++) {
        let item = document.createElement('div');
        item.setAttribute('class', 'item');
        item.addEventListener('mouseover', () => {
            const color = Math.floor(Math.random() * 7); 
            item.style.backgroundColor = colors[color]
        })
        grid.appendChild(item)
    }
    const button = document.querySelector('button');
    button.addEventListener('click',() => reset());
}
generateGrid()