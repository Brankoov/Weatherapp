import { useWeather } from "src/types/useWeather"; // din hook
import { WeatherContext } from "./weatherContext";

export default function WeatherProvider({ children }: { children: React.ReactNode }) {
    const { weather, loading, error } = useWeather();
  
    if (loading) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      );
    }
  
    if (error || !weather) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-500 text-lg">Fel: {error || "Okänt fel"}</p>
        </div>
      );
    }
  
    return (
      <WeatherContext.Provider value={{ weather, loading, error }}>
        {children}
      </WeatherContext.Provider>
    );
  }