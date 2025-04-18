import { useWeather } from "src/types/useWeather";

const WeatherToday = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar väder...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Kunde inte hämta väderdata.</p>;

  const { temp, weather: weatherInfo, wind_speed} = weather.current;
  const today = weather.daily[0]; 
  const rainAmount = weather.current.rain?.['1h'] ?? 0;

  return (
    <div>
      <h2>Vädret idag</h2>
      <p>{weatherInfo[0].description}</p>
      <p>Temperatur: {temp} °C</p>
      <p>Min: {today.temp.min} °C, Max: {today.temp.max} °C</p>
      <p>Vind: {wind_speed} m/s</p>
      <p>Regn: {rainAmount > 0 ? `${rainAmount} mm senaste timmen` : "Inget regn"}</p>
    </div>
  );
};

export default WeatherToday;