// creating an object for app
const app = {};
// create a property to hold the key
app.key = `YOUR_API_KEY`;
// 
$(function () {
  app.init();
});

app.init = function () {

}
// code off the app goes here
function getWeather(city) {
  $.ajax({
    url: "http://api.weatherstack.com/current",
    type: "GET",
    dataType: "json",
    data: {
      access_key: app.key,
      query: city
    }
  }).then(response => {
    console.log(response)
    app.displayWeather(response)

  });

  app.displayWeather = function (weather) {
    $(".name").html(weather.location.name);
    $(".country").html(weather.location.country);
    $(".weather_descriptions").html(weather.current.descriptions);
    $(".temperature").html(weather.current.temp_f + "°C");
    $(".wind").html(weather.current.wind + "kmph");
    $(".humidity").html(weather.current.humidity);
    $(".feelslike").html(weather.current.feelslike);
    $(".uv_index").html(weather.current.uv_index);
    $(".weather_icons").html(weather.current.condition);
    $(".icon").html(`<img src="${weather.current.icon}" alt="" />`);
  }
  console.log(data);

}
error = function () {
  console.log("Error geting weather for your location.");
}



// get the user location
$.ajax({
  url: "https://ipinfo.io",
  method: 'GET',
  dataType: "json",
  // pre-request callback function that can be used to modify the XMLHTTPRequest
  beforeSend: function (req) {
    // set the value of an HTTP request header, token is merged into one single request header
    req.setRequestHeader('Authorization', "YOUR_API_KEY");
  }
  // returning request 
}).then(response => {
  getWeather(response.city)
});
