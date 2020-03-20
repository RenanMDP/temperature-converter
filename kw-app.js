const convertNumberFrom = document.querySelector("#convertFrom");

const convertBtn = document.querySelector("#convertBtn");

const fromCelsius = document.querySelector("#fromCelsius");
const fromFahrenheit = document.querySelector("#fromFahrenheit").getAttribute("value");
const fromKelvin = document.querySelector("#fromKelvin").getAttribute("value");
const fromNewton = document.querySelector("#fromNewton").getAttribute("value");

const toCelsius = document.querySelector("#toCelsius").getAttribute("value");
const toFahrenheit = document.querySelector("#toFahrenheit").getAttribute("value");
const toKelvin = document.querySelector("#toKelvin").getAttribute("value");
const toNewton = document.querySelector("#toNewton").getAttribute("value");

const tempResult = document.querySelector("#tempResult");

convertBtn.addEventListener('click', () => {
  const fromTemp = document.querySelector("#fromTemp");
  // const selectedFromTemp = fromTemp.options[fromTemp.selectedIndex].value;
  const toTemp = document.querySelector("#toTemp");
  // const selectedToTemp = toTemp.options[toTemp.selectedIndex].value;

  if (fromTemp.value === "celsius" && toTemp.value === "fahrenheit") {
    celsiusToFahrenheit();
  } else if (fromTemp.value === "celsius" && toTemp.value === "kelvin") {
    celsiusToKelvin();
  } else if (fromTemp.value === "celsius" && toTemp.value === "newton") {
    celsiusToNewton();
  } else if (fromTemp.value === "fahrenheit" && toTemp.value === "celsius") {
    fahrenheitToCelsius();
  } else if (fromTemp.value === "fahrenheit" && toTemp.value === "kelvin") {
    fahrenheitToKelvin();
  } else if (fromTemp.value === "fahrenheit" && toTemp.value === "newton") {
    fahrenheitToNewton();
  } else if (fromTemp.value === "kelvin" && toTemp.value === "celsius") {
    kelvinToCelsius();
  } else if (fromTemp.value === "kelvin" && toTemp.value === "fahrenheit") {
    kelvinToFahrenheit();
  } else if (fromTemp.value === "kelvin" && toTemp.value === "newton") {
    kelvinToNewton();
  } else if (fromTemp.value === "newton" && toTemp.value === "celsius") {
    newtonToCelsius();
  } else if (fromTemp.value === "newton" && toTemp.value === "fahrenheit") {
    newtonToFahrenheit();
  } else if (fromTemp.value === "newton" && toTemp.value === "kelvin") {
    newtonToKelvin();
  }
});

const celsiusToFahrenheit = () => {
  const result = parseInt(((convertNumberFrom.value * 9) / 5) + 32);
  tempResult.textContent = result;
};

const celsiusToKelvin = () => {
  const result = parseFloat(convertNumberFrom.value) + 273.15;
  tempResult.textContent = result.toFixed(2);
};

const celsiusToNewton = () => {
  const result = parseFloat(convertNumberFrom.value) * 0.33000;
  tempResult.textContent = result.toFixed(5);
};

const fahrenheitToCelsius = () => {
  const result = parseInt((convertNumberFrom.value - 32) * (5 / 9));
  tempResult.textContent = result;
};

const fahrenheitToKelvin = () => {
  const result = parseFloat((convertNumberFrom.value - 32) * (5 / 9) + 273.15);
  tempResult.textContent = result.toFixed(2);
};

const fahrenheitToNewton = () => {
  const result = parseFloat((convertNumberFrom.value - 32) * 0.18333);
  tempResult.textContent = result.toFixed(5);
};

const kelvinToCelsius = () => {
  const result = parseFloat(convertNumberFrom.value) - 273.15;
  tempResult.textContent = result.toFixed(2);
};

const kelvinToFahrenheit = () => {
  const result = parseFloat((convertNumberFrom.value - 273.15) * (9 / 5) + 32);
  tempResult.textContent = result.toFixed(2);
};

const kelvinToNewton = () => {
  const result = parseFloat((convertNumberFrom.value - 273.15) * 0.33000);
  tempResult.textContent = result.toFixed(5);
};

const newtonToCelsius = () => {
  const result = parseFloat(convertNumberFrom.value / 0.33000);
  tempResult.textContent = result;
};

const newtonToFahrenheit = () => {
  const result = parseFloat((convertNumberFrom.value * 5.4545) + 32);
  tempResult.textContent = result;
};

const newtonToKelvin = () => {
  const result = parseFloat((convertNumberFrom.value / 0.33000) + 273.15);
  tempResult.textContent = result;
};