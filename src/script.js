function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day} | ${hours}:${minutes}`;
}

function showTemp(response) {
  console.log(response);
  console.log(response.data.main.temp_max);
  let currentTemp = (document.querySelector("#current-temp").innerHTML =
    Math.round(response.data.main.temp));
  let currentCity = (document.querySelector("#current-city").innerHTML =
    response.data.name);
  let currentCountry = (document.querySelector("#current-country").innerHTML =
    response.data.sys.country);
  let currentMin = (document.querySelector("#current-min").innerHTML =
    Math.round(response.data.main.temp_min));
  let currentMax = (document.querySelector("#current-max").innerHTML =
    Math.round(response.data.main.temp_max));
  let currentConditions = (document.querySelector(
    "#current-conditions"
  ).innerHTML = response.data.weather[0].description);
  let currentHumidity = (document.querySelector("#current-humidity").innerHTML =
    response.data.main.humidity);
  let currentWind = (document.querySelector("#current-wind").innerHTML =
    Math.round(response.data.wind.speed));
  let currentDate = (document.querySelector("#current-date").innerHTML =
    formatDate(response.data.dt * 1000));
  let currentIcon = document.querySelector("#icon");
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "26862e90492f1d5a7f51cde5dcc0d83b";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
}

function submitCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput.value);
  search(cityInput.value);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);
