import type { Route } from "./+types/home";
import { useWeather } from "src/types/useWeather";
import getWeatherEmoji from "src/utils/getWeatherEmoji";
import WeatherToday from "src/components/weatherToday";
import ClothingRecommendation from "src/components/clothingRecommendation";
import ArrowButton from "src/components/arrowButton";
import styles from './home.module.css'; // Importera CSS-modulen
import HourlyForecast from "src/components/hourlyForecast";
import type { WeatherData } from "src/types/weather";
import type { HourlyItem } from "src/types/weather";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Kolla dagens väder och få klädtips" },
  ];
}

export default function Home() {
  const { weather, loading, error } = useWeather() as unknown as {
    weather: WeatherData;
    loading: boolean;
    error: boolean;
  };

  if (loading) return <p>Hämtar vädret…</p>;
  if (error || !weather) return <p>Kunde inte hämta vädret.</p>;

  const desc = weather.current.weather[0].description;

  console.log("Väder‑description:", JSON.stringify(desc)); 
  

   // Mappa om API:ts hourly-data till HourlyForecasts props-format
   const today = new Date(weather.current.dt * 1000);
   const todayDate = today.getDate();
   const hourlyData = weather.hourly
   
  .map((h: HourlyItem) => ({
    time: new Date(h.dt * 1000).toISOString(),
    weatherCode: h.weather[0].id,
    precipitation: h.rain?.["1h"] ?? 0,
  }))
  .filter((entry: { time: string | number | Date; }) => {
    const date = new Date(entry.time);
    const hour = date.getHours();
    const isToday = date.getDate() === todayDate;
    return isToday && hour >= 7 && hour <= 18;
  });

/*  const hourlyData = [
    { time: "2025-04-23T07:00", weatherCode: 0, precipitation: 0 },
    { time: "2025-04-23T08:00", weatherCode: 1, precipitation: 0 },
    { time: "2025-04-23T09:00", weatherCode: 2, precipitation: 0.2 },
    { time: "2025-04-23T10:00", weatherCode: 3, precipitation: 0.5 },
    { time: "2025-04-23T11:00", weatherCode: 4, precipitation: 1.2 },
    { time: "2025-04-23T12:00", weatherCode: 4, precipitation: 0.8 },
    { time: "2025-04-23T13:00", weatherCode: 2, precipitation: 0 },
  ]; */

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Kläder för väder!</h1>
  
      {/* Rad med tom kolumn, väderdatan och pilen */}
      <div className={styles.weatherRow}>
        {/* Tom kolumn till vänster för att centrera väderkolumnen */}
        <div />
  
        {/* Emoji + WeatherToday */}
        <div className={styles.weatherColumn}>
          <div className={styles.emoji}>{getWeatherEmoji(desc)}</div>
          <WeatherToday />
        </div>
  
        {/* Pil till höger */}
        <div className={styles.arrowColumn}>
          <ArrowButton to="/tomorrow" direction="right" className={styles.arrowRight} />
        </div>
      </div>      
      <HourlyForecast hourly={hourlyData} />
      <ClothingRecommendation />
    </main>
  );
}