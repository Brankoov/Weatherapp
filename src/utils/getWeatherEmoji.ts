const getWeatherEmoji = (description: string): string => {
    const lowerDesc = description.toLowerCase();
  
    if (lowerDesc.includes("sol")) return "☀️";
    if (lowerDesc.includes("moln") && lowerDesc.includes("regn")) return "🌦️";
    if (lowerDesc.includes("moln")) return "☁️";
    if (lowerDesc.includes("regn")) return "🌧️";
    if (lowerDesc.includes("snö")) return "🌨️";
    if (lowerDesc.includes("åska")) return "🌩️";
    if (lowerDesc.includes("vind") || lowerDesc.includes("blåsigt")) return "💨";
  
    return "🌈";

  };

  export default getWeatherEmoji; 