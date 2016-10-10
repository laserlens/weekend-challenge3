$(function () {

  // turn off all keypresses on input except the numbers
  $('input').keypress(function(e) {
    var a = [];
    var k = e.which;
    for (i = 48; i < 58; i++)
      a.push(i);
    if (!(a.indexOf(k)>=0))
      e.preventDefault();
    });

  //on submit event listener
  $('form').on('submit', function(event){
    event.preventDefault();
     var mathInput = $("input[type='text']").val();

     //creates object and sends to calculator.js
     $.ajax({
        type: 'POST',
        url: '/calculator',
        data: {'type': mathInput},
        success: function () {
          console.log('got it');
        }
      });//end of ajax

      //gets the answer from calculator.js and puts it into input.val()
      $.ajax({
        type: 'GET',
        url: '/calculator',
        error: function () {
          $('#theMath').val('ERROR');
        },
        success: function(answer){
          //console.log('what is this', answer);
          var n = Number(answer);
          if ( n == NaN ) {
            $('#theMath').val('ERROR');
          } else {
          //replace text value with calculated value
            $('#theMath').val(answer);
          }
         }
        }); //end of ajax
  });//end of equals button

  //on click event for all buttons in same class
  $('.theButtons').on('click', 'button', function() {

    //var to hold each buttons id
    var content = this.id;
    // apply button id to text while keeping orginal text
    var saveIt = $('#theMath').val();
    $('#theMath').val(saveIt + content);

  });//end of theButtons event listener

  //when clear button is pressed also tell calculator.js to reset mathObject to []
  $('#clearButton').click(function(){

    $.ajax({
       type: 'DELETE',
       url: '/calculator',
       success: function () {
         console.log('cleared it');
       }
     });//end of ajax
  });

  // audio sorce and createElement
  var audioError = document.createElement('audio');
  audioError.setAttribute('src', 'http://www.wavsource.com/snds_2016-10-09_1797402624934163/movies/2001/just_what.wav');
  //audio click event
  $('#equalsButton').click(function() {
      //set to wait giving time for servier.js to return answer
      setTimeout(audioFun, 50);
  });
  // funtion to ckeck if input text is ERROR play if is
  function audioFun (){
    var s = $("input[type='text']").val();
    //console.log('s is', s);
    if (s == 'ERROR') {
      audioError.play();
    }
  }

});//end of jquery
