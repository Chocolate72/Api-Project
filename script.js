const API_KEY = "4fcc708117ffaef58adff27d83b09a37";

function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(error => console.log(error));
}

function displayWeather(data) {
  if (data.cod !== 200) {
    document.getElementById("weatherResult").innerHTML = "City not found.";
    return;
  }

  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById("weatherResult").innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature: ${data.main.temp} °C</p>
    <p>Condition: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind Speed: ${data.wind.speed} m/s</p>
    <p>Sunrise: ${sunrise}</p>
    <p>Sunset: ${sunset}</p>
  `;
}
