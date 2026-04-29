function checkAge() {
  const age = document.getElementById("ageInput").value;
  const result = document.getElementById("result");

  if (age === "") {
    result.textContent = "Please enter your age.";
    return;
  }

  if (age < 18) {
    result.textContent = "You are a minor.";
  } else {
    result.textContent = "You are an adult.";
  }
}