function convertFtoC(fahrenheit) {
  let currentTemp = ((fahrenheit - 32) * 5) / 9;
  return currentTemp;
}
let celsiusTemp;
console.log(convertFtoC(212).toFixed(2));
console.log(convertFtoC(72).toFixed(2));
console.log(convertFtoC(32).toFixed(2));
console.log(convertFtoC(0).toFixed(2));
console.log(convertFtoC(-40).toFixed(2));
