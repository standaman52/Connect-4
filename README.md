<div id="wrapper">
  <div id="board_wrapper">
    <div id="column1" class="row_wrapper column">
      <div class="chip_holder">
        <canvas id="1" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="2" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="3" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="4" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="5" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="6" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="7" width="100" height="100"></canvas>
      </div>
    </div>
    <!--=======================================================  -->


    <div id="column2" class="row_wrapper column">
      <div class="chip_holder">
        <canvas id="8" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="9" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="10" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="11" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="12" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="13" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="14" width="100" height="100"></canvas>
      </div>
    </div>
    <!-- ===================== -->
    <div id="column3" class="row_wrapper column">
      <div class="chip_holder">
        <canvas id="15" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="16" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="17" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="18" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="19" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="20" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="21" width="100" height="100"></canvas>
      </div>
    </div>
<!--================================  -->
    <div id="column4" class="row_wrapper column">
      <div class="chip_holder">
        <canvas id="22" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="23" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="24" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="25" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="26" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="27" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="28" width="100" height="100"></canvas>
      </div>
    </div>
<!--================================  -->
    <div id="column5" class="row_wrapper column">
      <div class="chip_holder">
        <canvas id="29" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="30" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="31" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="32" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="33" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="34" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="35" width="100" height="100"></canvas>
      </div>
    </div>
<!--==============================  -->
    <div id="column6" class="row_wrapper">
      <div class="chip_holder">
        <canvas id="36" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="37" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="38" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="39" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="40" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="41" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="42" width="100" height="100"></canvas>
      </div>
    </div>
<!-- ============================ -->
    <div id="column6" class="row_wrapper">
      <div class="chip_holder">
        <canvas id="43" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="44" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="45" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="46" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="47" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="48" width="100" height="100"></canvas>
      </div>
      <div class="chip_holder">
        <canvas id="49" width="100" height="100"></canvas>
      </div>
    </div>
  </div>

</div>




#wrapper{
  margin:8px auto 6px;
  width: 732px;
  position: relative;
  cursor: pointer;
  /*border: 2px solid black;*/
}
#board_wrapper{
  height: 624px;
  /*border: 2px solid black;*/
}
div .row_wrapper{
  height: 104px;

}
div .row_wrapper div{
  width: 100px;
  height: 100px;
  border: 2px solid black;
  float: right;
  background-color: white;
}




        // for (var i = 1; i <= 4; i++) {
        //   var id = parseInt($canvas_clicked) + i;
        //
        //   var find = redArray.find(id)
        //   console.log(find);
        //   if(find === false){
        //     break;
        //   }
        // }
