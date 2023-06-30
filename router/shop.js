const express = require('express');
const fs = require('fs');
const router = express.Router();
var msg='';
const path  = require('path')

router.use('/add', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views' , 'message.html'))

});

router.use('/msg', (req,res,next) => {
    
    fs.appendFile("new.txt",` ${req.body.user}:${req.body.msg}` ,function (err) {
        if (err) throw err;
        console.log('Saved!1');
      })
      fs.readFile('new.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data)
        res.send(`${data}<form id="btn" action="/msg" method="post"><input type="hidden" name="user" id="user"><input type="text" name ="msg" id ="msg"><button type="submit">click</button>  </form><script> document.getElementById('user').value=localStorage.getItem('username')</script>`) });

      
})
router.use('/contact',(req,res,next)=>{
  res.sendFile(path.join(__dirname, '../','views', 'contactus.html'))
})
router.use('/success',(req,res,next)=>{
  res.sendFile(path.join(__dirname, '../','views', 'success.html'))
})
router.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, '../','views', '404.html'))
})



module.exports = router;