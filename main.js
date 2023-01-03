//Getting the value class of each button and the id of the the value for display
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const value = document.getElementById("value");

//Value to be displayed with every click
let counter = 0;

increase.addEventListener("click", function () {
  counter++;
  counterColor(counter, value);
  value.textContent = counter;
});
reset.addEventListener("click", function () {
  counter = 0;
  counterColor(counter, value);
  value.textContent = counter;
});
decrease.addEventListener("click", function () {
  counter--;
  counterColor(counter, value);
  value.textContent = counter;
});

//Function that determines the color of counter depending on if its negative or positive
function counterColor(count, val) {
  if (count < 0) {
    val.style.color = "red";
  } else if (counter > 0) {
    val.style.color = "green";
  } else {
    val.style.color = "black";
  }
}
