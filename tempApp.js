import { temperatureChecker } from './tempChecker.js';

// Get the input field
const convertNumberFrom = document.querySelector("#convertFrom");

// Reads the input from user and calls temperatureChecker for evaluation
convertNumberFrom.addEventListener("input", temperatureChecker);

export { convertNumberFrom };