import React from "react";
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "61152ef0e097664181314a2ce9980793";
class AppWeather extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {

      const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

      const data = await api_url.json();

      const message = data.cod;

      if (data.cod != 404) {
        console.log(data);
        const sunset = data.sys.sunset
        const dateSunset = new Date();
        dateSunset.setTime(sunset);
        const sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: undefined

        });

      } else {
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Вы ввели некоректное название города , повторите попытку "
        });

      }
    }

    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите название города"
      });

    }

  }
  render() {
    return (
      <div className="wrapper">
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default AppWeather;