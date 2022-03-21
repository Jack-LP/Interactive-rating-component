let submitPage = document.querySelector(".submit-screen");
let inputPage = document.querySelector(".input-screen");
let submitBtn = document.querySelector(".input__button");
let ratingChoice = document.querySelector(".rating-choice");

let btns = document.querySelectorAll(".rating");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const rating = e.target.textContent;
    ratingChoice.textContent = rating;
  });
});

submitBtn.addEventListener("click", function () {
  inputPage.classList.add("hidden");
  submitPage.classList.add("submitted");
});
