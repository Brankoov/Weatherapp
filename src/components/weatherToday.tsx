import { useWeather } from "src/types/useWeather";

const WeatherToday = () => {
    const { weather, loading, error } = useWeather();
  
    if (loading) return <p>Hämtar väder...</p>;
    if (error) return <p>{error}</p>;
    if (!weather) return <p>Kunde inte hämta väderdata.</p>;
  
    const today = weather.daily[0]; 
    const { day, min, max } = today.temp;
    const { description } = today.weather[0];
    const wind = today.wind_speed;
    const rain = today.rain ?? 0;
  
    return (
      <div>
        <h2>Vädret idag</h2>
        <p>{description}</p>
        <p>Temperatur: {day} °C</p>
        <p>Min: {min} °C, Max: {max} °C</p>
        <p>Vind: {wind} m/s</p>
        <p>Regn: {rain > 0 ? `${rain} mm väntas idag` : "Inget regn"}</p>
      </div>
    );
  };
  
  export default WeatherToday;