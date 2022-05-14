import { useContext } from "react";
import dayjs from "dayjs";
import { getWeatherIconUrl } from "../../utils/helper";
import NoRecord from './NoRecord';
import { ApiContext } from "../../App";

function TodayWeather() {
  const { getCurrentWeatherApi: { data } } = useContext(ApiContext);

  if(!data) {
    return <NoRecord />
  }

  return (
    <div>
      <header className="px-5 py-2 bg-primary rounded-t-md">
        <div>
          <div className="text-sm text-light">
            {dayjs().format("MMM DD, h:mm A")}
          </div>
        </div>
        <div className="font-bold text-lg text-light">{`${data?.name}, ${data?.sys.country}`}</div>
      </header>

      <main className="px-5 flex justify-between align-center">
        <section className="flex flex-col justify-center">
          <div className="text-5xl font-bold">{`${Math.round(data?.main.temp)}°C`}</div>
          <div className="text-xl">{`${data?.weather[0].main}, ${data?.weather[0].description}`}</div>
        </section>
        <section>
          <img
            className="h-28 w-28"
            title={data?.weather[0].description}
            alt={data?.weather[0].description}
            src={getWeatherIconUrl(data?.weather[0].icon)}
          />
        </section>
      </main>
    </div>
  );
}

export default TodayWeather;
