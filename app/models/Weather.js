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

  get tempButton() {
    if (this.toggle) {
      return /*html*/`
      <label for="temp" class="text-light">Feels Like:${this.feelsLikeF} °F</label>
      <h6 name="tempButton" id="tempButton" role="button" onclick="app.WeatherController.toggleTemp()" class="card-text text-light">${this.fahrenheit} + °F</h6> 
      `
    } else {
      return /*html*/`
      <label for="temp" class="text-light">Feels Like:${this.feelsLikeC} °C</label>
      <h6 name="tempButton" id="tempButton" role="button" onclick="app.WeatherController.toggleTemp()" class="card-text text-light">${this.celsius} + °C</h6>`
    }
      
  }

  get WeatherTemplate() {
    return /*html*/`
  <div class="card row bg-dark d-flex" style="opacity: .9;">
    <div class="col-6 offset-4">
      <img class="card-img-top img-fluid mb-2" style="width: 4rem; height: 4rem; margin-left: 3rem;" src="http://openweathermap.org/img/wn/${this.icon}.png" alt="${this.title}">
      <h6 class="card-text text-light text-muted" style="width: 100%; height: 3rem; margin-right: 2rem;">${this.title} / ${this.description}</h6>
    </div>
    <div class=" col-6">
      <div class="card-body">
        <h5 class="card-title text-light">${this.location}</h5>>
        ${this.tempButton}        
        <ul>
          <li class="card-text text-light" style="font-size: .8rem;">Humidity: ${this.humidity}%</li>
          <li class="card-text text-light" style="font-size: .8rem;">Wind Velocity: ${this.wind}mph</li>
        </ul>
      </div>
    </div>
  </div>

    `
  }

















}
