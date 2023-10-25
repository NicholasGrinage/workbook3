function getSocSecTax(preTaxPay) {
  return 0.062 * preTaxPay;
}
console.log(getSocSecTax(20000).toFixed(2));

console.log();

function getMedicareTax(preTaxPay) {
  return 0.0145 * preTaxPay;
}
console.log(getMedicareTax(30000).toFixed(2));

console.log();

function getFederalTax(preTaxPay, withholdingCode) {
  if (withholdingCode == 0) {
    return 0.23 * preTaxPay;
  } else if (withholdingCode == 1) {
    return 0.21 * preTaxPay;
  } else if (withholdingCode == 2) {
    return 0.195 * preTaxPay;
  } else if (withholdingCode == 3) {
    return 0.185 * preTaxPay;
  } else if (withholdingCode >= 4) {
    return (0.18 - (withholdingCode - 4) * 0.005) * preTaxPay;
  }
}
console.log(`$${getFederalTax(750, 0).toFixed(2)}`);
console.log(`$${getFederalTax(1550, 2).toFixed(2)}`);
console.log(`$${getFederalTax(1100, 6).toFixed(2)}`);

