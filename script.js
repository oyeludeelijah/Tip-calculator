const billInput = document.getElementById("bill-input");
const peopleNum = document.getElementById("people-num");
const tips = document.querySelectorAll(".tips");
const customBtn = document.querySelector(".custom-btn");
const customInput = document.querySelector(".custom-input");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const reset = document.getElementById("reset");
const errorMsg = document.querySelectorAll(".msg");

let bill = 0;
let people = 0;
let tip = 0;

// Event listener for bill input
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value);
  calculateTip();
});

// Event listener for number of people input
peopleNum.addEventListener("input", () => {
  people = parseInt(peopleNum.value);
  calculateTip();
});

// // I'll be back for this later.
//  // buttons.forEach((btn) => {
// //   btn.addEventListener("click", function () {
// //     const value = btn.textContent;
// //     // console.log(value);
// //     resultNum.textContent = value;
// //     buttons.forEach((btn) => {
// //       btn.classList.remove("active");
// //     });
// //     btn.classList.add("active");

// //     submitBtn.addEventListener("click", function () {
// //       container2.classList.remove("hidden");
// //       container1.classList.add("hidden");
// //     });
// //   });
// // });

// Event listener for tip buttons
tips.forEach((tipBtn) => {
  tipBtn.addEventListener("click", () => {
    tip = parseFloat(tipBtn.value);
    calculateTip();
  });
});

// Event listener for custom tip button
customBtn.addEventListener("click", () => {
  customBtn.classList.add("hidden");
  customInput.classList.remove("hidden");
  // tip = parseFloat(prompt("Enter custom tip percentage"));
  // calculateTip();
});

// Event listener for the custom tip input
customInput.addEventListener("input", () => {
  tip = parseFloat(customInput.value);
  calculateTip();
});

// Event listener for reset button
reset.addEventListener("click", () => {
  billInput.value = "";
  peopleNum.value = "";
  customBtn.classList.remove("hidden");
  customInput.classList.add("hidden");
  tipResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
  bill = 0;
  people = 0;
  tip = 0;
  reset.style.backgroundColor = "";
});

// Function to calculate tip
function calculateTip() {
  if (bill > 0 && people > 0 && tip > 0) {
    let tipAmount = (bill * tip) / 100;
    let totalAmount = bill + tipAmount;
    tipResult.textContent = "$" + (tipAmount / people).toFixed(2);
    totalResult.textContent = "$" + (totalAmount / people).toFixed(2);

    reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    reset.style.color = "hsl(183, 100%, 15%)";
  } else if (people === 0) {
    // errorMsg.classList.remove("hidden");
  }
}
