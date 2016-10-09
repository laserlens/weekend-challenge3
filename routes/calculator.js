var express = require('express');

//bring in the router from express library
var router = express.Router();

var mathObject = [];

router.post('/', function(req, res){
  res.sendStatus(200);
  //mathObject = req.body.title;
  mathObject.push(req.body);
});
router.get('/',function (req, res) {
  var mathText = mathObject.type;
  console.log('what is this text', mathText);
  var answer = eval(mathText);
  console.log('what is this answer', answer);
  res.send(answer);
});



module.exports = router;
