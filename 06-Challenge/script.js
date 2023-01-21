cityName = document.querySelector("#input_city");
cityIndex = [];

async function searchCity() {
    cityName = "Toronto";
    var cityApiSearch = await fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid=bef9c29ceef752be853fa2c6c1c0c14d");
    var cityInfo = await cityApiSearch.json();

    console.log(cityInfo);

    var lat = cityInfo[0].lat;
    var lon = cityInfo[0].lon;

    var cityWeatherSearch = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=bef9c29ceef752be853fa2c6c1c0c14d")
    var weatherInfo = await cityWeatherSearch.json();

    console.log(weatherInfo);
    
}
searchCity();