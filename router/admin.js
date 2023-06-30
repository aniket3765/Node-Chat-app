const express = require('express');
const path = require('path')
const router = express.Router();
var fs = require('fs');

router.get('/login', (req, res, next) => {
    fs.readFile('new.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
   
    res.sendFile(path.join(__dirname,'../','views' , 'submit.html'))
    // res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" formaction="/submit.html">Add</button></form>')
    })
});

router.post('/product',(req, res, next)=>{
    console.log(req.body)
   res.redirect('/add')
})

module.exports = router;