export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);


    this.name = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = data.fahrenheit || Math.round((this.kelvin - 273.15) * (9 / 5) + 32)
    this.celsius = data.celsius || Math.round(this.kelvin - 273.15)
    console.log(this.fahrenheit, this.celsius)
  }

  get wTemplate() {
    return `
    <p class="bg-light text-dark">It is ${this.fahrenheit}°F or ${this.celsius}°C     in ${this.name} right now!</p>
    `
  }
}