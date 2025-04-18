import { useWeather } from "src/types/useWeather";

const TomorrowForecast = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar väder...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Kunde inte hämta väderdata.</p>;

  const tomorrow = weather.daily[1];

  return (
    <div>
      <h2>Vädret imorgon</h2>      
      <p>{tomorrow.weather[0].description}</p>
      <p>Dagtemp: {tomorrow.temp.day} °C</p>
      <p>Min: {tomorrow.temp.min} °C, Max: {tomorrow.temp.max} °C</p>
      <p>Morgontemp: {tomorrow.temp.morn ?? "Data saknas"} °C</p>
      <p>Eftermiddagstemp: {tomorrow.temp.eve ?? "Data saknas"} °C</p>
      <p>Vind: {tomorrow.wind_speed} m/s </p>
      <p>Regn: {typeof tomorrow.rain === "number" ? `${tomorrow.rain} mm` : "Inget regn"}</p>
    </div>
  );
};

export default TomorrowForecast;