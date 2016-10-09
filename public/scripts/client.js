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
        success: function(answer){
          console.log('what is this', answer);
          //replace text value with calculated value
          $('#theMath').val(answer);
          }
        }); //end of ajax
  });//end of equals button

  //on click event for all buttons in same class
  $('.theButtons').on('click', 'button', function() {

    //var to hold each buttons id
    var content = this.id;
    // apply button id to text while keeping orginal text
    var saveIt = $("#theMath").val();
    $("#theMath").val(saveIt + content);

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
});//end of jquery
