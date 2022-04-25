// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const rightSpan = document.getElementById('right');
const wrongSpan = document.getElementById('wrong');
const totalSpan = document.getElementById('total');

let count = 0;

buttonOne.addEventListener('click', () => {
  // update the count
  count++;
  // update the view
  rightSpan.textContent = count;
});



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
