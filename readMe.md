#Goal
- Building a calculator application using jQuery, Node, and Express!

##The How and What
- user inputs data as numbers and math symbols.
  - ex: 1 + 2 * 56 / 2
- when equal button is pressed
  1. When above sting is turned into an object value with ajax post and data.
  2. That object is sent to calculator.js as a post.
  3. While in caluclator.js
    - it is turned into an array of objects
  4. Back at the client.js file
    - the equal button after finishing the ajax post now start the ajax get
  5. When the calculator.js gets the get request
    - it takes the new array of object
    - takes out the value from the array of objects with property type
    - assigns that value to an array
    - runs the string to eval() with .join to turn value into string then do the math.
  6. Then it sends string back to client.js
    - client.js now puts the the string in the input val() and the user sees the anser to there math problem.
  7. Easter Egg audio on ERROR

##Things to know
- disabled keypresses other then numbers
- disabled paste to minimize user error input
- created unique name on input to stop browser auto fill

##Future goals
- remove eval() since further research on this reveals it is not the fastest or safest option
- add other math functions
- allow math symbols from keypress
- allow use of () to tell witch math operations to do first
