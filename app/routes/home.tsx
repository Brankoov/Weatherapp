import type { Route } from "./+types/home";
import { useWeather } from "src/types/useWeather";
import getWeatherEmoji from "src/utils/getWeatherEmoji";
import WeatherToday from "src/components/weatherToday";
import ClothingRecommendation from "src/components/clothingRecommendation";
import ArrowButton from "src/components/arrowButton";
import styles from './home.module.css'; // Importera CSS-modulen

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Kolla dagens väder och få klädtips" },
  ];
}

export default function Home() {
  const { weather, loading, error } = useWeather();

  if (loading) return <p>Hämtar vädret…</p>;
  if (error || !weather) return <p>Kunde inte hämta vädret.</p>;

  const desc = weather.current.weather[0].description;

  console.log("Väder‑description:", JSON.stringify(desc)); 

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Kläder för väder!</h1>

      {/* Rad med emoji+data och pil */}
      <div className={styles.weatherContainer}>
        {/* Emoji + WeatherToday i en kolumn */}
        
        <div className={styles.weatherColumn}>
          <div className={styles.emoji}>{getWeatherEmoji(desc)}</div>
          
          <WeatherToday />
        </div>

        {/* Pil till höger */}
        <ArrowButton to="/tomorrow" direction="right" className={styles.arrowRight} />
      </div>

      <ClothingRecommendation />
    </main>
  );
}