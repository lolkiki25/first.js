let num1input = document.getElementById("num1-input");
let num2input = document.getElementById("num2-input");
let num3input = document.getElementById("num3-input");

let maxbutton = document.getElementById("max");

maxbutton.addEventListener("click", () => {
  let num1 = parseInt(num1input.value);
  let num2 = parseInt(num2input.value);
  let num3 = parseInt(num3input.value);
  if (num1 < num2) {
    if (num3 < num1) {
      console.log(num1);
    } else {
      console.log(num2);
    }
  }
});
