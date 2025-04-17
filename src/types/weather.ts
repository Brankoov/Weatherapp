export type WeatherData = {
    current: {
      temp: number;
      weather: { description: string }[];
      wind_speed: number;
      
    };
    daily: {
      wind_speed: number;
      temp: {
        min: number;
        max: number;
        morning?: number;  
        day?: number;      
        evening?: number;  
      };
      weather: { description: string }[];
    }[];
  };