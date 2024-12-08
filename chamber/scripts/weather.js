const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?lat=10.01625&lon=-84.21163&appid=15b104b966811b5382e26cdf3d4d7be9";
const WEATHER_FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast?lat=10.01625&lon=-84.21163&appid=15b104b966811b5382e26cdf3d4d7be9';

function getCurrentWeather() {
    const container = document.getElementById('current-weather');
    const div = document.createElement('div');
      fetch(CURRENT_WEATHER_URL)
    .then((response) => {
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const F = data.main.temp;
      const description = data.weather[0].description;
      const high = data.main.temp_max;
      const low = data.main.temp_min;
      const humidity = data.main.humidity;
      const sunrise = data.sys.sunrise;
      const sunset = data.sys.sunset;
      div.innerHTML = `
        <p><strong>${kelvinToFahrenheit(F)}° F</strong></p>
        <p>${description}</p>
        <p>High: ${kelvinToFahrenheit(high)}°</p>
        <p>Low: ${kelvinToFahrenheit(low)}°</p>
        <p>Humidity: ${humidity}</p>
        <p>Sunrise: ${sunrise}</p>
        <p>Sunset: ${sunset}</p>
      `;
        if(container){
          container.appendChild(div);
        }
    })
    .catch((error) => {
      console.error(error.message);
    });
}

function getWeatherForecast(){
    const container = document.getElementById('weather-forecast');
    const div = document.createElement('div');
    fetch(WEATHER_FORECAST_URL)
    .then((response) => {
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
        const forecast = data.list
        const todayForecast = getForecastForDay(forecast, 0);
        const tomorrowForecast = getForecastForDay(forecast, 1);
        const dayAfterTomorrowForecast = getForecastForDay(forecast, 2);
        const todayTemp = calculateAverageTemp(todayForecast);
        const tomorrowTemp = calculateAverageTemp(tomorrowForecast);
        const dayAfterTomorrowTemp = calculateAverageTemp(dayAfterTomorrowForecast);
      div.innerHTML = `
        <p>Today: <strong>${todayTemp}° F</strong></p>
        <p>${getDayName(1)}: <strong>${tomorrowTemp}° F</strong></p>
        <p>${getDayName(2)}: <strong>${dayAfterTomorrowTemp}° F</strong></p>
      `;
      if(container){
        container.appendChild(div);
      }
    })
    .catch((error) => {
      console.error(error.message);
    });
}


function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(2); 
}

function getForecastForDay(forecast, daysFromToday) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromToday); 
    const targetDay = targetDate.toISOString().split('T')[0]; 
  
    return forecast.filter(item => item.dt_txt.startsWith(targetDay));
  }

function calculateAverageTemp(dayForecast) {
    const totalTemp = dayForecast.reduce((sum, item) => sum + item.main.temp, 0);
    result = (totalTemp / dayForecast.length).toFixed(2); 
    return kelvinToFahrenheit(result);
}

function getDayName(daysFromToday) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + daysFromToday);
    return daysOfWeek[targetDate.getDay()];
}