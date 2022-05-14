/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import SectionWrapper from "./components/SectionWrapper";
import TodayWeather from "./components/weather/TodayWeather";
import TodayWeatherDetail from "./components/weather/TodayWeatherDetail";
import useApi from "./utils/hooks/useApi";
import { getCurrentWeather, getOnCallWeather } from "./services/weather";
import DailyForecast from "./components/weather/DailyForecast";
import SearchBar from "./components/SearchBar";
import SearchHistory from "./components/weather/SearchHistory";

export const ApiContext = React.createContext(null);

function App() {
  const getCurrentWeatherApi = useApi(getCurrentWeather);
  const getOneCallWeatherApi = useApi(getOnCallWeather);

  // initial defaul location to display
  // prevent empty screen
  useEffect(() => {
    getCurrentWeatherApi.request();
  }, []);

  // get more detail for daily forecast
  useEffect(() => {
    if (!getCurrentWeatherApi.data) return;

    getOneCallWeatherApi.request(getCurrentWeatherApi.data.coord);
  }, [getCurrentWeatherApi.data]);

  return (
    <ApiContext.Provider value={{ getCurrentWeatherApi, getOneCallWeatherApi }}>
      <div className="min-h-screen bg-[#fdf6f6]">
        <div className="container mx-auto px-4">
          <header className="border-b-2 border-secondary/50 py-6">
            <h1 className="text-lg font-semibold">Today's Weather</h1>
          </header>

          <section>
            <SearchBar />

            {getCurrentWeatherApi.error !== "" && (
              <div className="mt-3 py-2 px-4 border-danger border-2 rounded-md bg-danger/25">
                City and Country not found. Please try again.
              </div>
            )}
          </section>

          <section className="py-6 gap-7 grid grid-cols-1">
            <main className="space-y-7">
              <SectionWrapper>
                <TodayWeather />
              </SectionWrapper>

              <SectionWrapper>
                <TodayWeatherDetail />
              </SectionWrapper>

              <SectionWrapper>
                <DailyForecast />
              </SectionWrapper>

              <SectionWrapper>
                <SearchHistory />
              </SectionWrapper>
            </main>
          </section>
        </div>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
