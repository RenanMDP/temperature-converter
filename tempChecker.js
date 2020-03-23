import { 
  celsiusToFahrenheit, celsiusToKelvin, celsiusToNewton, 
  fahrenheitToCelsius, fahrenheitToKelvin, fahrenheitToNewton, 
  kelvinToCelsius, kelvinToFahrenheit, kelvinToNewton, 
  newtonToCelsius, newtonToFahrenheit, newtonToKelvin } from './tempCalc.js';

// Callback function to check what temperature was chosen
const temperatureChecker = () => {
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
};

export { temperatureChecker };