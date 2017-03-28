$(function(){

  $canvas = $("canvas")
  red = '#FF5533';
  blue = '#D4FF33';
  var count = 0;
  toggle = false;
  var  redArray =[];
  var blueArray = [];
  var winCases = [  // this object contains a list of all winning combinations
    // by downward diagonal
    ['1', '9', '17', '25'],
    ['2', '10', '18', '26'],
    ['3', '11', '19', '27'],
    ['4', '12', '20', '28'],
    ['8', '16', '24', '32'],
    ['9', '17', '25', '33'],
    ['10', '18', '26', '34'],
    ['11', '19', '27', '35'],
    ['15', '23', '31', '39'],
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
    ['39', '40', '41', '42'],
    // by column
    ['1', '8', '15', '22'],
    ['2', '9', '16', '23'],
    ['3', '10', '17', '24'],
    ['4', '11', '18', '25'],
    ['5', '12', '19', '26'],
    ['6', '13', '20', '27'],
    ['7', '14', '21', '28'],

    ['8', '15', '22', '29'],
    ['9', '16', '23', '30'],
    ['10', '17', '24', '31'],
    ['11', '18', '25', '32'],
    ['12', '19', '26', '33'],
    ['13', '20', '27', '24'],
    ['14', '21', '28', '35'],

    ['15', '22', '29', '36'],
    ['16', '23', '30', '37'],
    ['17', '24', '31', '38'],
    ['18', '25', '32', '39'],
    ['19', '26', '33', '40'],
    ['20', '27', '34', '41'],
    ['21', '28', '35', '42'],
  ];






  var createCircle = function(color){
    index = $canvas_number;
    circle = $canvas[index].getContext('2d');
    circle.beginPath();
    circle.arc(50, 50, 50, 0, 2 * Math.PI, false);
    circle.fillStyle = color;
    circle.fill();
  }
  var fourInArow = 0;
  var checkWin = function(){
    for (var i = 0; i < winCases.length; i++) {
      for (var j = 0; j < winCases[i].length; j++) {
        for (var m = 0; m < redArray.length; m++) {
          if(  winCases[i][j] === redArray[m]   )
          {

            console.log(winCases[i][j] +"WINCASES");
            console.log(redArray[m]);
              console.log("------------------------");
                  fourInArow++;

          }

        }
        if(fourInArow > 5 ){
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
      //  console.log(redArray);
    count +=1;

       if(count > 5){
       checkWin()
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
        count +=1;
        // if(count == 7){
        //   checkWin(blueArray)
        // }
        // console.log(blueArray);
      }
    }

  }
  $("canvas").on("click", placeChip)

})
