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
