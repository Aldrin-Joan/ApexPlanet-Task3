const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('New York', 'metric');
    themeToggleFn();
});

async function weatherFn(cName, unit = 'metric') {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=${unit}`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data, unit);
            addToHistory(cName);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data, unit) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`Temperature: ${data.main.temp}°${unit === 'metric' ? 'C' : 'F'}`);
    $('#feels-like').html(`Feels Like: ${data.main.feels_like}°${unit === 'metric' ? 'C' : 'F'}`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#humidity').html(`Humidity: ${data.main.humidity}%`);
    $('#pressure').html(`Pressure: ${data.main.pressure} hPa`);
    $('#visibility').html(`Visibility: ${data.visibility / 1000} km`);
    $('#sunrise').html(`Sunrise: ${moment(data.sys.sunrise * 1000).format('h:mm A')}`);
    $('#sunset').html(`Sunset: ${moment(data.sys.sunset * 1000).format('h:mm A')}`);
    $('#weather-icon').attr('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $('#weather-info').fadeIn();
}

function addToHistory(city) {
    const historyList = $('#search-history');
    historyList.append(`<li>${city}</li>`);
}

$('#city-input-btn').click(() => {
    const city = $('#city-input').val();
    const unit = $('#unit-select').val();
    weatherFn(city, unit);
});

function themeToggleFn() {
    $('#theme-toggle').click(() => {
        $('body').toggleClass('dark-theme');
    });
}
