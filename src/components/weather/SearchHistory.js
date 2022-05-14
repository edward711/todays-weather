import { useEffect, useState, useContext } from "react";
import Header from "./Header";
import { getSearchHistory, deleteSearchHistory } from "../../utils/helper";
import SearchHistoryItem from "./SearchHistoryItem";
import { ApiContext } from "../../App";
import NoRecord from "./NoRecord";

function SearchHistory() {
  const { getCurrentWeatherApi } = useContext(ApiContext);

  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    setSearchHistory(getSearchHistory());
  }, [getCurrentWeatherApi.data]);

  const deleteHistory = (index) => {
    deleteSearchHistory(index);
    setSearchHistory(getSearchHistory());
  }

  return (
    <div>
      <Header text="Search Histroy" />

      {searchHistory.length === 0 && 
        <NoRecord />
      }
      
      <main>
        <section className="pb-5 overflow-auto whitespace-nowrap max-h-72">
          {searchHistory.map((history, index) => (
            <SearchHistoryItem
              key={index}
              index={index}
              data={history}
              deleteHistory={deleteHistory}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default SearchHistory;
