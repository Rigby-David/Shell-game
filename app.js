// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');

const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');



let wins = 0;
let losses = 0;

const displayResults = () => {
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    totalSpan.textContent = wins + losses;
};

const resetStyles = () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
};

buttonOne.addEventListener('click', () => {
    resetStyles();
    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 1) {
        shellOne.classList.add('reveal');
        wins++;
    } else if (randomShell === 2) {
        shellTwo.classList.add('reveal');
        losses++;
    } else {
        shellThree.classList.add('reveal');
        losses++;
    }
    displayResults();
    
});

buttonTwo.addEventListener('click', () => {
    resetStyles();
    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 2) {
        shellTwo.classList.add('reveal');
        wins++;
    } else if (randomShell === 1) {
        shellOne.classList.add('reveal');
        losses++;
    } else {
        shellThree.classList.add('reveal');
        losses++;
    }
    displayResults();
    
});

buttonThree.addEventListener('click', () => {
    resetStyles();  
    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 3) {
        shellThree.classList.add('reveal');
        wins++;
    } else if (randomShell === 1) {
        shellOne.classList.add('reveal');
        losses++;
    } else {
        shellTwo.classList.add('reveal');
        losses++;
    }
    displayResults();
});

// let count = 0;

// buttonOne.addEventListener('click', () => {
//   // update the count
//     count++;
//   // update the view
//     rightSpan.textContent = count;
// });

// buttonTwo.addEventListener('click', () => {
//     count++;
//     wrongSpan.textContent = count;
// });

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
// submission ready