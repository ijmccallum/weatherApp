import DataMeta from "./dataMeta.js";

//hmm.
function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

test("Max temp is found within a range and added to meta", () => {
  let testArray = [
    {
      dt_txt: "2018-06-02 00:00:00",
      main: { temp_max: 20, temp_min: 10 },
      wind: { speed: -10 }
    },
    {
      dt_txt: "2018-06-02 10:00:00",
      main: { temp_max: 10, temp_min: 0 },
      wind: { speed: 0 }
    },
    {
      dt_txt: "2018-06-03 00:00:00",
      main: { temp_max: -10, temp_min: -20 },
      wind: { speed: 10 }
    }
  ];
  let metaObject = DataMeta(testArray);
  expect(metaObject.tempHighest).toBe(kelvinToCelcius(20));
  expect(metaObject.tempLowest).toBe(kelvinToCelcius(-20));
});
