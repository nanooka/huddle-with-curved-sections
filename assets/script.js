const email = document.getElementById("email-input");
const error = document.querySelector(".error");
const correct = document.querySelector(".correct");
const submitButton = document.getElementById("submit-button");

let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function testMail(input) {
  if (mailRegex.test(input.value)) {
    console.log("this is true");
    error.classList.remove("visible");
    correct.classList.add("visible");
    email.classList.remove("error-color");
  } else if (!mailRegex.test(input.value)) {
    console.log("this is false");
    correct.classList.remove("visible");
    error.classList.add("visible");
    email.classList.add("error-color");
  }
}
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  testMail(email);
  console.log("clicked");
});

email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit-button").click();
  }
});
