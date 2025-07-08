let num1 = document.getElementById("num1-input");
let num2 = document.getElementById("num2-input");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  console.log(parseInt(num1.value) + parseInt(num2.value));
});
minusButton.addEventListener("click", () => {
  console.log(parseInt(num1.value) - parseInt(num2.value));
});
