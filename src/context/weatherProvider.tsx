import { useWeather } from "src/types/useWeather"; // din hook
import { WeatherContext } from "./weatherContext";

export default function WeatherProvider({ children }: { children: React.ReactNode }) {
  const { weather, loading, error } = useWeather();

  return (
    <WeatherContext.Provider value={{ weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}