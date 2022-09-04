let search = document.getElementById('search');
let city = document.querySelector('.city');
let weatherLoading = document.getElementById('weather-loading');
let locationForm = document.getElementById('location-form');
let temperature = document.querySelector('.temp');
let Humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.wind');
let Description = document.querySelector('.description');
const likeButton = document.getElementById('like-button')
const likeCount = document.getElementById('like-count');
const icon = document.querySelector('.icon');


// define likes count
let likesCounter = 0;
likeCount.textContent = `${ likesCounter } `;

search.addEventListener('click',event =>{
    event.preventDefault();
    let locationSearch = locationForm.locationSearch.value;

    

    // fetch data

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=faa70cbaae7edf4ddc280057abe67d2c`)
.then(res => res.json())
.then(data => {
 
    weatherLoading.classList.remove('weather-loading');
    city.innerHTML = `Weather in ${locationSearch}`;
    temperature.innerHTML = `${data.main.temp} K`;
    Humidity.innerHTML = `Humidity: ${data.main.humidity} % `;
    windSpeed.innerHTML = `WindSpeed: ${data.wind.speed} km/h`;
    Description.innerText = `${data.weather[0].description}`;

    icon.setAttribute('src', `https://openweathermap.org/img/wn/${ data.weather[0].icon }.png`)
 
}).catch(data => {
    city.innerHTML = "Error! Location Can't be Found"; 
})
})

// implementing increase likes function

// listen to click event listener
const incrementFunction = () => {
    likesCounter++;
    likeCount.textContent = `${ likesCounter } likes`;
}
likeButton.addEventListener('click', incrementFunction)


