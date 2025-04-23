import HourlyForecast from "./hourlyForecast";

const dummyData = [
  { time: "2025-04-23T07:00", weatherCode: 0, precipitation: 0 },
  { time: "2025-04-23T08:00", weatherCode: 1, precipitation: 0 },
  { time: "2025-04-23T09:00", weatherCode: 2, precipitation: 0.2 },
  { time: "2025-04-23T10:00", weatherCode: 3, precipitation: 0.5 },
  { time: "2025-04-23T11:00", weatherCode: 4, precipitation: 1.2 },
  { time: "2025-04-23T12:00", weatherCode: 4, precipitation: 0.8 },
  { time: "2025-04-23T13:00", weatherCode: 2, precipitation: 0 },
];

const testPage = () => {
  return (
    <div>
      <h2>Test: Timmars väder</h2>
      <HourlyForecast hourly={dummyData} />
    </div>
  );
};

export default testPage;