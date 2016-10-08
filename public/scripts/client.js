$(function () {

  //jquery allowing only number inputs and math inputs

  //on click event listener
  $("input[type='submit']").on("click", function(event){
    event.preventDefault();
    //send text value on click
     console.log($("input[type='text']").val());

    //replace text value with calculated value
  });//end of equals button



});//end of jquery
