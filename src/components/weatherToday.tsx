import React from "react";
import type { WeatherData } from "../types/weather";

type Props = {
  weather: WeatherData;
};

const WeatherToday: React.FC<Props> = ({ weather }) => {
  const current = weather.current;

  return (
    <div>
      <h2>Dagens väder</h2>
      <p>{current.weather[0].description}</p>
      <p>Temperatur: {current.temp} °C</p>
      <p>Vind: {current.wind_speed} m/s</p>
    </div>
  );
};

export default WeatherToday;