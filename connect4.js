$(function(){

  $canvas = $("canvas")
  red = '#FF5533';
  blue = '#D4FF33';
  var count = 0;
  toggle = false;
  var  redArray =[];
  var blueArray = [];
  var winCases = [  // this object contains a list of all winning
    // by row
    ['1', '2', '3', '4'],
    ['2', '3', '4', '5'],
    ['8', '9', '10', '11'],
    ['9', '10', '11', '12'],
    ['15', '16', '17', '18'],
    ['16', '17', '18', '19'],
    ['22', '23', '24', '25'],
    ['23', '24', '25', '26'],
    ['29', '30', '31', '32'],
    ['30', '31', '32', '33'],
    ['36', '37', '38', '39'],
    ['37', '38', '39', '40'],
    ['3', '4', '5', '6'],
    ['4', '5', '6', '7'],
    ['10', '11', '12', '13'],
    ['11', '12', '13', '14'],
    ['17', '18', '19', '20'],
    ['18', '19', '20', '21'],
    ['24', '25', '26', '27'],
    ['25', '26', '27', '28'],
    ['31', '32', '33', '34'],
    ['32', '33', '34', '35'],
    ['38', '39', '40', '41'],
    ['39', '40', '41', '42']

  ];


  var createCircle = function(color){
    index = $canvas_number;
    circle = $canvas[index].getContext('2d');
    circle.beginPath();
    circle.arc(50, 50, 50, 0, 2 * Math.PI, false);
    circle.fillStyle = color;
    circle.fill();
  }





  var checkWin = function(array){

    for (var i = 0; i < winCases.length; i++) {
        var fourInArow = 0;
      for (var j = 0; j < winCases[i].length; j++) {
        for (var m = 0; m < array.length; m++) {
          if(  winCases[i][j] === array[m]   )
          {
                    fourInArow++;
            console.log(winCases[i][j] +" WINCASES");
            console.log(array[m]);
            console.log("------------------------");


          }

        }
        if(fourInArow == 4 ){
          console.log("u win");
          return;
        }


      }
    }

  }



  var placeChip = function(){
    $canvas_clicked =$(this).attr('id');
    $canvas_number = $canvas_clicked - 1;
    $canvas_above_id = $(this).attr('id') - 7;
    canvas_above = $(this).parent().parent().prev().find('#' + $canvas_above_id);
    if(toggle == false){
      if ($canvas_clicked >= 36 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(red);
        $(this).off();
        toggle = true;
        redArray.push($canvas_clicked);
        console.log($canvas_clicked);
        // redArray.sort()
        console.log(redArray);
        count++;
       if (count >6) {
             checkWin(redArray);
       }


      }
    }
    else{
      if ($canvas_clicked >= 36 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(blue);
        $(this).off()
        toggle = false;
        blueArray.push($canvas_clicked);
        // blueArray.sort()
        console.log(blueArray);
        count++;
       if (count >6) {
             checkWin(blueArray);
       }



      }
    }

  }
  $("canvas").on("click", placeChip)

})
