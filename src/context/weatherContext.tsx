// src/context/WeatherContext.tsx
import { createContext, useContext } from "react";
import type { WeatherData } from "src/types/weather";

export const WeatherContext = createContext<{
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}>({
  weather: null,
  loading: true,
  error: null,
});

export const useWeatherContext = () => useContext(WeatherContext);