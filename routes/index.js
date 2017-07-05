const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const mike = {name:'mike'};
  // res.json(mike)
  // res.send('Hey! It works!');
  res.render('hello', mike)
});

router.get('/reverse/:name',(req,res)=>{

   const reverse = [...req.params.name].reverse().join('');
     res.send(reverse);
})
module.exports = router;
