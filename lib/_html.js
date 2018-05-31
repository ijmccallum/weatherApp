/**
 * A dev utility for syntax highlighting html inside template literals
 * pulled from a previous side project: https://github.com/ijmccallum/Mini-Site-Generator
 * requires a VSCode plugin: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
 * Also an opportunity to hook into any function that is generating markup if there was ever a reason for that!
 */

export default function(strings, ...keys) {
  let returnString = "";
  strings.forEach(function(str, i) {
    returnString += str;
    if (typeof keys[i] !== "undefined") {
      returnString += keys[i];
    }
  });
  return returnString;
}
