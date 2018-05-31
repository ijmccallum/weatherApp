/**
 * Takes a high and low temp,
 * returns css for a gradient based on the MET office colors
 * TODO: make this not ugly. maybe step the gradient / change the colors?
 */
import TempToColor from "./tempColor.js";

export default function(high, low) {
  let highClr = TempToColor(high);
  let lowClr = TempToColor(low);
  return `
    background: ${highClr.bg};
    background: -moz-linear-gradient(top, ${highClr.bg} 0%, ${lowClr.bg} 100%);
    background: -webkit-linear-gradient(top, ${highClr.bg} 0%,${
    lowClr.bg
  } 100%);
    background: linear-gradient(to bottom, ${highClr.bg} 0%,${lowClr.bg} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${
      highClr.bg
    }', endColorstr='${lowClr.bg}',GradientType=0 );
  `;
}
