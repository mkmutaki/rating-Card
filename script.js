const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", function () {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", function () {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach(function (rate, i) {
  rate.addEventListener("click", () => {
    rating.innerHTML = i + 1;
  });
});
