import { Link } from "react-router";
import ClothingRecommendation from "src/components/clothingRecommendation";

import TomorrowForecast from "src/components/tomorrowForecast";

const Tomorrow = () => {

  return (
    <main className="flex flex-col items-center pt-16 gap-10">
      <h1 className="text-2xl font-bold">Morgondagens prognos</h1>
      <TomorrowForecast />
      <ClothingRecommendation dayIndex={1} />
      <Link
        to="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
      >
        Startsida
      </Link>
    </main>
  );
};

export default Tomorrow;
    
      
        
        
        