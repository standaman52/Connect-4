$(function(){

  //grabs the board element
  $board = $("#board")
  //apends the board to the
  $("body").append($board);
  //main board
  $mainBoard = $("#mainBoard");
  //counts the number of clicks
  var count = 1;


//creates a the cirlce divs
  var generateCirlce = function(){
   //counts the number of clicks
    count++;
    //Ensures that the button clicked is either a red or yellow button
    if(count % 2 === 0){
      $(this).addClass("discRed").off("click")
    }
    else {
      $(this).addClass("discYellow").off("click")
    }
  }
//creates the triangle div
var generateTriangle = function(){
  $triangle = $("<div>").addClass("arrow-down");
  $('body').prepend($triangle)

}



  //creates the board template
  for (var i = 1; i < 50; i++) {
    $circleBox = $("<div>").addClass("circle").attr("id", "square"+i);
    //apends the divs to the boards.
    $board.append($circleBox);
    $circleBox.on("click",generateCirlce);
    $circleBox.on("mouseover", generateTriangle);
  }
})
