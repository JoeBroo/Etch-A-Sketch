const mainDiv = document.querySelector('.main');
const divs = document.querySelectorAll('.div');
const addSquare = document.querySelector('.add-square');
const randomColor = document.querySelector('.random-color');
const gridBtn = document.querySelector('.grid-button');

//Adds event listener for test squares
divs.forEach((item) => {
    item.addEventListener('mouseover', () => {
        let randomColorChoice = '#' + Math.floor(Math.random() * 16777215).toString(16);
        item.style.backgroundColor = randomColorChoice;
    })
})

//Adds square when button is clicked
addSquare.addEventListener('click', createSquare);

//Creates and add square
function createSquare() {
    const createdDiv = document.createElement('div');
    createdDiv.style.backgroundColor = 'whitesmoke';
    createdDiv.classList.add('div');
    createdDiv.style.display = 'flex';
    createdDiv.style.flex = '1';
    mainDiv.appendChild(createdDiv);

    //Adds event listener to added square(s)
    createdDiv.addEventListener('mouseover', () => {
        createdDiv.style.backgroundColor = 'red';
        createdDiv.style.border = '2px solid white';
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

    //Adds 16 squares.
    if (size == 16) {
        for (let i = 0; i < size; i++) {
            createSquare();
        }

        //Adds 256 squares.
    } else if (size == 256) {
        for (let i = 0; i < size; i++) {
            createSquare();
        }

        //If choice is not one of the above, let user know their options.
    } else if (size !== 16 || 256) {
        alert('You may choose 16 or 256. ');
    }
}