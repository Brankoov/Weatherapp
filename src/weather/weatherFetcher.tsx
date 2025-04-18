import { useEffect, useState } from "react";
import type { WeatherData } from "src/types/weather";

const WeatherFetcher = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchWeather = async (latitude: number, longitude: number) => {
        const apiKey = "eb14c3a5254264e10c6b1096517991a9"; // API-nyckel
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&lang=sv&appid=${apiKey}`;
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Fel vid API-anrop: ${response.status}`);
          }
  
          const data = await response.json();
          setWeather(data);
          console.log("Väderdata:", data);
        } catch (err: any) {
          console.error("Fel vid hämtning av väder:", err);
          setError(err.message || "Okänt fel");
        } finally {
          setLoading(false);
        }
      };
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude); // Här använder vi latitude och longitude
        },
        (err) => {
          console.error("Kunde inte hämta plats:", err);
          setError("Kunde inte hämta platsinformation.");
          setLoading(false);
        }
      );
    }, []);
  
    if (loading) return <p>Hämtar väder...</p>;
    if (error) return <p>{error}</p>;
    if (!weather) return <p>Kunde inte hämta väderdata.</p>;
      
    
  };
  
  export default WeatherFetcher;