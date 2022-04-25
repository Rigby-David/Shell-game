// import functions and grab DOM elements
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const rightSpan = document.getElementById('right');
const wrongSpan = document.getElementById('wrong');
const totalSpan = document.getElementById('total');
const shellOne = document.getElementById('shell-1');
const shellTwo = document.getElementById('shell-2');
const shellThree = document.getElementById('shell-3');

let wins = 0;
let losses = 0;

buttonOne.addEventListener('click', () => {
    shellOne.classList.remove('reveal');
    shellTwo.classList.remove('reveal');
    shellThree.classList.remove('reveal');
    const randomShell = Math.ceil(Math.random() * 3);
    if (randomShell === 1) {
        shellOne.classList.add('reveal');
        right++;
    } else if (randomShell === 2) {
        shellTwo.classList.add('reveal');
        wrong++;
    } else {
        shellThree.classList.add('reveal');
        total++;
    }
    rightSpan.textContent = right;
    wrongSpan.textContent = wrong;
    totalSpan.textContent = total;
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
