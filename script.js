function getWeather() {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput.trim() === '') {
        alert('Please enter a city.');
        return;
    }

    const apiKey = '3fd4b1a917890a709060939787608e4c'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}


function displayWeather(data) {
    const cityNameElement = document.getElementById('cityName');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const humidityElement = document.getElementById('humidity');
    const dateTimeElement = document.getElementById('dateTime');

    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const dateTime = new Date(data.dt * 1000); // Convert timestamp to milliseconds

    cityNameElement.textContent = cityName;
    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${description}`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    dateTimeElement.textContent = `Date and Time: ${dateTime.toLocaleString()}`;

    const weatherInfoContainer = document.getElementById('weatherInfo');
    weatherInfoContainer.classList.add('fade-in');
}



// function displayWeather(data) {
//     const weatherInfoContainer = document.getElementById('weatherInfo');
//     weatherInfoContainer.innerHTML = '';

//     const cityName = data.name;
//     const temperature = data.main.temp;
//     const description = data.weather[0].description;

//     const weatherInfo = document.createElement('div');
//     weatherInfo.innerHTML = `
//         <h2>${cityName}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Description: ${description}</p>
//     `;

//     weatherInfoContainer.appendChild(weatherInfo);
// }