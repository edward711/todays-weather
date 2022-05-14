import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "1b663ceada62ad902a5f2b1da5db8367";

const getCurrentWeather = (searchParams = "Singapore") => {
  // return axios.get("current.json");
  return axios.get(`${baseUrl}/weather?q=${searchParams}&units=metric&appid=${apiKey}`);
};

const getOnCallWeather = ({lat, lon}) => {
  // return axios.get("data.json");
  return axios.get(`${baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`);
};

export {
  getCurrentWeather,
  getOnCallWeather,
};
