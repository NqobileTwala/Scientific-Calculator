const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");
let isResultDisplayed = false;

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let btntext = e.target.innerText;

    if (btntext === "×") btntext = "*";
    if (btntext === "÷") btntext = "/";

    if (isResultDisplayed) {
      if (!isNaN(btntext) || btntext === ".") {
        screen.value = btntext;
      } else {
        screen.value += btntext;
      }
      isResultDisplayed = false;
    } else {
      screen.value += btntext;
    }
  });
});

function sin() {
  screen.value = Math.sin(toRadians(screen.value));
  isResultDisplayed = true;
}

function cos() {
  screen.value = Math.cos(toRadians(screen.value));
  isResultDisplayed = true;
}

function tan() {
  screen.value = Math.tan(toRadians(screen.value));
  isResultDisplayed = true;
}

function sqrt() {
  screen.value = Math.sqrt(screen.value);
  isResultDisplayed = true;
}

function log() {
  screen.value = Math.log10(screen.value);
  isResultDisplayed = true;
}

function pi() {
  screen.value = Math.PI;
  isResultDisplayed = true;
}

function e() {
  screen.value = Math.E;
  isResultDisplayed = true;
}

function fact() {
  let num = parseInt(screen.value);
  if (num < 0 || isNaN(num)) {
    screen.value = "Error";
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    screen.value = result;
  }
  isResultDisplayed = true;
}

function backspc() {
  if (!isResultDisplayed) screen.value = screen.value.slice(0, -1);
}

function evaluateExpression() {
  try {
    const isValidExpression = /^[0-9+\-*/().\s]*$/.test(screen.value);

    if (isValidExpression) {
      const safeExpression = new Function("return " + screen.value);
      screen.value = safeExpression();
      isResultDisplayed = true;
    } else {
      screen.value = "Error";
    }
  } catch (error) {
    screen.value = "Error";
    isResultDisplayed = true;
  }
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function percent() {
  let value = parseFloat(screen.value);
  if (isNaN(value)) {
    screen.value = "Error"; // Handle invalid input
  } else {
    screen.value = value / 100; // Calculate percentage (value% = value / 100)
  }
  isResultDisplayed = true;
}
