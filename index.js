const ageElement = document.getElementById("age");
const diff =
  new Date().getTime() - new Date(ageElement.getAttribute("data")).getTime();
const ageInYears = diff / 1000 / 3600 / 24 / 365;

ageElement.textContent =
  ageElement.textContent + " (" + Math.floor(ageInYears) + " years old)";
