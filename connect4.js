$(function(){

  $canvas = $("canvas")
  red = 'rgb(225,0,0)';
  black = 'rgb(0,0,0)';
  var count = 1;
  toggle = false;


  var createCircle = function(color){
    index = $canvas_number;
    circle = $canvas[index].getContext('2d');
    circle.beginPath();
    circle.arc(50, 50, 50, 0, 2 * Math.PI, false);
    circle.fillStyle = color;
    circle.fill();
  }


  var placeChip = function(){


    $canvas_clicked =$(this).attr('id');
    console.log($canvas_clicked);
    $canvas_number = $canvas_clicked - 1;
    $canvas_above_id = $(this).attr('id') - 7;
    canvas_above = $(this).parent().parent().prev().find('#' + $canvas_above_id);
    if(toggle == false){
      if ($canvas_clicked >= 36 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(red)
        $(this).off()
        toggle = true;
      }
    }

    else{
      if ($canvas_clicked >= 36 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(black);
        $(this).off()
        toggle = false;
      }

    }
  }
  $("canvas").on("click", placeChip)


 var winRow = ['36', '37', '38', '39']
  for (var i = 1; i < winRow.length; i++) {
     if($canvas[i] == winRow[i]){
       console.log("One win state");
     }
  }

})
