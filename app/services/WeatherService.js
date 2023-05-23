import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
class WeatherService {
  
  async getWeather() {
    const res = await api.get('api/weather')
    AppState.weather = new Weather(res.data)
    console.log(res.data)
  }

  async toggleTemp() {
    console.log('toggling temp')
    document.querySelector('#tempButton').innerHTML = AppState.weather.toggle ? AppState.weather.fahrenheit : AppState.weather.celsius
    AppState.weather.toggle = !AppState.weather.toggle
    console.log(AppState.weather.toggle)
  }




}
export const weatherService = new WeatherService()