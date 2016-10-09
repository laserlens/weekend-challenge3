var express = require('express');

//bring in the router from express library
var router = express.Router();

var mathObject = [];

router.post('/', function(req, res){
  res.sendStatus(200);
  //push array from client.js to mathObject
  mathObject.push(req.body);
});
router.get('/',function (req, res) {
  var mathArray = mathObject.map(function (mathObject) {
    return mathObject.type;
  });
  console.log('what is this array', mathArray);
  var answer = eval(mathArray.join(' '));
  console.log('what is this answer', answer);
  res.send(answer.toString());
  mathObject = [];
});



module.exports = router;
