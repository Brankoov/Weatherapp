type HourlyData = {
    time: string; // "2025-04-23T09:00"
    weatherCode: number;
    precipitation: number; // i mm
  };
  
  interface Props {
    hourly: HourlyData[];
  }
  
  const HourlyForecast = ({ hourly }: Props) => {

  
    const getEmoji = (code: number, rain: number) => {
      if (rain > 0) return "🌧️";
      if (code === 0) return "☀️";
      if (code < 4) return "⛅";
      return "☁️";
    };
  
    return (
      <div>
        <h3>Timmar för idag</h3>
        <div style={{ display: "flex", gap: "10px" }}>
        {hourly.map(hour => (
         <div key={hour.time}>
          <div>{new Date(hour.time).getHours()}:00</div>
            <div>{getEmoji(hour.weatherCode, hour.precipitation)}</div>
              {hour.precipitation > 0 && <div>{hour.precipitation} mm</div>}
         </div>
))}
        </div>
      </div>
    );
  };

  export default HourlyForecast;