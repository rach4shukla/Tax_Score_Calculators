"use strict";
const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
let highestName;

document.addEventListener("DOMContentLoaded", () => {

	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);

	$("#name").focus()


	/* Step 3. Write the displayResults() function. 
	It should derive the average score and the highest score from the arrays and  then display the results in the div element with “results” as its id as shown above. 
	To display the results, add nodes to the DOM with the heading as an h2 element and the average and  highest scores as <p> elements. 
	If those nodes already exist, you’ll need to replace them.*/

	function displayResults() {
		let score_result = $("#results");
		let mean = scores.reduce((total, score) => total + score, 0) / scores.length;
		let highest = Math.max(...scores);
		
		for(let j=0;j<scores.length;j++){
			if(scores[j]==highest){
				highestName=names[j]
			}

		}
	
		while (score_result.firstChild) {
		  score_result.removeChild(score_result.firstChild);
		}
	
		let title = document.createElement("h2");
		title.textContent = "Results";
		score_result.appendChild(title);
	
		let avg_score = document.createElement("p");
		avg_score.textContent = `Average Score: ${mean.toFixed(2)}`;
		score_result.appendChild(avg_score);
	
		let highestScore = document.createElement("p");
		highestScore.textContent = `Highest Score:${highestName} has the highest score of ${highest}`;
		score_result.appendChild(highestScore);
	  }

	/* Step 4. Write the displayScores() function. 
	It should get the names and scores from the arrays and display them in the div element with “scores” as its id, as shown above. 
	To display the results, add nodes to the DOM with the name and score as label elements, and a break element (<br>) to go to a new line. 
	Before adding these nodes, you can clear any previous nodes by setting the text content of the div to an empty string.*/

	  function displayScores() {
		let showScore = $("#scores");
		showScore.textContent = "";
	
		for (let k = 0; k < names.length; k++) {
		  let labelName = document.createElement("label");
		  labelName.textContent = `${names[k]}: `;
		  showScore.appendChild(labelName);
	
		  let labelScore = document.createElement("label");
		  labelScore.textContent = scores[k];
		  showScore.appendChild(labelScore);
	
		  let lineBreak = document.createElement("br");
		  showScore.appendChild(lineBreak);
		}
	  }

	  /* Step 5. Write the addScore() function. 
	  It should add a name and score to the two arrays. 
	  To test whether this works, you can click the Display Scores button and see if the new name and score have been added to the table.*/
	
	  function addScore() {
		let enterName = $("#name");
		let inputValue = $("#score");
		let show_error = enterName.nextElementSibling;
		let value_error = inputValue.nextElementSibling;
	
		show_error.textContent = "";
		value_error.textContent = "";
	
		let name = enterName.value.trim();
		let score = parseInt(inputValue.value);
	
	/* Step 6. If you haven’t already done it, add data validation to addScore() function.
	The Name entry must not be empty and the Score entry must be a positive number from 0 through 100. 
	If either entry is invalid, display messages in the span elements after the input elements, as shown above.*/

		if (name === "") {
		  show_error.textContent = "Please Enter a name";
		  enterName.focus();
		  return;
		}
	
		if (isNaN(score) || score < 0 || score > 100) {
		  value_error.textContent = "Score must be between 0 and 100.";
		  inputValue.focus();
		  return;
		}
		names.push(name);
		scores.push(score);
		enterName.value = "";
		inputValue.value = "";
	  }
	
});