/**
 * Takes an array of forecasts
 * Divides those forecasts into sub arrays divided by day
 *
 * so roughly:
 * [forecast1, forecast2, forecast3]
 * where forecast 3 is the next day
 * [[forecast1, forecast2], [forecast3]]
 */

export default function convertToDayArray(hrsArray) {
  let dayArray = [[]];

  let currentDay = {
    date: hrsArray[0].dt_txt.substring(0, 10),
    i: 0
  };

  hrsArray.forEach(hr => {
    //hr.dt_txt is yyyy-mm-dd hh:mm:ss, we just want the date to tell if it's a whole new day
    let thisDate = hr.dt_txt.substring(0, 10);

    if (thisDate === currentDay.date) {
      dayArray[currentDay.i].push(hr);
      return;
    }

    currentDay.i++;
    currentDay.date = thisDate;
    dayArray.push([hr]);
  });

  return dayArray;
}
