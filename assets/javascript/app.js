$(document).ready(function (){

  var timeLeft = 0


$("#startGame").on("click", replaceStart);




  
 function replaceStart (){

 $("#startGame").replaceWith("<p>Time Remaining: " + timeLeft + "</p><br><br><p> Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam arcu sem</p><br><br><p>Maecenas a diam non quam auctor venenatis vitae a neque. Suspendisse scelerisque</p><br><br><p> semper urna a, commodo placerat metus. Nam vehicula purus ut est accumsan</p>").addclass()
      
  };


}); 





