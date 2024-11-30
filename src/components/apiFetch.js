//apiFetch.js


// fetch weather API for both city and lat/lon
export async function fetchWeatherData(latOrCity, lon) {
  const apiKey = process.env.API_KEY; 
  let apiURL;

  if (typeof latOrCity === 'number' && typeof lon === 'number') {
    // Search by latitude and longitude
    apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latOrCity}&lon=${lon}&appid=${apiKey}&units=metric`;
  } else {
    // Search by city name
    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${latOrCity}&appid=${apiKey}&units=metric`;
  }

  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); 
    }

    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error); // More specific error message
  }
}

// Producing code for fetching user location
function fetchCurrentUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(lat,lon);
          resolve({ lat, lon });
        },
        (error) => {
          reject(error);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}

// Consuming code, handling getting weather data with user location
export async function getUserLocationAndWeather() {
  try {
    const { lat, lon } = await fetchCurrentUserLocation(); 
    console.log(`lat: ${lat}, lon: ${lon}`);
    
    const userCurrentWeather = await fetchWeatherData(lat, lon); 
    return userCurrentWeather;
  
  } catch (error) {
    console.error("We failed to fetch your location:", error);
    throw error; //Send error
  }
}


