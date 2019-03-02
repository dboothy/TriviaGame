# **TriviaGame**

TrivaGame is an app game that allows users to click buttons to guess the correct answers to questions within a given allotment of time, ending when the user submits all of their answers to the questions.

![Demo](assets/images/trivia_game_display.gif)

## **Motivation**
Learning how to code without repeating code and how to capture input data. The sauce  behind this project lies within its dynamic nature and utilizing the engine that the jQuery library provides.  


## **Libraries** 

**jQuery, Bootstrap**


## **Installation** 

Find the latest versions of jQuery and Bootstrap libraries:
- [jQuery](https://code.jquery.com/)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

Copy and paste the Bootstrap CSS CDN link within the `<head>` tags of an HTML document
Copy and paste the Bootstrap JS CDN link and the minified jQuery JS CDN link above the `</body>` tag

## **Getting Started**
In the HTML file, set up the elements needed for the game:

### HTML
**Countdown timer:** <br>
``` HTML
<div id="heading" class="hide">
<h2>Time remaining: <span id="timer"></span></h2>
</div>
```

**Space for the questions and answer buttons content with submit finish button:** <br>
``` HTML
<div id="gameWrap" class="hide">
<div id="questionWrap"></div>
<button id="finish" class="btn btn-warning">FINISH</button>
</div>
```

**Welcome message with start button where results are hidden until after the game finishes:**
```		HTML				
<div id="welcome">
<div id="results" class="hide"></div>
<button id="startGame" class="textBox">Start</button>
</div><p>try and answer as many question in the time allowed</p
```

**Out of time alert modal:**
``` HTML
<div id="alert" class="modal fade" role="dialog">
<div class="modal-dialog">
 <!-- Modal content-->
 <div class="modal-content">
   <div class="modal-body" align="center">
     <h2>OH NO, you are <br> out of time!</h2>
   </div>
 </div>
</div>
 ```

### CSS
**Content container:**<br>
``` CSS
.content-container {
    color: #fff;
    margin-top: 13%;
    background-color: rgba(0,0,0,0.8);
    padding: 3% 5%;
}
```

**Buttons:**<br>
``` CSS
button, .btn {
    background: transparent;
    padding: 10px 20px;
    font-size: 28px;
    text-transform: uppercase;
    border-radius: 10px;
```

### JavaScript

**Question object (gameArray):**<br>

Assign variable to an array of objects containing key value pairs to string-value 'questions', string-value answer 'options' and the numerical value of which is the correct 'answer'.

``` JavaScript
var gameArray = [
	{
		question: "Which 'Friday the 13th' did Jason first wear his iconic mask?",
		options: ["Friday the 13th", "Friday the 13th Part 2", "Friday the 13th Part 3", "Friday the 13th: The Final Chapter"],
		answer: 2	
	},

	{
		question: "Which film did Lawrence Fishbourne star as Russell Stevens Jr. in 1992?",
		options: ["'Deep Cover'", "'The Matrix'", "'Boyz In Da Hood'", "The Tuskegee Airmen"],
		answer: 0	
	},

	{
		question: "In 'The Fast and the Furious', which car did Brian pay Dominic back with for destroying his Mazda RX-7?",
		options: ["Subaru STI", "Nissan Skyline GT-R", "Toyota Supra", "Mercedes S500"],
		answer: 2	
	},
	{
		question: "Which nickname is used to describe an assassin in two Luc Besson films, Leon: The Professional and Nikita??",
		options: ["'Janitor'", "'Cleaner'", "'Disposer'", "'Handyman'"],
		answer: 1	
	},
	{
		question: "Which car does Smartie steal from Chan Ho-Nam, kicking off their camaraderie?",
		options: ["Mazda RX-7", "BMW 335i", "Honda Civic EG Type R", "Toyota MR-2"],
		answer: 3	
	}
];
```
**Answer Tracking**
Represent the values of each answer and assign numerical value null so that they remained unanswered until they are able to be incremented and marked answered
``` JavaScript
var answers = [null, null, null, null, null];
```

## jQuery

**Initialize game start with a button click**
Code selects the click of the element assigned to ID 'startGame' and kicks of functions selecting elements with ID 'heading', 'gameWrap'   
``` JavaScript
$(document).ready(function (){
	// start game 
	$("#startGame").on("click", function(){
		// show the heading
		// hide the welome
		$("#heading, #gameWrap").removeClass("hide");
		$("#welcome").addClass("hide");
		startTimer();
		displayQuestions();
	});
```
