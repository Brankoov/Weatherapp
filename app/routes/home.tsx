import type { Route } from "./+types/home";
import WeatherFetcher from "src/weather/weatherFetcher";
import ClothingRecommendation from "src/components/clothingRecommendation";
import TomorrowLink from "src/components/tomorrowLink";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Weather App" },
    { name: "description", content: "Kolla dagens väder och få klädtips" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-16 gap-10">
      <h1 className="text-2xl font-bold">Väder app 1.0</h1>
      <WeatherFetcher />
      <ClothingRecommendation />
      <TomorrowLink />
    </main>
  );
}
