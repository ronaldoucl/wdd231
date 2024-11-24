/*export function getCurrentWeather() {
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
      return data;
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function getWeatherForecast() {}
*/