const apiKey = "aeb9c9bd38f9ec21cd712457b58fe584";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const getWeather = async (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        const weather = await response.json();
        console.log(weather);

        document.querySelector(".temp").innerHTML = Math.round(weather.main.temp) + "°C";
        document.querySelector(".city").innerHTML = weather.name;
        document.querySelector(".humidity").innerHTML = weather.main.humidity + "%";
        document.querySelector(".wind").innerHTML = weather.wind.speed + " km/h";

        if (weather.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (weather.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (weather.weather[0].main == "Fog") {
            weatherIcon.src = "images/drizzle.png"
        } else if (weather.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        } else if (weather.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (weather.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        document.querySelector(".error").style.display = "none";
    }
};

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});