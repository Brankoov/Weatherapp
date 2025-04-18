export type WeatherData = {
    current: {
      temp: number;
      weather: { description: string }[];
      wind_speed: number;
      rain?: { '1h': number };
    };
    daily: {
      temp: {
        min: number;
        max: number;
        day?: number;  
        morning: number;  
        evening?: number;  
      };
      wind_speed: number;
      weather: { description: string }[];
      rain?: number; // Regn under hela dagen
    }[];
  };