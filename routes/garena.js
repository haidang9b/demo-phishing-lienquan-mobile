var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('garena');
});

router.post('/',(res,req)=>{
  console.log(req.body)
})

module.exports = router;
