import { useEffect, useState } from "react";
import type { WeatherData } from "src/types/weather";

export function useWeather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (latitude: number, longitude: number) => {
      const apiKey = "eb14c3a5254264e10c6b1096517991a9";
      const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&lang=sv&appid=${apiKey}`;
      
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fel vid API-anrop: ${response.status}`);
        const data = await response.json();
        console.log("Väderdata från API:", data); // All data i konsolen
        setWeather(data);
      } catch (err: any) {
        console.error("Fel vid hämtning:", err);
        setError(err.message || "Okänt fel");
      } finally {
        setLoading(false);
      }
      
    };

    navigator.geolocation.getCurrentPosition(
      (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
      () => {
        setError("Kunde inte hämta platsinformation.");
        setLoading(false);
      }
    );
  }, []);

  return { weather, loading, error };
}