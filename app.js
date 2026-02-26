const apiKey = "YOUR_API_KEY";
const city = "London";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiURL)
    .then(function(response) {
        const data = response.data;

        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;

        document.getElementById("city-name").textContent = cityName;
        document.getElementById("temperature").textContent = `Temperature: ${temperature}°C`;
        document.getElementById("description").textContent = `Condition: ${description}`;

        const iconURL = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById("weather-icon").src = iconURL;
    })
    .catch(function(error) {
        console.error("Error fetching weather data:", error);
    });
