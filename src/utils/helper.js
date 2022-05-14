function getWeatherIconUrl(icon) {
  return `http://openweathermap.org/img/w/${icon}.png`;
}

function meterToKiloMeter(meter) {
  return `${meter / 1000}km`;
}

export { getWeatherIconUrl, meterToKiloMeter };