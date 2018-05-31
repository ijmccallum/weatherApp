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

let materialColors = [
  {
    bg: "#0d47a1",
    txt: "white"
  },
  {
    bg: "#1565c0",
    txt: "white"
  },
  {
    bg: "#1976d2",
    txt: "white"
  },
  {
    bg: "#1e88e5",
    txt: "white"
  },
  {
    bg: "#2196f3",
    txt: "white"
  },
  {
    bg: "#42a5f5",
    txt: "black"
  },
  {
    bg: "#64b5f6",
    txt: "black"
  },
  {
    bg: "#90caf9",
    txt: "black"
  },
  {
    bg: "#bbdefb",
    txt: "black"
  },
  {
    bg: "#e3f2fd",
    txt: "black"
  },
  {
    bg: "#ffffff",
    txt: "black",
    temp: 0
  },
  {
    bg: "#ffebee",
    txt: "black"
  },
  {
    bg: "#ffcdd2",
    txt: "black"
  },
  {
    bg: "#ef9a9a",
    txt: "black"
  },
  {
    bg: "#e57373",
    txt: "black"
  },
  {
    bg: "#ef5350",
    txt: "black"
  },
  {
    bg: "#f44336",
    txt: "white"
  },
  {
    bg: "#e53935",
    txt: "white"
  },
  {
    bg: "#d32f2f",
    txt: "white"
  },
  {
    bg: "#c62828",
    txt: "white"
  },
  {
    bg: "#b71c1c",
    txt: "white"
  }
];

export default function(temp) {
  //   return colors[Math.round(temp / 2) + 15];
  return materialColors[Math.round(temp / 2) + 4];
}
