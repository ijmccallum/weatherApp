import html from "./_html";

test("Should return markup without modifying it", () => {
  let doingSomething = function() {
    return "did something";
  };
  let originalMarkup = `<div>${doingSomething}</div>`;
  let processedMarkup = html`<div>${doingSomething}</div>`;
  expect(originalMarkup).toEqual(processedMarkup);
});
