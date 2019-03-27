class Weather {
  constructor(city, country) {
    this.apiKey = "813768d60bd276d90556bcfc43b3e6a7";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
