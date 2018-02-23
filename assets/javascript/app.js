
var gameArray = [
	{
		question: "q1",
		options: ["London", "Paris", "Omaha", "Chicago"],
		answer: 3	
	},

	{
		question: "q2",
		options: ["London", "Paris", "Omaha", "Chicago"],
		answer: 0	
	},

	{
		question: "q3",
		options: ["London", "Paris", "Omaha", "Chicago"],
		answer: 1	
	}
];

var right = 0;

var wrong = 0;

var timer = 0;

var answers = [null, null, null];
/*nulls represent the values of each question answer and are placed so that they remained unanswered until they actually are marked answered*/

$(document).ready(function (){
	// start game 
	$("#startGame").on("click", function(){
		// show the heading
		// hide the welome
		$("#heading, #gameWrap").removeClass("hide");
		$("#welcome").addClass("hide");
		displayQuestions();
	});

	$(document).on("click", ".options", function(){
		// console.log($(this).txt());

		/*whatever option is clicked on, the number question where the option belongs to*/
		var questionNumber = $(this).attr("question");
		//console.log(questionNumber);
		// get the option "attribute" : "question" value from the button clicked

		/*question value represents whichever option was clicked on*/
		// get the "value" from the button that is clicked 
		var questionValue = $(this).val()
		//console.log(questionValue)

		//console.log(`button[question="${questionNumber}"]`)
		// select a button by a perticular attr
		// remove class selected from all buttons in the clicked buttons btn group (questionNumber)
		$(`button[question="${questionNumber}"]`).removeClass("selected");
		/* on click of a button, any button with the same question attribute as the button click, remove the selected class that have the same attributed */
		$(this).addClass("selected");

		/*then whatever button on clicked, add the class selected */

		answers.splice(questionNumber, 1, questionValue);
		//console.log(answers)
		/*on the answers array, the first argument passed in takes the value of the question attribute to position where the options value will be updated on the answers array*/
	})
}); 

function displayQuestions(){
	// write a funtion to loop through the gameArray
	for(var i = 0; i < gameArray.length; i++){
		/*
		<div>
			<h3></h3>
			<div>
				<button></button>
				<button></button>
				<button></button>
			</div>
		</div>
		*/
		// i is the current objet in the loop of the array
		//console.log(gameArray[i]);
		// create a varibale that holds a h3 element
		// add text to the variable above
			// the text will the value of question at the current objet

		/* container to hold everything that will be created in jquery
		 the container then will be added to the page with everyting in it 	*/
		var $questionGroup = $("<div>");
		$questionGroup.addClass("qGrp grp-"+i)
		/*div will have unique identifiers that will add respective class values on them as well as a single class to target the whole group */


		/* a heading tag is added on each loop of the gamearray for each question in each object */
		var $h3 = $("<h3>");
		$h3.text(gameArray[i].question);
		$($questionGroup).append($h3);

		/* each tag is appended to each of the questions*/

		// loop through the current object's option array
		/*container to hold button groups and is added the class for the bootstrap styling 'btn-group'*/
		var $btnWrap = $("<div>");
		$btnWrap.addClass("btn-group");
		$btnWrap.attr("role", "group");
		$btnWrap.attr("arial-label", "Basi example")

		//console.log(gameArray[i].options);
		/*within the loop through each object, there's a loop through each options, array*/
		for(var j = 0; j < gameArray[i].options.length; j++){
			// create html for eah question
			// loop through the options array 
			// create html for the options
			// append the elements to the page 


			// for each option reate a button andd attributes and classes and text
			// <button type="button" class="btn btn-primary"></button>
			/*within the loop through each options array on each object, a button div is added and a few classes are added, and for one of the attributes, the value attribute, the index represents the particular option and on the questions attribute the the question identifier is represented */
			var $button = $("<button>");
			//button is added to each option

			$button.text(gameArray[i].options[j]);
			//text is added on each option button

			$button.addClass("btn btn-primary options")
			//class is added for bootstrap styling and custom styling

			$button.attr("type","button");
			//button type for boostrap 

			$button.attr("value",j);
			/*button value adds a unique identifier for each  option represented by j instead of i because it's looped through the first loop*/

			$button.attr("question",i);
			/*identifier to represent which question the option belongs to to match questions and answers*/

			$($btnWrap).append($button);
		}
		//button group is added to question group containeer
		$($questionGroup).append($btnWrap);

		//questionsGroup appended to gamewrap
		$("#questionWrap").append($questionGroup);

	}
}



