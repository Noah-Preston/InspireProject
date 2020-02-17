import Weather from "../models/weather.js";
import store from "../store.js";

// @ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
  timeout: 3000
});

class WeatherService {
  getWeather() {
    weatherApi.get("").then(res => {
      let newWeather = new Weather(res.data)
      store.commit("weather", newWeather);
    })

  }
}
const weatherService = new WeatherService();
export default weatherService;
