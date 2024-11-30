//weatherModule.js

import { fetchWeatherData, getUserLocationAndWeather} from "./apiFetch.js";


let isCelsius = true;
let currentTemp = 0;
let currentFeelsLike = 0;


import thunderGif from '../img/thunder.gif';
import drizzleGif from '../img/drizzle.gif';
import rainGif from '../img/rain.gif';
import snowGif from '../img/snowy.gif';
import foggyGif from '../img/foggy.gif';
import sandyGif from '../img/sandy.gif';
import sunnyGif from '../img/sunny.gif';
import cloudyGif from '../img/cloudy.gif';
import hotGif from '../img/hot.gif';
import temperatureCelsiusIcon from '../img/temperature-celsius.svg';
import fahrenheitIcon from '../img/fahrenheit.png';


export function initWeatherApp() {
  window.addEventListener("load", async () => {
    try {
      const weatherData = await getUserLocationAndWeather();
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error("Error getting weather data:", error);
      displayError("There was a problem retrieving weather information.");
    }
  });

  const weatherForm = document.querySelector(".weather-form");
  weatherForm.addEventListener("submit", onCitySearchSubmit);

  const toggleTempButton = document.querySelector("#toggleTemp");
  toggleTempButton.addEventListener("change", () => {
    isCelsius = !isCelsius;
    updateTempDisplay();
  });
}


//handling City search 
async function onCitySearchSubmit(e) {
  e.preventDefault();
  const userInput = document.querySelector("#locationInput");
  const city = userInput.value.toLowerCase();
  
  if (city) {
    try {
      const weatherData = await fetchWeatherData(city); 
      displayWeatherInfo(weatherData);

      userInput.value = ""; 
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Enter a city name.");
    userInput.value = ""; 
  }
}


function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9/5 + 32) * 10) / 10;
}


function updateTempDisplay() {
  const tempValueElement = document.querySelector('#temperature .temp-value');
  const tempUnitElement = document.querySelector("#temp-unit");
  const feelsLikeElement = document.querySelector("#feels-like");
  const tempIconElement = document.querySelector(".temp-unit-icon");

  if (isCelsius) {
    tempValueElement.textContent = Math.round(currentTemp);
    tempUnitElement.textContent = "°C";
    feelsLikeElement.textContent = `Feels like: ${Math.round(currentFeelsLike)}°C`;
    tempIconElement.src = temperatureCelsiusIcon; 
    tempIconElement.alt = "celsius";
   
  } else {
    const tempF = celsiusToFahrenheit(currentTemp);
    const feelsLikeF = celsiusToFahrenheit(currentFeelsLike);
    tempValueElement.textContent = Math.round(tempF);
    tempUnitElement.textContent = "°F";
    feelsLikeElement.textContent = `Feels like: ${Math.round(feelsLikeF)}°F`;

    tempIconElement.src = fahrenheitIcon; 
    tempIconElement.alt = "fahrenheit";
  }
}

function displayWeatherInfo(data) {
  const { 
    name: city, 
    sys: { country }, 
    main: { temp, humidity, feels_like },
    weather: [{ description, icon, id }] 
  } = data;

  currentTemp = temp;
  currentFeelsLike = feels_like;
  
  const locationElement = document.querySelector("#location .city");
  const countryElement = document.querySelector("#location .country");
  const descriptionElement = document.querySelector("#description");
  const humidityElement = document.querySelector("#humidity");
  const weatherIconElement = document.querySelector("img[alt='icon']");

  locationElement.textContent = city; 
  countryElement.textContent = country;

  updateTempDisplay();
  
  descriptionElement.textContent = description; 
  humidityElement.textContent = `Humidity: ${humidity}%`;
  weatherIconElement.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; 

  const bgImage = document.querySelector("#background-image");
  const bgImageUrl = getWeatherBackground(id);
  bgImage.src = bgImageUrl;

// Add error handling for background image
  bgImage.onerror = () => {
  console.error("Failed to load background image:", bgImageUrl);
  bgImage.src = hotGif; // Fallback to a default image
};
}


function getWeatherBackground(weatherID) {
  switch(true) {
    case (weatherID >= 200 && weatherID < 300):
      return thunderGif;
    case (weatherID >= 300 && weatherID < 400):
      return drizzleGif;
    case (weatherID >= 500 && weatherID < 600):
      return rainGif;
    case (weatherID >= 600 && weatherID < 700):
      return snowGif;
    case (weatherID >= 700 && weatherID <= 741):
      return foggyGif;
    case (weatherID >= 751 && weatherID <= 781):
      return sandyGif;
    case (weatherID === 800):
      return sunnyGif;
    case (weatherID > 800 && weatherID <= 804):
      return cloudyGif;
    default:
      return hotGif; 
  }
}


function displayError(message) {
  const errorDisplay = document.querySelector("#error-message p");
  const errorContainer = document.querySelector("#error-message");

  errorDisplay.textContent = message;  
  errorContainer.style.display = "block"; // Show the error message

  setTimeout(() => {
      errorContainer.style.display = "none"; // Hide after timeout
  }, 3000); 
}





