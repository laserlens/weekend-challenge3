for (var i = 0; i < mathArray.length; i++) {
  if (i % 2 === 0) { // index is even
   numbers.push(mathArray[i]);
 } else {
   mathElement.push(mathArray[i]);
 }
 //separate the numbers from the math functions
 var numbers = [];
 var mathElement = [];
 for (var i = 0; i < mathArray.length; i++) {
   if (i % 2 === 0) { // index is even
    numbers.push(parseInt(mathArray[i]));
    } else {
    mathElement.push(parseInt(mathArray[i]));
  }
  }
  console.log(numbers[0] + mathElement[1] + numbers[2]);

//var mathThing = $(this).serialize();
  var mathArray = mathText.split(" ");
  var mathArray = mathInput.split(" ");
