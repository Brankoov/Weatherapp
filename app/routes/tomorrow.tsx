
import getWeatherEmoji from "src/utils/getWeatherEmoji";
import TomorrowForecast from "src/components/tomorrowForecast";
import ClothingRecommendation from "src/components/clothingRecommendation";
import ArrowButton from "src/components/arrowButton";
import styles from './tomorrow.module.css'; // Importera CSS-modulen
import { useContext } from "react";
import { WeatherContext } from "src/context/weatherContext";
import HourlyForecast from "src/components/hourlyForecast";

export default function Tomorrow() {
    const { weather, loading, error } = useContext(WeatherContext);
    console.log("Morgondagens väderdata:", weather?.daily[1]);
  if (loading) return <p>Hämtar vädret…</p>;
  if (error || !weather) return <p>Kunde inte hämta vädret.</p>;

  const desc = weather.daily[1].weather[0].description;

  // Dagens datum + 1 = imorgon
const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const tomorrowDay = tomorrowDate.getDate();

// Filtrera hourly-data för imorgon (kl 7–18)
const hourlyData = weather.hourly
  .map((h: any) => ({
    time: new Date(h.dt * 1000).toISOString(),
    weatherCode: h.weather[0].id,
    precipitation: h.rain?.["1h"] ?? 0,
  }))
  .filter((entry: { time: string }) => {
    const date = new Date(entry.time);
    const hour = date.getHours();
    return date.getDate() === tomorrowDay && hour >= 7 && hour <= 18;
  });

  return (
    <main className={styles.container}>
    <h1 className={styles.title}>Morgondagens prognos</h1>

    {/* Rad med pil, emoji+data, tom plats till höger */}
    <div className={styles.weatherRow}>
      {/* Pil till vänster */}
      <div className={styles.arrowColumn}>
        <ArrowButton to="/" direction="left" className={styles.arrowLeft} />
      </div>

      {/* Emoji + TomorrowForecast i mitten */}
      <div className={styles.weatherColumn}>
        <div className={styles.emoji}>{getWeatherEmoji(desc)}</div>
        <TomorrowForecast />
      </div>

      {/* Tom plats till höger */}
      <div />
    </div>    
    <HourlyForecast hourly={hourlyData} />
    <ClothingRecommendation dayIndex={1} />
  </main>
  );
}
    
      
        
        
        