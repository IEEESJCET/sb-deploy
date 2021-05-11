// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbysfjU3xrA5BpMImWSFPjn9eygcq1Vo_Wjia6ikYQxX_v1fMqxIkabK/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   document.getElementById("submit-button").style.backgroundColor = "red";
});

// Reusable functions
function gId(id) {
  return document.getElementById(id);
}

function changeBg(id, color) {
  gId(id).style.backgroundColor = color;
}

// Style changers
function successGreen() {
  changeBg("submit-button", "rgb(0, 189, 0)");

  gId("btn-icon").src = "images/tick.svg";
  gId("btn-icon").classList = "tick";
}

function failedRed() {
  changeBg("submit-button", "red");
  gId("submit-button").innerHTML = "!";
}

function loader() {
  //   gId("btn-icon").src = "images/loader.svg";
  //   gId("btn-icon").classList = "tick loader";
  changeBg("submit-button", "green");
}
function initialButtonState() {
  gId("btn-icon").src = "images/arrow.svg";
  changeBg("submit-button", "blue");
  gId("btn-icon").classList = "tick";
}

// Form submission using Fetch API and promises

form.addEventListener("submit", (e) => {
  e.preventDefault();

  loader();
  //   document.getElementById("submit-button").style.content =
  //     "../assets/awards.svg";

  document.getElementById("submit-button").classList.add("loader");

  document.getElementById("submit-button").innerHTML = "Submitting";

  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then((response) => {
  //       successGreen();

  //       setTimeout(initialButtonState, 3000);
  //     })
  //     .catch((error) => {
  //       failedRed();
  //     });
});

// loader();
