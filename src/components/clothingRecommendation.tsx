import { useWeather } from "src/types/useWeather";



type Props = {
    dayIndex?: number; // 0 = idag (default), 1 = imorgon
  };
  
  const ClothingRecommendation = ({ dayIndex = 0 }: Props) => {
    const { weather, loading, error } = useWeather();
  
    if (loading) return <p>Hämtar rekommendationer...</p>;
    if (error) return <p>{error}</p>;
    if (!weather) return <p>Kunde inte hämta väderdata.</p>;
  
    const forecast = weather.daily[dayIndex];
    const temp = forecast.temp.day ?? 10;
    const wind = forecast.wind_speed;
    const description = forecast.weather[0].description.toLowerCase();
    const rain = forecast.rain ?? 0;
  
    let recommendations: string[] = [];
  
    // Temperatur
    if (temp < 5) {
      recommendations.push("🧥 Det är kallt! Overall eller vinterjacka, mössa och vantar.");
    } else if (temp < 10) {
      recommendations.push("🧣 Ta på en fodrad jacka och mössa.");
    } else if (temp < 18) {
      recommendations.push("🧥 En tunn jacka eller varm tröja räcker.");
    } else {
      recommendations.push("👕 T-shirt och shorts funkar idag!");
    }
  
    // Vind
    if (wind > 6) {
      recommendations.push("💨 Det blåser mycket – ta på vindtäta kläder.");
    }
  
    // Regn
    if (rain > 5) {
      recommendations.push("🌧️ Ta med regnjacka och stövlar.");
    } else if (rain > 0.5) {
      recommendations.push("🌦️ Lite regn – ta gärna med regnjacka.");
    } else {
      recommendations.push("🌞 Det verkar vara torrt idag – Lite eller inget regn!");
    }
  
    // Väderbeskrivning
    if (description.includes("snö")) {
      recommendations.push("❄️ Klä dig varmt, det snöar!");
    } else if (description.includes("molnigt") || description.includes("mulet")) {
      recommendations.push("☁️ Mulet väder – men inget regn, så vanliga kläder räcker.");
    } else if (description.includes("sol")) {
      recommendations.push("☀️ Soligt – glöm inte solhatt och solkräm!");
    } else if (description.includes("duggregn")) {
        recommendations.push("☔ Duggregn!");
      }
    
  
    return (
      <div>
        <h2 className="text-lg font-semibold">👶 Klädrekommendationer för barn</h2>
        <ul className="list-disc pl-5 space-y-1">
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ClothingRecommendation;