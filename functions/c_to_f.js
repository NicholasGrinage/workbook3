function convertCtoF(celsius) {
  let currentTemp = (celsius * 9) / 5 + 32;
  return currentTemp;
}
let celsiusTemp;
console.log(convertCtoF(100).toFixed(2));
console.log(convertCtoF(45).toFixed(2));
console.log(convertCtoF(19).toFixed(2));
console.log(convertCtoF(0).toFixed(2));
console.log(convertCtoF(-7).toFixed(2));
console.log(convertCtoF(-40).toFixed(2));