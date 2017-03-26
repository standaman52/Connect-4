$(function(){
  //create div container
  $wrapper = $("<div>").addClass("wrapper");
  $("body").append($wrapper);

  //create a board wrapper
  $board_wrapper = $("<div>").addClass("board_wrapper");
  $wrapper.append($board_wrapper);

  //create a row wrapper
  for (var i = 1; i < 8; i++) {
    $row_wrapper = $("<div>").addClass("row_wrapper").attr("id", "row"+i);
    $board_wrapper.append($row_wrapper
    )
  }
  //creates row of chips
  for (var i = 0; i < 6; i++) {
    $chip_holder = $("<div>").addClass("chip_holder");
    $(".row_wrapper").append($chip_holder);
  }
  


})
