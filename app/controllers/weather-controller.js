import WeatherService from "../services/weather-service.js";
import store from "../store.js";

function drawWeather() {
  let w = store.State.weather
  let template = w.wTemplate
  document.getElementById("weather-info").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
