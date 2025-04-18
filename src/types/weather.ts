export type WeatherData = {
    current: {
      temp: number;
      weather: { description: string }[];
      wind_speed: number;
      rain?: { '1h': number };
      snow?: { '1h': number };
    };
    daily: Array<{
        temp: {
          min: number;
          max: number;
          morn?: number;
          day: number;
          wind_speed: number;
          eve?: number;
          night?: number;
        };
        wind_speed: number;
        weather: { description: string }[];
        rain?: number;   // mm regn under dagen
        snow?: number;   // mm snö under dagen
      }>;
    };