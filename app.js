const mainDiv = document.querySelector('.main');
const addSquare = document.querySelector('.add-square');
const randomColor = document.querySelector('.random-color');
const gridBtn = document.querySelector('.grid-button');

//Adds square when button is clicked
addSquare.addEventListener('click', startGrid);

function startGrid() {
    const text = ['You', 'added', 'squares'];
    for (let i = 0; i < text.length; i += 1) {
        const div2 = document.createElement('div');
        div2.classList.add('div2');
        div2.textContent = text[i];
        mainDiv.appendChild(div2);
    }
}
//Creates and add square
function play() {
    const createdDiv = document.createElement('div');
    createdDiv.style.backgroundColor = 'whitesmoke';
    createdDiv.classList.add('div');
    mainDiv.appendChild(createdDiv);

    //Adds event listener to added square(s)
    createdDiv.addEventListener('mouseenter', () => {
        createdDiv.style.backgroundColor = 'rgb(231,40,93)';
    }) 
    
    createdDiv.addEventListener('mouseleave', () => {
        createdDiv.style.backgroundColor = 'black';
    })

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
    let size = prompt('How many squares would you like to add?');

    if (size >= 1) {
        for (let i = 0; i < size; i++) {
            play();
        }
    } else if (size <= 0) {
        alert('Enter a number between 1 and 1000');
    } else if (size >= 300) {
        alert('Enter a number between 1 and 1000');
    }
}

for (let i = 0; i < 257; i++) {
    // console.log(i);
    play();
}