startGame(8, 8, 15)

// - create function start game 
//     - create field of button 
//     - create mine generator
//     - create event listener 
//     - function isBomb 

function startGame(height, width, mines) {
    const fieldCount = height * width
    const field = document.querySelector('.field')
    field.innerHTML = '<button></button>'.repeat(fieldCount)

    const bombs = [...Array(fieldCount)]
        .sort(() => Math.floor(Math.random(fieldCount)))
        .slice(0, mines)

    
}















































// //params - field size-x, field size-y, mount of mine
// function startGame(width, height, bombs_count) {
// //field generation
//     const field = document.querySelector('.field')
//     const cellsCount =width * height
//     //string which generate 1 button, repeat(enumber of cells)
//     field.innerHTML = '<button></button>'.repeat(cellsCount);
//     //contains all children of field
//     const cells = [...field.children]


// //mine generation
//     //new array of elements from 0 to 63
//     const mines = [...Array(cellsCount).keys()]
//         .sort(() => Math.random() - 0.5)
//         .slice(0, bombs_count)

// //delegation
//     //event - event object, contains info about event
//     field.addEventListener('click', (event) => {
//         //browser contain tags name in uppercase
//         if (event.target.tagName !== 'BUTTON'){
//             return
//         } 
//         //need to find a cell index in sellc array
//         const index = cells.indexOf(event.target)
//         const column = index % width
//         const row = Math.floor(index/width)
//         open(row, column)
//     })

//     function open(row, column){
//         const index = row * width + column
//         const cell = cells[index]
//         cell.innerHTML = isBomb(row, column) ? 'x' : ' '; 
//         cell.disabled = true;
//     }

// //is a mine under button
//     function isBomb(row, column) { 
//         const index = row * width + column
 
//         return mines.includes(index)
//     }
// }