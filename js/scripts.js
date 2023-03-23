// Business Logic -- obtaining input from user and doing behind the scenes calculations - processes data
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2; 
}

// User Interface Logic -- shows the result to the user, manipulates DOM

function numCalc(event) {
  event.preventDefault(); 
  const num1 = parseInt(document.querySelector("input#num1").value);
  const num2 = parseInt(document.querySelector("input#num2").value); 
  const operator = document.querySelector("input[name='operator']:checked").value;

  let result; 
  if (operator === "add") {
    result = add(num1, num2);
  } else if (operator === "subtract") {
    result = subtract(num1, num2); 
  } else if (operator === "multiply") {
    result = multiply(num1, num2);
  } else if (operator === "divide") {
    result = divide(num1, num2); 
  }

  document.getElementById("answer").innerText = result;
}

window.addEventListener("load", function() { //anonymous function used for callback for windows load event
  const form = document.getElementById("calculatorNew");
  form.addEventListener("submit", numCalc); // numCalc function dec. used for callback for forms submission event
});


// another way to organize Business and UI logic:
// Business Logic
// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculate(num1, num2, operatorParam) {
//   if (operatorParam === "add") {
//     return add(num1, num2);
//   } else if (operatorParam === "subtract") {
//     return subtract(num1, num2);
//   } else if (operatorParam === "multiply") {
//     return multiply(num1, num2);
//   } else if (operatorParam === "divide") {
//     return divide(num1, num2);
//   }
// }

// // User Interface Logic
// function handleSubmission(event) {
//   event.preventDefault();
//   const number1 = parseInt(document.querySelector("input#input1").value);
//   const number2 = parseInt(document.querySelector("input#input2").value);
//   const operator = document.querySelector("input[name='operator']:checked").value;

//   let result = calculate(number1, number2, operator);

//   document.getElementById("output").innerText = result;
// }

// window.addEventListener("load", function() {
//   const form = document.getElementById("calculator");
//   form.addEventListener("submit", handleSubmission);
// });