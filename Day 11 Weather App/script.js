
async function getWeather (){


  let city = document.getElementById("city").value;

  let apiKey = "a0e0a85de2b9d98910d8110fe8763104";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  console.log(response);


  const data = await response.json();
  console.log(data);

document.getElementById("cityName").innerText = "📍 " + data.name;
document.getElementById("temperature").innerText = "🌡 " + data.main.temp + " °C";
document.getElementById("weather").innerText = "☁ " + data.weather[0].main;
document.getElementById("humidity").innerText = "💧 Humidity: " + data.main.humidity + "%";
document.getElementById("wind").innerText = "🌬 Wind: " + data.wind.speed + " km/h";

document.getElementById("result-box").style.display = "block";
  
}

