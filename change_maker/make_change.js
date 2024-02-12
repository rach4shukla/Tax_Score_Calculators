const $ = selector => document.querySelector(selector);

/* Step 3. Code an event handler named processEntry() that gets the user’s entry
and checks to make sure that it is a number between 0 and 99. If so, call a
function named makeChange() and pass it the user’s entry. Otherwise,
display an alert dialog box for the error.*/

function processEntry() {
  let entered_value = parseInt($("#cents").value);

  if (!isNaN(entered_value) && entered_value >= 0 && entered_value <= 99) {
    makeChange(entered_value);
  } else {
    displayError("Please enter a number between 0 and 99.");
  }
}

/* Step 4. Code the makeChange() function, which should have one parameter that
accepts the user’s entry. This function shouldn’t return anything, but it
should display the results in the text boxes for Quarters, Dimes, Nickels,
and Pennies.*/

function makeChange(entered_value) {
    let quarters = entered_value / 25;
    entered_value %= 25;
  
    let dimes = entered_value / 10;
    entered_value %= 10;
  
    let nickels = entered_value / 5;
    entered_value %= 5;
  
    let pennies = entered_value;

  display_change(quarters, dimes, nickels, pennies);
}

function display_change(quarters, dimes, nickels, pennies) {
    $('#quarters').value = Math.floor(quarters);
    $('#dimes').value = Math.floor(dimes);
    $('#nickels').value = Math.floor(nickels);
    $('#pennies').value = Math.floor(pennies);
}

function displayError(message) {
  alert(message);
}

/* Step 5. Code a DOMContentLoaded event handler that attaches the
processEntry() event handler to the click event of the Make Change
button. Then, test this application. */

document.addEventListener('DOMContentLoaded', function() {
    let calculateButton = $('#calculate');
    calculateButton.addEventListener('click', processEntry);
  });
