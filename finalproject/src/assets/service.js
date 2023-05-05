function getweatherweekly(){
  var city=document.getElementById("search").value;
  fetch("http://api.weatherstack.com/historical?access_key=2e67ddb608d0f7d5e5213848ead4f0b4&query="+city+"&units=f&historical_date=2023-05-03&hourly=1")
  .then(a=>a.json())
  .then(response => {
    document.getElementById("output").innerHTML="<h12AM: "
      +response.historical['2023-05-03'].hourly[0].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[0].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[0].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[0].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[0].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[0].cloudcover+"<br><br>"

      +"<h3>3AM: "
      +response.historical['2023-05-03'].hourly[1].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[1].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[1].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[1].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[1].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[1].cloudcover+"<br><br>"

      +"<h3>6AM: "
      +response.historical['2023-05-03'].hourly[2].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[2].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[2].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[2].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[2].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[2].cloudcover+"<br><br>"

      +"<h3>9AM: "
      +response.historical['2023-05-03'].hourly[3].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[3].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[3].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[3].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[3].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[3].cloudcover+"<br><br>"

      +"<h3>12PM: "
      +response.historical['2023-05-03'].hourly[4].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[4].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[4].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[4].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[4].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[4].cloudcover+"<br><br>"

      +"<h3>3PM: "
      +response.historical['2023-05-03'].hourly[5].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[5].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[5].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[5].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[5].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[5].cloudcover+"<br><br>"

      +"<h3>6PM: "
      +response.historical['2023-05-03'].hourly[6].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[6].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[6].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[6].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[6].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[6].cloudcover+"<br><br>"

      +"<h3>9PM: "
      +response.historical['2023-05-03'].hourly[7].weather_descriptions[0]+"</h3>Temperature: "
      +response.historical['2023-05-03'].hourly[7].temperature+"<br>Feels like "
      +response.historical['2023-05-03'].hourly[7].feelslike+"<br>UV Index: "
      +response.historical['2023-05-03'].hourly[7].uv_index+"<br>Humidity: "
      +response.historical['2023-05-03'].hourly[7].humidity+"<br>Cloud Cover: "
      +response.historical['2023-05-03'].hourly[7].cloudcover+"<br><br>"

});
}

function getweather(){
  var city=document.getElementById("search").value;
  fetch("http://api.weatherstack.com/current?access_key=2e67ddb608d0f7d5e5213848ead4f0b4&query="+city+"&units=f")
  .then(a=>a.json())
  .then(response => {
    document.getElementById("image").src = response.current.weather_icons[0];
    document.getElementById("output").innerHTML="<h1>"
      +response.current.weather_descriptions[0]+"</h1>Temperature: "
      +response.current.temperature+"<br>Feels like "
      +response.current.feelslike+"<br>UV Index: "
      +response.current.uv_index+"<br>Humidity: "
      +response.current.humidity+"<br>Cloud Cover: "
      +response.current.cloudcover;

  });
}
