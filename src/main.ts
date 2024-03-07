
import "./style.css";

const turnNumber = document.querySelector('.numero-turno');
let currentNumber = 0;

const AddNumber = (): void => {
  if (turnNumber !== null && turnNumber !== undefined && turnNumber instanceof HTMLHeadingElement) {
    const turn = `${++currentNumber}`.padStart(2, '0');
    turnNumber.innerHTML = turn;
  }
}

const removeNumber = () : void => {
  if (turnNumber !== null && turnNumber !== undefined && turnNumber instanceof HTMLHeadingElement) {
    const turn = `${--currentNumber}`.padStart(2, '0');
    turnNumber.innerHTML = turn;
  }
}

const resetNumber = () : void => {
  if (turnNumber !== null && turnNumber !== undefined && turnNumber instanceof HTMLHeadingElement) {
    currentNumber = 0;
    const turn = `${currentNumber}`.padStart(2, '0');
    turnNumber.innerHTML = turn;
  }
}

const changeNumber = () : void => {
  const inputValue = document.getElementById('lnumber');
  if (inputValue !== null && inputValue !== undefined && inputValue instanceof HTMLInputElement) {
    if (turnNumber !== null && turnNumber !== undefined && turnNumber instanceof HTMLHeadingElement) {
      currentNumber = parseInt(inputValue.value);
      const result = currentNumber;
      turnNumber.innerHTML = `${result}`.padStart(2, '0');
      inputValue.value = '';
    }
  }
}


const nextBtn = document.getElementById('siguiente');
const prevBtn = document.getElementById('anterior');
const resetBtn = document.getElementById('reset');
const changeBtn = document.getElementById('change');

if (nextBtn !== null && nextBtn !== undefined) {
  nextBtn.addEventListener('click', AddNumber);
}
if (prevBtn !== null && prevBtn !== undefined) {
  prevBtn.addEventListener('click', removeNumber);
}

if (resetBtn !== null && resetBtn !== undefined) {
  resetBtn.addEventListener('click', resetNumber);
}

if (changeBtn !== null && changeBtn !== undefined) {
  changeBtn.addEventListener('click', changeNumber);
}