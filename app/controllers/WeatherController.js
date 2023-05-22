import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
  console.log('drawing weather')
  const weather = AppState.weather
  setHTML('weather', weather.WeatherTemplate)
}

export class WeatherController {
  constructor() {
    console.log('hello from weather controller')
    AppState.on('weather', _drawWeather)
    this.getWeather()
  }
  
  async getWeather() {
    try {
      console.log('waiting on service for weather')
      await weatherService.getWeather()
    } catch (error) {
    console.error('error', error)
    Pop.toast('Weather not weathering', error)
  }
  
}

  async toggleTemp() {
    try {
      weatherService.toggleTemp()
    } catch (error) {
      console.error('error', error)
      Pop.toast('Temp not toggling! ♻️', error)
    }
  }

  async cfSwitch() {
    try {
      weatherService.cfSwitch()
    } catch (error) {
      console.error('error', error)
      Pop.toast('Temp not toggling! ♻️', error)
    }
  }










}