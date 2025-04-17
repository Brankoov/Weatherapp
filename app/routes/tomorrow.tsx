import { Link } from "react-router";
import WeatherFetcher from "src/weather/weatherFetcher";

export default function Tomorrow() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1>Morgondagens Väder</h1>
        <div className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
        <Link to="/"> Tillbaka till startsida</Link>
        </div>
        <WeatherFetcher />
      </div>
    </main>
  );
}