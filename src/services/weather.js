import axios from "axios";

const getCurrentWeather = () => {
  return axios.get("current.json");
};

const getOnCallWeather = () => {
  return axios.get("data.json");
};

export {
  getCurrentWeather,
  getOnCallWeather,
};
