/* author Evgeni Pogoster 
epogo92@gmail.com */

//initializing variables
let op1 = '';
let op2 = '';
let op = '';
let output = '';

//calculation function
function calc(input) {
  switch (input) {

    case 'A':
      op2 = '';
      op = '';

    case 'C':
      op1 = '';
      output = '';
      break;

    case '.':
      if (op1 === '') 
        op1 = '0.';
      
      if (op1.indexOf('.') > -1) 
        break;
      
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      op1 = `${op1}${input}`;
      output = op1;
      break;
    case '-':
    case '+':
    case '*':
    case '/':
    case '=':
      if (op === '') {
        op = input;
        if (op2 === '') op2 = op1;
        if (op2 === '') op1 = '0';
        op1 = '';
        output = op2;
        break;
      }
      if (op1 === '') {
        op = input;
        break;
      }
      
      op2 = eval(op2 + op + op1).toString();
      op1 = '';
      output = op2;
      if (input === '=') {
        op = '';
        break;
      }
      op = input;
  } 
  //end of switch

  if (output === 'Infinity' || output === 'NaN') {
    op1 = '';
    op2 = '';
    op = '';
  }
  

  if (output === '')
    output = '0';
  document.getElementById('result').innerHTML = output;
}

//  listen to key press
document.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    calc('=');
    return;
  }
  calc(String.fromCharCode(event.which));
});

//  listen to click on calc button
const buttons = document.getElementsByClassName('calc-btn');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', event => calc(event.target.value));
}