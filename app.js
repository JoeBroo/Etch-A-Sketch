const mainDiv = document.querySelector('.main');
const addSquare = document.querySelector('.add-square');
const randomColor = document.querySelector('.random-color');
const gridBtn = document.querySelector('.grid-button');

//Adds square when button is clicked
addSquare.addEventListener('click', () => {
    alert('You clicked add square! ');
});

//Creates and add square
function play() {
    const createdDiv = document.createElement('div');
    createdDiv.style.backgroundColor = 'whitesmoke';
    createdDiv.classList.add('div');
    mainDiv.appendChild(createdDiv);

    //Adds red color to squares on mouse enter and change to black when mouse leaves.
    createdDiv.addEventListener('mouseenter', () => {
        createdDiv.style.backgroundColor = 'rgb(231,40,93)';
    }) 
    
    createdDiv.addEventListener('mouseleave', () => {
        createdDiv.style.backgroundColor = 'black';
    })

    //Add random color to squares when button clicked.
    randomColor.addEventListener('click', () => {
        let randomColorChoice = '#' + Math.floor(Math.random() * 16777215).toString(16);
        createdDiv.addEventListener('mouseleave', () => {
            createdDiv.style.backgroundColor = randomColorChoice;
        })
    })
}

//Asks for gird size on button click.
gridBtn.addEventListener('click', setGridSize);

function setGridSize() {
    let row = prompt('How many rows would you like? ');
    let column = prompt('How many columns would you like? ');
    let sum = row * column;
    console.log(`The sum of ${row} and ${column} is: ${sum}`);

    if (sum <= 0 || sum > 10000) {
        alert('Please enter a number between 1 and 100')
    } else {
        for (let i = 0; i < sum; i++) {
            const div2 = document.createElement('div');
            div2.textContent = "I'm alive! ";
            div2.classList.add('div2');
            mainDiv.appendChild(div2);
        }
    }
}

function startGrid() {
    for (let i = 0; i < 257; i++) {
        play();
    }
}

startGrid();