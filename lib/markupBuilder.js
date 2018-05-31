/**
 * Takes the prepped weather data
 * Returns a string of markup
 */

import html from "./_html.js";
import InlineGradient from "./inlineGradient.js";
import TempToColor from "./tempColor.js";

function makeADay(dayData) {
  return html`
        <button 
        class="w-100 mh1-l mv3 relative pl3 pl0-l js-forecast-btn" 
        style="border-top: 1px solid ${TempToColor(dayData.tempHighest)};
        border-bottom: 1px solid ${TempToColor(dayData.tempLowest)};">
        <div 
          style="${InlineGradient(dayData.tempHighest, dayData.tempLowest)}"
            class="absolute top-1 bottom-1 left-0 w1 "
        ></div>
            <div class="pv3 ph2">
                <div class="f6 ttu">${dayData.day}</div>
                <div class="f6 ttu">%10</div>
                <div class="f6 ttu">0mm</div>
                <div class="f6 ttu red">${dayData.tempHighest}°C ^</div>
                <div class="f6 ttu blue">${dayData.tempLowest}°C v</div>
                <div class="f6 ttu">↗${dayData.windSpeed}mph</div>
            </div>
        </button>
    `;
}

export default function(dailyData) {
  let returnMarkup = "";
  dailyData.forEach(day => {
    returnMarkup += makeADay(day);
  });
  return returnMarkup;
}
