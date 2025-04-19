import { useWeather } from "src/types/useWeather";
import getWeatherEmoji from "src/utils/getWeatherEmoji";
import TomorrowForecast from "src/components/tomorrowForecast";
import ClothingRecommendation from "src/components/clothingRecommendation";
import ArrowButton from "src/components/arrowButton";
import styles from './tomorrow.module.css'; // Importera CSS-modulen

export default function Tomorrow() {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar vädret…</p>;
  if (error || !weather) return <p>Kunde inte hämta vädret.</p>;

  const desc = weather.daily[1].weather[0].description;

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Morgondagens prognos</h1>

      {/* Rad med pil, emoji+data */}
      <div className={styles.weatherContainer}>
        {/* Pil till vänster */}
        <ArrowButton to="/" direction="left" />

        {/* Emoji + TomorrowForecast i en kolumn */}
        <div className={styles.weatherColumn}>
          <div className={styles.emoji}>{getWeatherEmoji(desc)}</div>
          <TomorrowForecast />
        </div>
      </div>

      <ClothingRecommendation dayIndex={1} />
    </main>
  );
}
    
      
        
        
        