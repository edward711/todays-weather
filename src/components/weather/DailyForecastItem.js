import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import classNames from "classnames";
import { getWeatherIconUrl } from "../../utils/helper";

dayjs.extend(isToday);

function DailyForecastItem({ data }) {
  const isToday = () => {
    return dayjs.unix(data.dt).isToday();
  };

  return (
    <div className="inline-block text-center px-4 first:pl-0 last:pr-0">
      <header className={classNames({ "font-bold": isToday() })}>
        {isToday() ? "Today" : dayjs.unix(data.dt).format("MMM DD")}
      </header>

      <section>
        <div
          className={classNames("text-primary text-xl font-medium", {
            "font-bold": isToday(),
          })}
        >{`${Math.round(data?.temp.day)}°C`}</div>
        <div>
          <img
            className="h-28 w-28"
            title={data?.weather[0].description}
            alt={data?.weather[0].description}
            src={getWeatherIconUrl(data?.weather[0].icon)}
          />
        </div>
      </section>
    </div>
  );
}

export default DailyForecastItem;
