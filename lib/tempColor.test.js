import TempColor from "./tempColor.js";

test("returns color object for 0", () => {
  let zeroReturn = TempColor(0);
  expect(zeroReturn.bg).toBeDefined();
  expect(zeroReturn.txt).toBeDefined();
});

test("returns color object for -1", () => {
  let zeroReturn = TempColor(-1);
  expect(zeroReturn.bg).toBeDefined();
  expect(zeroReturn.txt).toBeDefined();
});

test("returns color object for 1", () => {
  let zeroReturn = TempColor(1);
  expect(zeroReturn.bg).toBeDefined();
  expect(zeroReturn.txt).toBeDefined();
});
