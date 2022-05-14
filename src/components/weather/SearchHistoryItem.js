import { useContext } from "react";
import dayjs from "dayjs";
import { ApiContext } from "../../App";

function SearchHistoryItem({ index, data, deleteHistory }) {
  const { getCurrentWeatherApi } = useContext(ApiContext);

  const searchHistory = async () => {
    window.scrollTo(0, 0);
    await getCurrentWeatherApi.request(`${data.city},${data.country}`);
  };

  return (
    <div className="flex justify-between items-center px-5 border-b border-secondary/25 py-2">
      <div>{`${index + 1}. ${data.city}, ${data.country}`}</div>
      <div className="flex items-center space-x-2">
        <div>{dayjs(data.searchedDateTime).format("hh:mm:ss A")}</div>
        <img
          className="cursor-pointer translate-y-px"
          src="/icons/search.png"
          width={20}
          height={20}
          alt="search"
          onClick={searchHistory}
        />
        <img
          className="cursor-pointer"
          src="/icons/delete.png"
          width={25}
          height={25}
          alt="delete"
          onClick={() => deleteHistory(index)}
        />
      </div>
    </div>
  );
}

export default SearchHistoryItem;
