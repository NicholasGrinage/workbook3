function displayMailingLabel(name, address, city, state, zip) {
  console.log("\n", name, "\n", address, "\n", city, "\n", state, "\n", zip);
}

displayMailingLabel("Nicholas", "500 Grant St", "Pittsburgh,", "PA", "15219");
displayMailingLabel("Delmar", "501 Grant St", "Pittsburgh,", "PA", "15789");

console.log();

function addNumbers(num1, num2) {
  console.log(num1 + num2);
}

addNumbers(2, 5);

console.log();

addNumbers(3, 6);

console.log();

function displayReceipt(totalDue, amountPaid) {
  let changeDue = amountPaid - totalDue;
  console.log("Total Due: $" + totalDue);
  console.log("Amount Paid: $" + amountPaid);
  console.log("Change Due: $" + changeDue);
}

displayReceipt(250, 200);

console.log();

displayReceipt(200, 250);

console.log();

displayReceipt(200, 200);

console.log();
