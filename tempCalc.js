import { convertNumberFrom } from './tempApp.js';

// Get the div to write the result number
const tempResult = document.querySelector("#tempResult");

// Calculations
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

export { 
  celsiusToFahrenheit, celsiusToKelvin, celsiusToNewton, 
  fahrenheitToCelsius, fahrenheitToKelvin, fahrenheitToNewton, 
  kelvinToCelsius, kelvinToFahrenheit, kelvinToNewton,
  newtonToCelsius, newtonToFahrenheit, newtonToKelvin };