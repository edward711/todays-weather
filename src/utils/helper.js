import dayjs from "dayjs";

function getUniqueObjListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()];
}

function getWeatherIconUrl(icon) {
  return `http://openweathermap.org/img/w/${icon}.png`;
}

function meterToKiloMeter(meter) {
  return `${meter / 1000}km`;
}

const searchHistoryKey = "history";

function getSearchHistory() {
  const searchHistory = JSON.parse(localStorage.getItem(searchHistoryKey));
  const result = searchHistory ? searchHistory.sort((a, b) => dayjs(b.searchedDateTime) - dayjs(a.searchedDateTime)) : [];
  return searchHistory ? result : [];
}

function saveSearchHistory(data) {
  const record = getSearchHistory();
  const newRecord = [
    ...record,
    {
      city: data.name,
      country: data.sys.country,
      searchedDateTime: dayjs()
    },
  ];

  localStorage.setItem(searchHistoryKey, JSON.stringify(getUniqueObjListBy(newRecord, "city")));
}

function deleteSearchHistory(index) {
  const record = getSearchHistory();
  record.splice(index, 1);
  
  localStorage.setItem(searchHistoryKey, JSON.stringify(record));
}

export { getWeatherIconUrl, meterToKiloMeter, getSearchHistory, saveSearchHistory, deleteSearchHistory };