// let input = document.querySelector('#get');
// let  button = document.querySelector('#select');
// let  icon = document.querySelector('#icon');
// let  cal = document.querySelector('#cal');
// let  city_name = document.querySelector('#city');
// let  humidity = document.querySelector('#humi');
// let  speed = document.querySelector('#speed');


// const data = async function(search) {
//     let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d3d7ca8fc96b4e392d890de1a4c78b9&units=metric`)
//     let jsonData = await getData.json();
//     console.log(jsonData);
//     cal.innerHTML =parseInt(jsonData.main.temp);
//     city_name.innerHTML = jsonData.name;
//     speed.innerHTML = jsonData.wind.speed + "Km/h";
//     humidity.innerHTML = jsonData.main.humidity + "%"
//     input.value = "";
    
//     let type = jsonData.weatherArray[0].main;
//     icon.src = "suny.png";
    
    
    
    
// }

// function action() {
//     let search = input.value;
//     data(search);
// }

// action();
let input = document.querySelector('#get');
let button = document.querySelector('#select');
let icon = document.querySelector('#icon');
let cal = document.querySelector('#cal');
let city_name = document.querySelector('#city');
let humidity = document.querySelector('#humi');
let speed = document.querySelector('#speed');

const data = async function (search) {
    try {
        let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d3d7ca8fc96b4e392d890de1a4c78b9&units=metric`);
        if (!getData.ok) {
            throw new Error('City not found');
        }
        let jsonData = await getData.json();
        console.log(jsonData);

        // Update the UI with fetched data
        cal.innerHTML = parseInt(jsonData.main.temp) + "°C";
        city_name.innerHTML = jsonData.name;
        speed.innerHTML = jsonData.wind.speed + " Km/h";
        humidity.innerHTML = jsonData.main.humidity + "%";
        input.value = "";

        // Update icon based on weather type
        let type = jsonData.weather[0].main.toLowerCase();
        if (type.includes('cloud')) {
            icon.src = "clouds.png"; // Replace with your cloudy icon path
        } else if (type.includes('rain')) {
            icon.src = "rain.png"; // Replace with your rainy icon path
        } else if (type.includes('sun')) {
            icon.src = "suny.png"; // Replace with your sunny icon path
        } else if (type.includes('mist')) {
            icon.src = "mist.png"; // Replace with your sunny icon path
        }else if (type.includes('snow')) {
            icon.src = "snow.png"; // Replace with your sunny icon path
        }else {
            icon.src = "clear.png"; // Replace with a default weather icon path
        }
    } catch (error) {
        console.error(error);
        alert('Unable to fetch weather data. Please check the city name.');
    }
};

function action() {
    let search = input.value.trim();
    if (search) {
        data(search);
    } else {
        alert('Please enter a city name');
    }
}

// Add event listener for button click
button.addEventListener('click', action);
