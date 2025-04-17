import { useWeather } from "src/types/useWeather";

const WeatherToday = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar väder...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Kunde inte hämta väderdata.</p>;

  const { temp, weather: weatherInfo, wind_speed } = weather.current;

  return (
    <div>
      <h2>Vädret idag</h2>
      <p>{weatherInfo[0].description}</p>
      <p>Temperatur: {temp} °C</p>
      <p>Vind: {wind_speed} m/s</p>
    </div>
  );
};

export default WeatherToday;