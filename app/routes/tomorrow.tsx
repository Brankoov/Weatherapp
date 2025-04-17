import { Link } from "react-router";

import TomorrowForecast from "src/components/tomorrowForecast";

const Tomorrow = () => {

  return (
    <main className="flex items-center justify-center pt-16 pb-4">        
    <TomorrowForecast />
      <Link
        to="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
        Startsida
      </Link>
    </main>
  );
};

export default Tomorrow;
    
      
        
        
        