import HrsToDays from "./dataHrsToDays.js";

test("date array split into days", () => {
  let testArray = [
    { dt_txt: "2018-06-02 00:00:00" },
    { dt_txt: "2018-06-02 10:00:00" },
    { dt_txt: "2018-06-03 00:00:00" }
  ];
  let processedArray = HrsToDays(testArray);
  expect(processedArray.length).toBe(2);
  expect(processedArray[0].length).toBe(2);
  expect(processedArray[1].length).toBe(1);
});
