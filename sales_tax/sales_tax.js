"use strict";

const $ = selector => document.querySelector(selector);

/* Step 3. Event handler function named processEntries() that gets the user entries
 & calculate sales tax and total, and display results */

function processEntries() {
    let subtotal_input = $("#subtotal");
    let taxrate_input = $("#tax_rate");
    let salestax_1 = $("#sales_tax");
    let total_input = $("#total");

// Step 3.a Getting entries from user

    let subtotal = parseFloat(subtotal_input.value);
    let tax_rate = parseFloat(taxrate_input.value);

//  Step 5. Adding Validation to processEntries() function for subtotal and tax rate

if (subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be > 0 and < 10000");
    subtotal_input.value = "Enter valid data";
    subtotal_input.focus();
    return;
}

if (tax_rate <= 0 || tax_rate >= 12) {
    alert("Tax Rate must be > 0 and < 12");
    taxrate_input.value = "Enter between 1 to 12";
    taxrate_input.focus();
    return;
}


// Calculate sales tax and total

    let tax_sales = (subtotal * tax_rate) / 100;
    let total = subtotal + tax_sales;

// Displaying results in the text boxes
    
    salestax_1.value = tax_sales.toFixed(2);
    total_input.value = total.toFixed(2);
}

/*  Step 4. Code a DOMContentLoaded event handler that attaches the processEntries() function 
to the click event of the Calculate button. Then, test what you have so far.

    Step 6. Add JavaScript that moves the cursor to the Subtotal field when the
application starts and when the user clicks on the Calculate button. */

document.addEventListener("DOMContentLoaded", function () {
    let calculate = $("#calculate");
    let clear_button = $("#clear");

    calculate.addEventListener("click", processEntries);

/* Step 7. Add the event handler for the click event of the Clear button. This event
handler should clear all text boxes and move the cursor to the Subtotal
field. */

    clear_button.addEventListener("click", function () {
        $("#subtotal").value = "";
        $("#tax_rate").value = "";
        $("#sales_tax").value = "";
        $("#total").value = "";
        $("#subtotal").focus();
    });

/* Step 8. Add event handlers for the click events of the Subtotal and Tax Rate
text boxes. Each handler should clear the data from the text box.
Update the event handler for the Clear button to call these functions as
well (to reduce code duplication). */

    $("#subtotal").addEventListener("click", function () {
        $("#subtotal").value = "";
        $("#subtotal").focus();
    });
    
    $("#tax_rate").addEventListener("click", function () {
        $("#tax_rate").value = "";
        $("#tax_rate").focus();
    });
    
});
