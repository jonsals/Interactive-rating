let numRating = document.getElementsByClassName("rate-number");
let submitButton = document.getElementById("submit-button");
let surveyText = document.getElementById("survey");
let resultText = document.getElementById("result");
let endResponse = document.getElementById("answer");

let response = "";
submitButton.disabled = true;

initiateButtons();
function initiateButtons() {
  for (var i = 0; i < numRating.length; i++) {
    numRating[i].addEventListener("click", rateClicked);
  }
}

function rateClicked() {
  resetResponse();
  response = this.id;
  this.classList.add("active");
  submitButton.disabled = false;
}

function resetResponse() {
  for (var i = 0; i < numRating.length; i++) {
    numRating[i].classList.remove("active");
  }
  response = "";
}

//submit button clicked
submitButton.addEventListener("click", function () {
  let text = submitButton.firstElementChild;
  this.classList.remove("submit-hover");
  this.classList.add("submit-active");
  text.classList.add("submit-text-active");
  showResponse();
});

function showResponse() {
  surveyText.classList.add("hidden");
  resultText.classList.remove("hidden");
  var s = "You selected " + response + "  out of 5";
  endResponse.innerHTML = s;
}
