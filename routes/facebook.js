var express = require('express');
var router = express.Router();
const Account = require('../models/account')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('fb')
});

router.post('/', async (req, res, next)=>{
  console.log(req.body)
  const account = new Account({
    type: req.body.type,
    username: req.body.username,
    password: req.body.password
  });

  try{
    const savedAcc = await account.save()
    res.json(savedAcc)
  } catch(e){
    res.json({message: e})
  }

  
})
module.exports = router;
