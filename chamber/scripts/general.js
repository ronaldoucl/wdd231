document.addEventListener("DOMContentLoaded", function () {
  startFooter();
  getCurrentWeather();
});

function startFooter() {
  const currentYearElement = document.getElementById("currentyear");
  const lastModificationElement = document.getElementById("lastModified");
  const today = new Date();
  currentYearElement.innerHTML = today.getFullYear();
  lastModificationElement.innerHTML = "Last Modification: " + document.lastModified;
}

function getCurrentWeather() {
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=10.01625&lon=-84.21163&appid=15b104b966811b5382e26cdf3d4d7be9";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const F = data.main.temp;
      const weatherTitle = data.weather[0].description;
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
    })
    .catch((error) => {
      console.error(error.message);
    });
}
