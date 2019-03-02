# **TriviaGame**

TrivaGame is an app game that allows users to click buttons to guess the correct answers to questions within a given allotment of time, ending when the user submits all of their answers to the questions.

![Demo](assets/images/trivia_game_display.gif)

## **Motivation**
Learning how to code without repeating code and how to capture input data. The sauce  behind this project lies within its dynamic nature and utilizing the engine that the jQuery library provides.  


## **Libraries** 

**jQuery, Bootstrap**


## **Installation** 

Find the latest versions of jQuery and Bootstrap libraries
- [jQuery](https://code.jquery.com/)
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

Copy and paste the Bootstrap CSS CDN link within the `<head>` tags of an HTML document
Copy and paste the Bootstrap JS CDN link and the minified jQuery JS CDN link above the `</body>` tag

## **Getting Started**
In the HTML file, set up the elements needed for the game

### HTML
**Countdown timer** <br>
``` HTML
<div id="heading" class="hide">
<h2>Time remaining: <span id="timer"></span></h2>
</div>
```

**Space for the questions and answer buttons content with submit finish button** <br>
``` HTML
<div id="gameWrap" class="hide">
<div id="questionWrap"></div>
<button id="finish" class="btn btn-warning">FINISH</button>
</div>
```

**Welcome message with start button where results are hidden until after the game finishes**
```		HTML				
<div id="welcome">
<div id="results" class="hide"></div>
<button id="startGame" class="textBox">Start</button>
</div><p>try and answer as many question in the time allowed</p
```

**Out of time alert modal**
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
**Content container**<br>
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

**Question object (gameArray)**<br>

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

### jQuery

**Initialize game start with a button click**<br>
Code selects the click of the element assigned to ID 'startGame' and kicks of functions selecting elements with ID 'heading', 'gameWrap' and functions that populate the gameWrap with questions and buttons as well as the function that starts the timer.

These functions are built into jQuery, "removeClass" and "addClass". They manipulate the appearance of the elements on the DOM.
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
**Timer**<br>
Start the timer to countdown by 1 from 30 seconds and prompt modal alert when countdown decrements to 0.

Select the element and pass in the timer variable assigned to a number length of the timer. 

Assign variable to window method setInterval function to set the rate of when the value of timer decrements to 1000, equating to 1 second.

Create condition that when timer decrements to 0, the decrement should stop at 0 and the modal alert is executed. setTimout functiona also kicks off on a delay of 3000 which equates to 3 seconds.


``` JavaScript
function startTimer(){
	var timer = 30;
	$("#timer").text(timer)
	// show initial timer in #timer

	countDown = setInterval(function(){ 
		// $("#timer").text("");
		--timer
		$("#timer").text(timer);
		// stop timer at 0
		if(timer === 0){
			clearInterval(countDown);
			$("#alert").modal('show');
			setTimeout(function(){
			// display a modal that says out of time
			 //displayResults();
			}, 3000)
		}

}, 1000);
	// set interval
	// every second do something
	
}
```

## Resources 

### jQuery API Documentation

[**.on()**](https://goo.gl/yZMMX7)<br>
Attach an event handler function for one or more events to the selected elements.

[**.ready()**](https://goo.gl/AxpVqz)<br>
Specify a function to execute when the DOM is fully loaded.

[**.addClass()**](https://goo.gl/crHTj7)<br>
Adds the specified class(es) to each element in the set of matched elements.

[**.attr()**](https://goo.gl/a6bz4V)<br>
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.

[**.append()**](https://goo.gl/56qcwb)<br>
Insert content, specified by the parameter, to the end of each element in the set of matched elements.

[**.text()**](https://goo.gl/3h4qku)<br>
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.

[**.removeClass()**](https://goo.gl/n6979i)<br>
Remove a single class, multiple classes, or all classes from each element in the set of matched elements.

## MDN Web Docs

[**splice()**](https://goo.gl/hT6XdR) <br>
method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

[**Template literals (Template strings)**](https://goo.gl/tGqPt8) <br>
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

[**setInterval()**](https://goo.gl/nzwRB2) <br>
repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. It returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval(). 

[**clearInterval()**](https://goo.gl/4DXTTh) <br>
method of the WindowOrWorkerGlobalScope mixin cancels a timed, repeating action which was previously established by a call to setInterval().

[**setInterval()**](https://goo.gl/neVzV6) <br>
method of the WindowOrWorkerGlobalScope mixin (and successor to Window.setTimeout()) sets a timer which executes a function or specified piece of code once the timer expires
