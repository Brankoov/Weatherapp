
import WeatherFetcher from "src/components/weatherFetcher";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
      <h1>Väder app 1.0</h1>
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
           
            
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          
            
        <WeatherFetcher />
          
        </div>
      </div>
      
    </main>
  );
}


  


