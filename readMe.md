#Goal
- Building a calculator application using jQuery, Node, and Express!

##The How and What
- user inputs data as numbers and math symbols.
  - ex: 1 + 2 * 56 / 2
- when equal button is pressed
  1. Whe apove sting is turned into an object value with ajax post and data.
  2. That object is sent to calculator.js as a post.
  3. While in caluclator.js
    - it is turned into an array of objects
  4. back at the client.js file
    - the equal button after finishing the ajax post now start the ajax get
  5. When the calculator.js gets the get request
    - it takes the new array of object
    - takes out the value from the array of objects with property type
    - assigns that value to an array
    - runs the string to eval() with .join to turn value into string then do the math.
  6. Then it sends string back to client.js
    - client.js now puts the the string in the input val() and the user sees the anser to there math problem.

##Future goals
- add other math functions
- allow math symbols from keypress
