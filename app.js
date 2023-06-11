const mainDiv = document.querySelector('.main');
// const divs = document.querySelectorAll('.div');
const addSquare = document.querySelector('.add-square');
const randomColor = document.querySelector('.random-color');
const gridBtn = document.querySelector('.grid-button');

//Adds event listener for test squares
// divs.forEach((item) => {
//     item.addEventListener('mouseover', () => {
//         let randomColorChoice = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         item.style.backgroundColor = randomColorChoice;
//     })
// })

//Adds square when button is clicked
addSquare.addEventListener('click', createSquare);

//Creates and add square
function createSquare() {
    const createdDiv = document.createElement('div');
    createdDiv.style.backgroundColor = 'whitesmoke';
    // createdDiv.style.border = '2px solid black';
    createdDiv.classList.add('div');
    createdDiv.style.display = 'flex';
    createdDiv.style.flex = '1';
    mainDiv.appendChild(createdDiv);

    //Adds event listener to added square(s)
    createdDiv.addEventListener('mouseenter', () => {
        createdDiv.style.backgroundColor = 'rgb(231,40,93)';
        createdDiv.style.border = '2px solid white';
    }) 
    
    createdDiv.addEventListener('mouseleave', () => {
        createdDiv.style.backgroundColor = 'black';
        // createdDiv.style.border = '2px solid whitesmoke';
    })
}

//Alerts user when randomize color button is clicked.
function randomizeColor() {
    alert('You randomized the color! ');
}

//Asks for gird size on button click.
gridBtn.addEventListener('click', setGridSize);

function setGridSize() {
    let size = prompt('How many squares would you like to add?');

    if (size === size) {
        for (let i = 0; i < size; i++) {
            createSquare();
        }
    }
}