// Element selection
const batteryInput = document.getElementById("batteryInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultText = document.getElementById("result");
const themeBtn = document.getElementById("themeBtn");

// Logic function
function getEstimatedRange(batteryPercent) {
  if (batteryPercent < 0) {
    return 0;
  }

  if (batteryPercent > 100) {
    return 400;
  }

  return batteryPercent * 4;
}

// Event: Calculate range
calculateBtn.addEventListener("click", function () {
  const batteryValue = batteryInput.value;

  if (batteryValue === "") {
    resultText.textContent = "Please enter battery percentage";
    return;
  }

  const range = getEstimatedRange(batteryValue);
  resultText.textContent = "Estimated Range: " + range + " km";
});

// Event: Toggle dark mode
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});
