import { useEffect } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import InfoCardWrapper from "./components/InfoCardWrapper";
import TodayWeather from "./components/weather/TodayWeather";
import TodayWeatherDetail from "./components/weather/TodayWeatherDetail";
import useApi from "./utils/hooks/useApi";
import { getCurrentWeather, getOnCallWeather } from "./services/weather";
import DailyForecast from "./components/weather/DailyForecast";

function App() {
  const getCurrentWeatherApi = useApi(getCurrentWeather);
  const getOneCallWeatherApi = useApi(getOnCallWeather);

  useEffect(() => {
    getCurrentWeatherApi.request();
    getOneCallWeatherApi.request();
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf6f6]">
      <div className="container mx-auto px-4">
        <header className="border-b-2 border-secondary border-opacity-2 py-6">
          <h1 className="text-lg font-semibold">Today's Weather</h1>
        </header>

        <section className="flex mt-6 flex-wrap">
          <TextInput
            className="mr-2 mt-6 w-full md:w-auto"
            name={"city"}
            label={"City"}
            placeholder={"Please enter city"}
          />
          <TextInput
            className="mr-2 mt-6 w-full md:w-auto"
            name={"country"}
            label={"Country"}
            placeholder={"Please enter country"}
          />
          <Button className="mr-2 mt-6 h-[42px]" type={"primary"}>
            Submit
          </Button>
          <Button className="mr-2 mt-6 h-[42px]" type={"secondary"}>
            Clear
          </Button>
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
