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
    mainDiv.appendChild(createdDiv);

    //Adds event listener to added square(s)
    createdDiv.addEventListener('mouseover', () => {
        createdDiv.style.backgroundColor = 'red';
        createdDiv.style.border = '2px solid white';
    })
}

randomColor.addEventListener('click', randomizeColor);

//Alerts user. Will cycle through hex color values.
function randomizeColor() {
    alert('You randomized the color! ');
}