/**
 * Takes a high and low temp,
 * returns css for a gradient based on the MET office colors
 * TODO: make this not ugly. maybe step the gradient / change the colors?
 */
import TempToColor from "./tempColor.js";

export default function(high, low) {
  return `
    background: ${TempToColor(high)};
    background: -moz-linear-gradient(top, ${TempToColor(
      high
    )} 0%, ${TempToColor(low)} 100%);
    background: -webkit-linear-gradient(top, ${TempToColor(
      high
    )} 0%,${TempToColor(low)} 100%);
    background: linear-gradient(to bottom, ${TempToColor(
      high
    )} 0%,${TempToColor(low)} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${TempToColor(
      high
    )}', endColorstr='${TempToColor(low)}',GradientType=0 );
  `;
}
