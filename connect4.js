$(function(){
//declaring global variables
  $canvas = $("canvas");
  red = '#FF5533';
  blue = '#D4FF33';
  white = "#FFFFFF ";
  var count = 0;
//declaring empty array
  var  redArray =[];
  var blueArray = [];
  var p1Score = 0;
  var p2Score = 0;
  var index = null;
  var $canvas_clicked;
  var  toggle = false;
//An array of all the possible win casses
  var winCases = [
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
    ['1', '9', '17', '25'],
    ['2', '10', '18', '26'],
    ['3', '11', '19', '27'],
    ['4', '12', '20', '28'],
    ['8', '16', '24', '32'],
    ['9', '17', '25', '33'],
    ['10', '18', '26', '34'],
    ['11', '19', '27', '35'],
    ['15', '23', '31', '39'],
    ['16', '24', '32', '40'],
    ['17', '25', '33', '41'],
    ['18', '26', '34', '42'],
    ['7', '13', '19', '25'],
    ['6', '12', '18', '24'],
    ['5', '11', '17', '23'],
    ['4', '10', '16', '24'],
    ['14', '20', '26', '32'],
    ['13', '19', '25', '31'],
    ['12', '18', '24', '30'],
    ['11', '17', '23', '29'],
    ['21', '27', '33', '39'],
    ['20', '26', '32', '38'],
    ['19', '25', '31', '37'],
    ['18', '24', '30', '36']

  ];
  //A function that create a circle using a canvas html element
  //takes three paramater which will be passed later in another function
  var createCircle = function(color, radius ,index ){
    //Sets default 25 else undefined else
    radius = (typeof radius !== 'undefined') ? radius: 25;
    index = typeof index !== 'undefined' ? index: $canvas_number;
    circle = $canvas[index].getContext('2d');
    //got this from w3school
    circle.beginPath();
    circle.arc(25, 25, radius, 0, 2 * Math.PI, false);
    circle.fillStyle =  color;
    circle.fill();
  };
 //This resets the board after the first round of play.
  var resetBoard = function(){
    var radius = 25.1;
    for (var i = 0; i < $canvas.length; i++) {
      createCircle(white, radius, i);
    }
    // $canvas.removeClass('has_chip');
    //This calls the play function after the board is reset
    $("canvas").on("click", placeChip);

  };

//This tracks the score of player 1 by using a incrementer
  var player1ScoreBoard = function(score){
    if (score) {
      $score = $('#p1').text(score);
      $score = score;
    }
  };
//This tracks the score of player 1 by using a incrementer
  var player2ScoreBoard = function(score){
    if (score) {
      $score  =  $('#p2').text(score);
      $score = score;
    }
  };
//This checks for all the posible wins. using three for loops.
//The first two 'for loops' check for the element in the individual
//array and the third 'for loop' checks for the arrays that are pushed into
//their respective array
  var checkWin = function(array){
    for (var i = 0; i < winCases.length; i++) {
      var fourInArow = 0;
      for (var j = 0; j < winCases[i].length; j++) {
        for (var m = 0; m < array.length; m++) {
          if(  winCases[i][j] === array[m]   )
          {

            fourInArow++;
          }
        }
        //This checks the array if there are four numbers
        //and returns a true statement
        if(fourInArow === 4 ){
          return true;
        }
      }
    }
  };
//This functions places the created chip onto the board.
  var placeChip = function(){
    //Saves the chipId into a variable
    $canvas_clicked =$(this).attr('id');
     //This substracts one since canvas element start from 0
    $canvas_number = $canvas_clicked - 1;
    //this subracts 7 to get the canvas above id
    $canvas_above_id = $(this).attr('id') - 7;
    canvas_above = $(this).parent().parent().prev().find('#' + $canvas_above_id);

    if(toggle === false){
   //ensures that the div clicked is greater than 36
      if ($canvas_clicked >= 36 ||$(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        //places a class after the canvas is clicked
        canvas_above.attr('class', 'can_place');
        //creates a circle by passing a paramater of the color
        createCircle(red);
          //ensures that the color dosen't change after a user clicks
        $(this).off();
        //resets toggle to true for the other color to display
        toggle = true;
        //pushes the element to the red array
        redArray.push($canvas_clicked);
        console.log(redArray);
        if (redArray){
          var result =  checkWin(redArray);
        }
        //
        if(result === true){
          $displayResult = $("<p>").attr("id", "displayResult");
          $displayResult.text("Red Wins").css("color","red");
          $('#board_wrapper').prepend($displayResult);
          p1Score++;
          player1ScoreBoard(p1Score);
          //resetBoard();


        }

      }


    }
    else{
      //enurses that the yellow chip is placed after cell 35
      if ($canvas_clicked >= 36 || $(this).hasClass('can_place')){
        $(this).attr('class', 'has_chip');
        canvas_above.attr('class', 'can_place');
        createCircle(blue);
        $(this).off();
        toggle = false;
        blueArray.push($canvas_clicked);
        console.log(blueArray);
        if (blueArray){
          var result =checkWin(blueArray);
        }
        if(result === true){
          $displayResult = $("<p>").attr("id", "displayResult");
          $displayResult.text("Yellow Wins").css("color","yellow");
          $('#board_wrapper').prepend($displayResult);
          p2Score++;
          player2ScoreBoard(p2Score);

        }

      }
    }
  };
  $("canvas").on("click", placeChip);

  $('.myButton').on("click", function(){
//empties the array
    redArray = [];
    blueArray = [];
    console.log(blueArray);
//calls the reset function
    resetBoard();
    sessionStorage.setItem('key', '');
    var data = sessionStorage.getItem('key');
    $('.player').append(data);

  });
//refreshes the page
  $('.myButton1').on("click", function(){
    location.reload();
  });
});
