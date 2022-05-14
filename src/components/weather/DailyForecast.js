import { useContext } from "react";
import DailyForecastItem from "./DailyForecastItem";
import NoRecord from "./NoRecord";
import Header from "./Header";
import { ApiContext } from "../../App";

function DailyForecast() {
  const { getOneCallWeatherApi: { data } } = useContext(ApiContext);

  if (!data) {
    return <NoRecord />;
  }

  return (
    <div>
      <Header text="Daily Forecast" />

      <main>
        <section className="pb-5 px-5 overflow-auto whitespace-nowrap space-x-3">
          {data?.daily.map((dailyData) => (
            <DailyForecastItem key={dailyData.dt} data={dailyData} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default DailyForecast;
