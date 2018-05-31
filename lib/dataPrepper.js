/**
 * Takes the list of 3 hr forecasts
 * Returns daily forecasts with some extra data
 */

import HrsToDays from "./dataHrsToDays.js";
import DataMeta from "./dataMeta.js";

export default function(threeHrForecasts) {
  let dailyData = HrsToDays(threeHrForecasts);
  let dailyMetaData = dailyData.map(day => {
    return DataMeta(day);
  });
  return dailyMetaData;
}
