export class Weather {
  constructor(data) {
    this.location = data.name
    this.fahrenheit = Math.round (data.main.temp * 9/5 - 459.67)
    this.celsius = Math.round (data.main.temp - 273.15)
    this.humidity = data.main.humidity
    this.feelsLikeF = Math.round(data.main.feels_like * 9/5 - 459.67)
    this.feelsLikeC = Math.round(data.main.feels_like - 273.15)
    this.wind = Math.round(data.wind.speed)
    this.title = data.weather[0].main
    this.description = data.weather[0].description
    this.icon = data.weather[0].icon
    this.toggle = false
  }

  get WeatherTemplate() {
    return /*html*/`
    <div class="card col-3 offset-8 bg-dark" style="opacity: .9; position: absolute; right: 1rem; bottom: 2rem;">
      <div class="card-header text-center bg-light mt-3">
        <img class="card-img-top img-fluid" style="width: 3rem; height: 3rem;" src="http://openweathermap.org/img/wn/${this.icon}.png" alt="${this.title}">
      </div>
      <div class="card-body">
        <h4 class="card-title text-light">${this.location}</h4>
        <h5 class="card-text text-light pb-2">${this.title} / ${this.description}</h5>
        <input id="temp"
          type="checkbox" 
          onchange="app.WeatherController.toggleTemp()">
        <p onclick="app.WeatherController.toggleTemp()" class="card-text text-light" id="fahrenheit">Temp: ${this.fahrenheit}°F / Feels Like: ${this.feelsLikeF}°F</p>
        <p class="card-text text-light" id="celsius">Temp: ${this.celsius}°C / Feels Like: ${this.feelsLikeC}°C</p>
        <ul>
          <li class="card-text text-light">Humidity: ${this.humidity}%</li>
          <li class="card-text text-light">Wind Velocity: ${this.wind}mph</li>
        </ul>
      </div>
    </div>
    `
  }

















}
