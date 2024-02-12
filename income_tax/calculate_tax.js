"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	$("#income").focus();
	$("#calculate").addEventListener("click", processEntry);
});

/* Step 2. getting the user entry & ensuring a valid is being entered as input. 
If it is invalid, displaying error. 
Also, ensuring the focus should be moved to the first text box.*/

function processEntry() {
	const income_input = $("#income");
	const entry_value = parseInt(income_input.value);
  
	switch (true) {
		case isNaN(entry_value) || entry_value <= 0:
		  exhibitError("Entry is not valid. Enter a value greater than 0.");
		  break;
		default:
		  clearError();
		  const taxAmount = calculateTax(entry_value);
		  displayTaxAmount(taxAmount);
	  }
  
	income_input.focus();
  }
  
  let calculateTax = function (taxable_income) {
		let taxAmount;

	  /*use nested if statements and arithmetic expressions
to calculate the federal income tax that is owed for a taxable income amount.*/

		if (taxable_income>= 0 && taxable_income <= 9875) {
		  taxAmount = taxable_income * 0.10;
		} else if (taxable_income>= 9875 && taxable_income <= 40125) {
		  taxAmount = 987.5 + (taxable_income - 9875) * 0.12;
		} else if (taxable_income>= 40125 && taxable_income <= 85525) {
		  taxAmount = 4617.5 + (taxable_income - 40125) * 0.22;
		} else if (taxable_income>= 85525 && taxable_income <= 163300) {
		  taxAmount = 14605.5 + (taxable_income - 85525) * 0.24;
		} else if (taxable_income>= 163300 && taxable_income <= 207350) {
		  taxAmount = 33271.5 + (taxable_income - 163300) * 0.32;
		} else if (taxable_income>= 207350 && taxable_income <= 518400) {
		  taxAmount = 47367.5 + (taxable_income - 207350) * 0.35;
		} else {
		  taxAmount = 156235 + (taxable_income - 518400) * 0.37;
		}
	  
		return +taxAmount.toFixed(2);
	  }
	  
  
 const exhibitError = (errorMessage) => {
	const errorElement = $("#error_message");
	errorElement.textContent = errorMessage;
  }
  
  const clearError = () => {
	const errorElement = $("#error_message");
	errorElement.textContent = "";
  }
  
 const displayTaxAmount = (taxAmount) => {
	const taxOutput = $("#tax");
	taxOutput.value = taxAmount.toFixed(2);
  }