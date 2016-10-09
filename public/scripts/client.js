$(function () {

  //jquery allowing only number inputs and math inputs


  //on click event listener
  $('form').on('submit', function(event){
    event.preventDefault();

     var mathInput = $("input[type='text']").val();
     //turn string into array

     //send array to calculator.js
     $.ajax({
        type: 'POST',
        url: '/calculator',
        data: {'type': mathInput},
        success: function () {
          console.log('got it');
        }
      });//end of ajax
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


});//end of jquery



//javascript funiton to turn array into object
// function toObject(arr) {
//   var mathObject = {};
//   for (var i = 0; i < arr.length; ++i)
//     mathObject[i] = arr[i];
//   return mathObject;
// }
