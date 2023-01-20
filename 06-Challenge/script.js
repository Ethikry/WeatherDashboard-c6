API key: bef9c29ceef752be853fa2c6c1c0c14d
var requestLatLonURL = "https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid={bef9c29ceef752be853fa2c6c1c0c14d}"
var requestCityURL = ""

cityName = document.querySelector("input_city");
cityIndex = [];


function searchCity() {
    requestCityURL = "http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid={bef9c29ceef752be853fa2c6c1c0c14d}"
    cityResult = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={bef9c29ceef752be853fa2c6c1c0c14d}";
}