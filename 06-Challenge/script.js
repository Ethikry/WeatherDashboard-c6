//Element variables
day1Temp = document.querySelector("#day1_temp");
day1Date = document.querySelector("#day1_date");
day1Wind = document.querySelector("#day1_wind");
day1Humidity = document.querySelector("#day1_humidity");
day1Icon = document.querySelector("#day1_icon");

day2Temp = document.querySelector("#day2_temp");
day2Date = document.querySelector("#day2_date");
day2Wind = document.querySelector("#day2_wind");
day2Humidity = document.querySelector("#day2_humidity");
day2Icon = document.querySelector("#day2_icon");

day3Temp = document.querySelector("#day3_temp");
day3Date = document.querySelector("#day3_date");
day3Wind = document.querySelector("#day3_wind");
day3Humidity = document.querySelector("#day3_humidity");
day3Icon = document.querySelector("#day3_icon");

day4Temp = document.querySelector("#day4_temp");
day4Date = document.querySelector("#day4_date");
day4Wind = document.querySelector("#day4_wind");
day4Humidity = document.querySelector("#day4_humidity");
day4Icon = document.querySelector("#day4_icon");

day5Temp = document.querySelector("#day5_temp");
day5Date = document.querySelector("#day5_date");
day5Wind = document.querySelector("#day5_wind");
day5Humidity = document.querySelector("#day5_humidity");
day5Icon = document.querySelector("#day5_icon");

nowTemp = document.querySelector("#now_temp");
nowDate = document.querySelector("#now_date");
nowWind = document.querySelector("#now_wind");
nowHumidity = document.querySelector("#now_humidity");
nowIcon = document.querySelector("#now_icon");

var pastSearches = [];
var searchHistory = document.getElementById("search_history");

async function searchCity(city) {
  var cityApiSearch = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=bef9c29ceef752be853fa2c6c1c0c14d"
  );
  var cityInfo = await cityApiSearch.json();

  var lat = cityInfo[0].lat;
  var lon = cityInfo[0].lon;

  var cityWeather5DaySearch = await fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=bef9c29ceef752be853fa2c6c1c0c14d&units=imperial"
  );
  var weather5Info = await cityWeather5DaySearch.json();

  var cityWeatherCurrentSearch = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=bef9c29ceef752be853fa2c6c1c0c14d&units=imperial"
  );
  var weatherCurrent = await cityWeatherCurrentSearch.json();

  //Variables to stor needed info
  var days = [
    {
      icon: "",
      date: [],
      temp: "",
      wind: "",
      humidity: "",
    },
    {
      icon: "",
      date: [],
      temp: "",
      wind: "",
      humidity: "",
    },
    {
      icon: "",
      date: [],
      temp: "",
      wind: "",
      humidity: "",
    },
    {
      icon: "",
      date: [],
      temp: "",
      wind: "",
      humidity: "",
    },
    {
      icon: "",
      date: [],
      temp: "",
      wind: "",
      humidity: "",
    },
  ];

  var weatherNow = {
    icon: "",
    date: [],
    temp: "",
    wind: "",
    humidity: "",
  };

  //Fill dict with weather info
  for (i = 0; i < days.length; i += 1) {
    days[i].icon = weather5Info.list[(i + 1) * 7 + i].weather[0].icon;
    days[i].date = weather5Info.list[(i + 1) * 7 + i].dt_txt.split("-");
    days[i].temp = weather5Info.list[(i + 1) * 7 + i].main.temp;
    days[i].wind = weather5Info.list[(i + 1) * 7 + i].wind.speed;
    days[i].humidity = weather5Info.list[(i + 1) * 7 + i].main.humidity;
  }

  weatherNow.icon = weatherCurrent.weather[0].icon;
  weatherNow.date = weather5Info.list[0].dt_txt.split("-");
  weatherNow.temp = weatherCurrent.main.temp;
  weatherNow.wind = weatherCurrent.wind.speed;
  weatherNow.humidity = weatherCurrent.main.humidity;

  function displayWeather() {
    day1Temp.innerText = "Temp: " + days[0].temp;
    day1Date.innerText =
      days[0].date[1] +
      "-" +
      days[0].date[2].slice(0, 2) +
      "-" +
      days[0].date[0];
    day1Wind.innerText = "Wind " + days[0].wind;
    day1Humidity.innerText = "Humidity: " + days[0].humidity + "%";
    day1Icon.src =
      "http://openweathermap.org/img/wn/" + days[0].icon + "@2x.png";
    day1Icon.style.display = "block";

    day2Temp.innerText = "Temp: " + days[1].temp;
    day2Date.innerText =
      days[1].date[1] +
      "-" +
      days[1].date[2].slice(0, 2) +
      "-" +
      days[1].date[0];
    day2Wind.innerText = "Wind: " + days[1].wind;
    day2Humidity.innerText = "Humidity: " + days[1].humidity + "%";
    day2Icon.src =
      "http://openweathermap.org/img/wn/" + days[1].icon + "@2x.png";
    day2Icon.style.display = "block";

    day3Temp.innerText = "Temp: " + days[2].temp;
    day3Date.innerText =
      days[2].date[1] +
      "-" +
      days[2].date[2].slice(0, 2) +
      "-" +
      days[2].date[0];
    day3Wind.innerText = "Wind: " + days[2].wind;
    day3Humidity.innerText = "Humidity: " + days[2].humidity + "%";
    day3Icon.src =
      "http://openweathermap.org/img/wn/" + days[2].icon + "@2x.png";
    day3Icon.style.display = "block";

    day4Temp.innerText = "Temp: " + days[3].temp;
    day4Date.innerText =
      days[3].date[1] +
      "-" +
      days[3].date[2].slice(0, 2) +
      "-" +
      days[3].date[0];
    day4Wind.innerText = "Wind: " + days[3].wind;
    day4Humidity.innerText = "Humidity: " + days[3].humidity + "%";
    day4Icon.src =
      "http://openweathermap.org/img/wn/" + days[3].icon + "@2x.png";
    day4Icon.style.display = "block";

    day5Temp.innerText = "Temp: " + days[4].temp;
    day5Date.innerText =
      days[4].date[1] +
      "-" +
      days[4].date[2].slice(0, 2) +
      "-" +
      days[4].date[0];
    day5Wind.innerText = "Wind: " + days[4].wind;
    day5Humidity.innerText = "Humidity: " + days[4].humidity + "%";
    day5Icon.src =
      "http://openweathermap.org/img/wn/" + days[4].icon + "@2x.png";
    day5Icon.style.display = "block";

    nowTemp.innerText = "Temp: " + weatherNow.temp;
    nowDate.innerText =
      weatherNow.date[1] +
      "-" +
      weatherNow.date[2].slice(0, 2) +
      "-" +
      weatherNow.date[0];
    nowWind.innerText = "Wind: " + weatherNow.wind;
    nowHumidity.innerText = "Humidity: " + weatherNow.humidity + "%";
    nowIcon.src =
      "http://openweathermap.org/img/wn/" + weatherNow.icon + "@2x.png";
    nowIcon.style.display = "block";
  }
  displayWeather();
}

$("input").on("keydown", function search(e) {
  if (e.keyCode == 13) {
    cityName = document.querySelector("#input_city");
    searchCity(cityName.value);
    placeName = document.querySelector("#place_name");
    placeName.innerText = cityName.value;

    if (localStorage["pastSearches"]) {
      pastSearches = JSON.parse(localStorage["pastSearches"]);
    }

    if (pastSearches.indexOf(cityName.value) == -1) {
      pastSearches.unshift(cityName.value);
      if (pastSearches.length > 8) {
        pastSearches.pop();
      }

      searchHistory.innerHTML = "";

      for (var i = 0; i < pastSearches.length; i++) {
        var searchItem = document.createElement("li");
        var searchAnchor = document.createElement("a");
        var searchLink = document.createTextNode(pastSearches[i]);
        searchAnchor.appendChild(searchLink);
        searchAnchor.title = cityName.value;
        searchAnchor.href = "#";
        searchItem.appendChild(searchAnchor);
        searchHistory.appendChild(searchItem);
      }

      localStorage["pastSearches"] = JSON.stringify(pastSearches);
    }
  }
});