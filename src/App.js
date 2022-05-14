/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import InfoCardWrapper from "./components/InfoCardWrapper";
import TodayWeather from "./components/weather/TodayWeather";
import TodayWeatherDetail from "./components/weather/TodayWeatherDetail";
import useApi from "./utils/hooks/useApi";
import { getCurrentWeather, getOnCallWeather } from "./services/weather";
import DailyForecast from "./components/weather/DailyForecast";
import SearchBar from "./components/SearchBar";

function App() {
  const getCurrentWeatherApi = useApi(getCurrentWeather);
  const getOneCallWeatherApi = useApi(getOnCallWeather);

  // initial defaul location to display
  // prevent empty screen
  useEffect(() => {
    getCurrentWeatherApi.request();
  }, []);

  // get more detail and dail
  useEffect(() => {
    if (!getCurrentWeatherApi.data) return;

    getOneCallWeatherApi.request(getCurrentWeatherApi.data.coord);
  }, [getCurrentWeatherApi.data]);

  return (
    <div className="min-h-screen bg-[#fdf6f6]">
      <div className="container mx-auto px-4">
        <header className="border-b-2 border-secondary border-opacity-2 py-6">
          <h1 className="text-lg font-semibold">Today's Weather</h1>
        </header>

        <section>
          <SearchBar getCurrentWeatherApi={getCurrentWeatherApi} />

          {getCurrentWeatherApi.error !== "" && (
            <div className="mt-3 py-2 px-4 border-danger border-2 rounded-md bg-danger/25">
              City and Country not found. Please try again.
            </div>
          )}
        </section>

        <section className="py-6 gap-7 grid grid-cols-1 lg:grid-cols-3">
          <main className="lg:col-span-2 space-y-7">
            <InfoCardWrapper>
              <TodayWeather data={getCurrentWeatherApi.data} />
            </InfoCardWrapper>
            <InfoCardWrapper>
              <TodayWeatherDetail data={getCurrentWeatherApi.data} />
            </InfoCardWrapper>
            <InfoCardWrapper>
              <DailyForecast data={getOneCallWeatherApi.data} />
            </InfoCardWrapper>
          </main>
          <aside>
            <div className="h-20 bg-light shadow rounded-md flex items-center justify-center ">
              Search Histroy
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default App;
