import { startClock } from "./components/clock.js";
import { startDate } from "./components/date.js";
import { initWeatherApp } from "./components/weatherModule.js";


import "./css/style.css";

document.addEventListener("DOMContentLoaded", () => {

  initWeatherApp();
  startClock();
  startDate();
});
