$(function(){

  $canvas = $("canvas")
  red = 'rgb(225,0,0)';
  black = 'rgb(0,0,0)';
  var count = 1;


  var createCircle = function(color){
    index = $canvas_number;
    circle = $canvas[index].getContext('2d');
    circle.beginPath();
    circle.arc(50, 50, 40, 0, 2 * Math.PI, false);
    circle.fillStyle = color;
    circle.fill();
  }


  var placeChip = function(){
    count++;


    $canvas_clicked =$(this).attr('id');
    console.log($canvas_clicked);
    $canvas_number = $canvas_clicked - 1;
    $canvas_above_id = $(this).attr('id') - 7;
    canvas_above = $(this).parent().parent().prev().find('#' + $canvas_above_id);
    if ($canvas_clicked % 2 == 1){
      if ($canvas_clicked >= 43 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(red);
      }
    }
    else {
      if ($canvas_clicked >= 43 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(black);
}}
  }

  $("canvas").on("click", placeChip)

})
