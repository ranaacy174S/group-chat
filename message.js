const express=require('express')

const msgs=require('./data.js');

const router=express.Router();
// we  create   username  as  hidden button and pulled out  data  from localstorage;
router.get('/',(req,res,next)=>{
    res.send('<form onsubmit="document.getElementById(`username`).value=localStorage.getItem(`user`) " action="/message" method="POST"> <input type="text" name="message" id="message" placeholder="Type your Message Here"> <input type="hidden" id="username" name="username" > <button type="submit">Submit</button></form>')
})
router.post('/message',(req,res,next)=>{
   const message = req.body.message;
    const username=  req.body.username;
    const stringli  = `${username +":"+message}`

   console.log(stringli);
    res.redirect('/login');
})

module.exports=router;