import DailyForecastItem from "./DailyForecastItem";
import EmptyData from './EmptyData';

function DailyForecast({ data }) {
  if(!data) {
    return <EmptyData />
  }

  return (
    <div>
      <header className="p-5">
        <div className="font-semibold text-lg">Daily Forecast</div>
      </header>

      <main>
        <section className="pb-5 px-5 overflow-auto whitespace-nowrap">
         {data?.daily.map((dailyData) => <DailyForecastItem key={dailyData.dt} data={dailyData} />)}
        </section>
      </main>
    </div>
  );
}

export default DailyForecast;
