const getWeatherEmoji = (description: string): string => {
    const d = description.toLowerCase();
  
    if (d.includes("sol"))                        return "☀️";
    if (d.includes("moln") && d.includes("regn")) return "🌦️";
    // 🛠︎ lägg till mulet här:
    if (d.includes("mulet") || d.includes("moln")) return "☁️";
    if (d.includes("regn"))                       return "🌧️";
    if (d.includes("snö"))                        return "🌨️";
    if (d.includes("åska"))                       return "🌩️";
    if (d.includes("vind") || d.includes("blåsigt")) return "💨";
  
    return "🌈"; // fallback
  };
  
  export default getWeatherEmoji;