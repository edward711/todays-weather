import TodayWeatherDetailItem from "./TodayWeatherDetailItem";
import { meterToKiloMeter } from "../../utils/helper";
import EmptyData from './EmptyData';

function TodayWeatherDetail({ data }) {
  if(!data) {
    return <EmptyData />
  }

  return (
    <div>
      <header className="p-5">
        <div className="font-semibold text-lg">
          {`Weather Today in ${data?.name}, ${data?.sys.country}`}
        </div>
      </header>

      <main>
        <section className="pb-5 px-5">
          <div className="text-3xl font-bold">
            {`${Math.round(data?.main.feels_like)}°C`}
          </div>
          <div className="text-md">Feel Like</div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-1.5">
          <TodayWeatherDetailItem>
            <div>High/Low</div>
            <div>{`${Math.floor(data?.main.temp_max)}°C/${Math.floor(data?.main.temp_min)}°C`}</div>
          </TodayWeatherDetailItem>
          <TodayWeatherDetailItem>
            <div>Humidity</div>
            <div>{`${data?.main.humidity}%`}</div>
          </TodayWeatherDetailItem>
          <TodayWeatherDetailItem>
            <div>Pressure</div>
            <div>{`${data?.main.pressure}hPa`}</div>
          </TodayWeatherDetailItem>
          <TodayWeatherDetailItem>
            <div>Visibility</div>
            <div>{meterToKiloMeter(data?.visibility)}</div>
          </TodayWeatherDetailItem>
        </section>
      </main>
    </div>
  );
}

export default TodayWeatherDetail;
