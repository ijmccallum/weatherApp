/**
 * Creates metadata for a range of given forecasts
 * TODO: abstract a utility to pull the highest or lowest value from a given (nested) location in an object
 */

import moment from "moment";
function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function highestTempInRange(forecastArray) {
  let temp = Number.NEGATIVE_INFINITY;
  forecastArray.forEach(forecast => {
    if (forecast.main.temp_max > temp) {
      temp = forecast.main.temp_max;
    }
  });
  return temp;
}

function lowestTempInRange(forecastArray) {
  let temp = Number.POSITIVE_INFINITY;
  forecastArray.forEach(forecast => {
    if (forecast.main.temp_min < temp) {
      temp = forecast.main.temp_min;
    }
  });
  return temp;
}

function highestWindSpeedInRange(forecastArray) {
  let speed = Number.NEGATIVE_INFINITY;
  forecastArray.forEach(forecast => {
    if (forecast.wind.speed > speed) {
      speed = forecast.wind.speed;
    }
  });
  return speed;
}

function whatDayIsIt(day) {
  //   let momentObject = moment(day.dt_txt.substring(0, 10), "YYYY-MM-DD");
  let momentObject = moment(day.dt_txt);
  if (momentObject.calendar().includes("Today")) {
    return "Today";
  }
  let dayString = momentObject.format("ddd");
  return dayString;
}

export default function dataMeta(forecastArray) {
  let meta = {
    list: forecastArray,
    tempHighest: kelvinToCelcius(highestTempInRange(forecastArray)),
    tempLowest: kelvinToCelcius(lowestTempInRange(forecastArray)),
    windSpeed: highestWindSpeedInRange(forecastArray),
    windDeg: forecastArray[0].wind.deg,
    day: whatDayIsIt(forecastArray[0])
  };
  return meta;
}
