import { temperatureChecker } from './tempChecker.js';

// Gets the convertion button
const convertBtn = document.querySelector("#convertBtn");

// Event listener click on button
convertBtn.addEventListener('click', temperatureChecker);