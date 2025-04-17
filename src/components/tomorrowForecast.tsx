import { useWeather } from "src/types/useWeather";

const TomorrowForecast = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar väder...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Kunde inte hämta väderdata.</p>;

  const tomorrow = weather.daily[1];

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Morgondagens prognos</h2>
      <p>{tomorrow.weather[0].description}</p>
      <p>Dagtemp: {tomorrow.temp.day} °C</p>
      <p>Morgontemp: {tomorrow.temp.morning ?? "Data saknas"} °C</p>
      <p>Eftermiddagstemp: {tomorrow.temp.evening ?? "Data saknas"} °C</p>
      <p>Min: {tomorrow.temp.min} °C, Max: {tomorrow.temp.max} °C</p>
    </div>
  );
};

export default TomorrowForecast;