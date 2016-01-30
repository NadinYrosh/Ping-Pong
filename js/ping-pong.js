$(document).ready(function() {
  var enteredNumber = function(countTo){
    var output= [];
      for (var i = 1; i <= countTo; i++);
        if (i % 15 === 0){
          output.push("pingpong");
          }
          else if (i % 3 === 0) {
            output.push("ping");
          }
          else if (i % 5 === 0){
            output.push("pong");
          }
          
  }
});
