import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
  console.log('drawing weather')
  const weather = AppState.weather
  //TODO you should have two template, one for C, one for F and based on the value of the weathers temp you draw one or the other
  setHTML('weather', weather.WeatherTemplate)
}

function _drawTempButton() {
  const weather = AppState.weather
  console.log('drawing temp button')
  setHTML('tempButton', weather.tempButton)
  console.log(weather.tempButton)
}

export class WeatherController {
  constructor() {
    console.log('hello from weather controller')
    AppState.on('weather', _drawWeather)
    AppState.on('weather', _drawTempButton)
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