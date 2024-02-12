"use strict";
const $ = selector => document.querySelector(selector);

/* clearing a previous error message, or clearing a previously computed temp. value*/

const clear_texts = function (){
	$("#degrees_computed").value = "";
	$("#degrees_entered").value = "";
  };
  const clear_error = function (){
	$("#message").innerHTML = "";
  };

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

/* Step 4. Code the toggleDisplay() function so it changes the text in the labels for the text boxes to the values in the parameters that it receives. It should
also clear the disabled text box where the computed temperature is displayed.*/

const toggleDisplay = (label1Text, label2Text) => {
	$("#degree_label_1").textContent = label1Text;
	$("#degree_label_2").textContent = label2Text;
	clear_texts();
	clear_error();
}

/****************************
*  event handler functions  *
*****************************/

/* Code the convertTemp() function without any data validation. It should use the helper functions to calculate the temperature based on which
radio button is checked. The value returned by the helper functions should be rounded to zero decimal places.*/

const convertTemp = () => { 
	clear_error();
	const enter_degree = $("#degrees_entered").value;
	

  if (isNaN(enter_degree)) {
	clear_error();
    $("#message").textContent = "You must enter a valid number for degrees."; //Adding data validation and displaying message.
    $("#degrees_computed").value = "";
	$("#degrees_entered").select ();
    return;
  }

const selectedConversionType = $("input[name='conversion_type']:checked").id;
let conversion_type;

switch (selectedConversionType) {
  case "to_celsius":
    conversion_type = calculateCelsius(parseFloat(enter_degree));
    break;
  case "to_fahrenheit":
    conversion_type = calculateFahrenheit(parseFloat(enter_degree));
    break;
  default:
	conversion_type = 0;
    // Handle the default case if needed
    break;
}

$("#degrees_computed").value = Math.round(conversion_type).toFixed(0);
$("#message").textContent = "";

};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {

	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	/*  moving the focus to the first text box and selecting the text*/
	$("#degrees_entered").focus(); 
});