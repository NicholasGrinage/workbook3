"use strict";
//get html elements into variables

const pickupDate = document.getElementById("pickupDate");
const numberOfDaysInput = document.getElementById("numberOfDaysInput");

const electronicCheckbox = document.getElementById("electronicCheckbox");
const gpsCheckbox = document.getElementById("gpsCheckbox");
const roadsideCheckbox = document.getElementById("roadsideCheckbox");

const underRadio = document.getElementById("underRadio");
const overRadio = document.getElementById("overRadio");

const estimateButton = document.getElementById("estimateButton");

const carRentalPrice = document.getElementById("carRentalPrice");
const optionsPrice = document.getElementById("optionsPrice");
const ageSurcharge = document.getElementById("ageSurcharge");
const totalAmountDue = document.getElementById("totalAmountDue");

//write functions to handle events
function estimateCost() {
  let days = Number(numberOfDaysInput.value);
  let costPerDay = 29.99;
  let carRentalCost = days * costPerDay;
  let optionsCost = 0;
  let under25Cost = 0;
  let totalCost = 0;

  if (electronicCheckbox.checked) {
    optionsCost = 3.95 * days;
  }
  if (gpsCheckbox.checked) {
    optionsCost = optionsCost + 2.95 * days;
    // optionsCost += 2.95 * days;
  }
  if (roadsideCheckbox.checked) {
    optionsCost = optionsCost + 2.95 * days;
  }
  if (overRadio.checked) {
    under25Cost = carRentalCost * 0.3;
  }
  totalCost = carRentalCost + optionsCost + under25Cost;

  console.log(carRentalCost, optionsCost, under25Cost);
}

//wire-up functions to events
estimateButton.onclick = estimateCost;
