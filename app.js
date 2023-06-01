const mainDiv = document.querySelector('.main');
const divs = document.querySelectorAll('.div');
const addSquare = document.querySelector('.add-square');

//Adds event listener for test squares
divs.forEach((item) => {
    item.addEventListener('mouseover', () => {
       item.style.backgroundColor = 'red'; 
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