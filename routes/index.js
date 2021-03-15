var express = require('express');
var router = express.Router();
const Account = require('../models/account')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/taikhoan.exe.png.pdf', async (req, res, next)=>{
  try{
    const listAccount = await Account.find();
    res.json(listAccount)
  }
  catch(e){
    res.json({message: e})
  }
})


module.exports = router;
