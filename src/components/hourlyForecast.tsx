import styles from './hourlyForecast.module.css'; 

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
          <div className={styles.wrapper}>
            <div className={styles.list}>
              {hourly.map((h) => (
                <div key={h.time} className={styles.item}>
                  <div>{new Date(h.time).getHours()}:00</div>
                  <div style={{ fontSize: "1.5rem" }}>
                    {getEmoji(h.weatherCode, h.precipitation)}
                  </div>
                  {h.precipitation > 0 && <div>{h.precipitation} mm</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default HourlyForecast;