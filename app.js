import "./scss/styles.scss";
import weatherData from "./weatherdata.json";
import PrepData from "./lib/dataPrepper.js";
import BuildMarkup from "./lib/markupBuilder.js";

console.log("weatherData", weatherData);

function generateForecastMarkup(forecastArray) {
  //get the "daily data"
  let dailyData = PrepData(forecastArray);
  console.log("dailyData", dailyData);
  //use that to create the markup
  let forecastMarkup = BuildMarkup(dailyData);
  //return it!
  return forecastMarkup;
}

function dayClickHandler() {
  console.log("click: ", arguments);
}

document.getElementById("js-days").innerHTML = generateForecastMarkup(
  weatherData.list
);

/**
 * TODO: show the relevant day in detail when clicked
 * instead of creating a string of markup above,
 * create dom nodes then attach event listeners to them before inserting into the dom
 * then we'll have the data to hand instead of going down the route of re-reading it from the markup
 */
let forecastEls = document.querySelectorAll(".js-forecast-btn");
forecastEls.forEach(el => {
  console.log("el", el);
  el.addEventListener("click", dayClickHandler);
});
