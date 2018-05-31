/**
 * Translate a temp value into a color value based on the MET office scale
 */

//-30 to 36. 66 degrees in steps of 2, 34 colors
let colors = [
  "#ffffff",
  "#f5f5f5",
  "#ebebeb",
  "#e1e1e1",
  "#bebebe",
  "#828282",
  "#565474",
  "#5a007f",
  "#59447f",
  "#32007f",
  "#000082",
  "#0033b4",
  "#0000ff",
  "#007eff",
  "#00beff",
  "#00ffff",
  "#00f7c6",
  "#18d78c",
  "#00aa64",
  "#2baa2b",
  "#2bc82b",
  "#00ff00",
  "#ccff00",
  "#ffff00",
  "#eded7e",
  "#e4cc66",
  "#dcae49",
  "#ffaa00",
  "#ff5500",
  "#ff0000",
  "#c80000",
  "#ad0000",
  "#930000",
  "#780000"
];

export default function(temp) {
  //-30c == 0 . -2c == -1 . 0c == 15 . 2c == 1 . 3c == 2 .
  return colors[Math.round(temp / 2) + 15];
}
