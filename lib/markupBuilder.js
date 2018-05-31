/**
 * Takes the prepped weather data
 * Returns a string of markup
 */

import html from "./_html.js";
import InlineGradient from "./inlineGradient.js";
import TempToColor from "./tempColor.js";
import Icons from "./icons";

function makeADay(dayData) {
  let highClr = TempToColor(dayData.tempHighest);
  let lowClr = TempToColor(dayData.tempLowest);
  console.log("highClr", highClr, lowClr);
  return html`
        <button 
        class="br3 shadow-4 overflow-hidden relative mb3 w-100 w-40-m w-30-l mw5 mh1-ns mb2-ns js-forecast-btn"  
        style="background: ${highClr.bg};
        color: ${highClr.txt};">
            <div class="pt3 ph2 pb4 z-1 relative">
                <div class="f4 ttu mb2">${dayData.day}</div>
                <div class="f6">
                    <span class="o-80">High</span>
                    <span class="f4 fw9">${dayData.tempHighest}°C</span>
                </div>
                <div class="f6 mb2">
                    <span class="o-80">Low</span>
                    <span class="f4 fw9">${dayData.tempLowest}°C</span>
                </div>
                <div class="f6 ttu">%10 0mm</div>
                <div class="f6 ttu">
                    <span 
                        class="w1 dib v-mid"
                        style="
                            -webkit-transform: rotate(${dayData.windDeg});
                            transform: rotate(${dayData.windDeg}deg);
                        "
                    >${Icons.WindIcon()}</span>
                    ${dayData.windSpeed}mph
                </div>
            </div>
            <div 
                class="absolute w4 h4 rotate-45 o-20"
                style="background: ${lowClr.bg}; right: -4rem; bottom: -4rem;"
            ></div>
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
