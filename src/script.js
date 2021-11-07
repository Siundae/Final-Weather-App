function showTemp(response) {
  console.log(response);
  console.log(response.data.sys.country);
  console.log(Math.round(response.data.main.temp));
}

let apiKey = "26862e90492f1d5a7f51cde5dcc0d83b";
let units = "metric";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
axios.get(apiUrl).then(showTemp);
