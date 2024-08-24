const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener('click',()=>{
    const APIKey='5e8fd5f3cd8bb381651b4f81b7e9a867';
    const city= document.querySelector('.search-box input').value;

    if (city =='')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response=>response.json()).then(json=>{

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch(json.weather[0].main){
            case'Clear':
            image.scr = 'image/clear.png';
            break;
            case'Rain':
            image.scr = 'image/rain.png';
            break;
            case'snow':
            image.scr = 'image/snow.png';
            break;
            case'mist':
            image.scr = 'image/mist.png';
            break;
            case'clouds':
            image.scr = "image/cloud.png";
            break;
            case'Haze':
            image.scr = 'image/mist.png';
            break;
            default:
                image.src = 'image/cloud.png'

        }
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C<span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    });




});