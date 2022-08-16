const express=require('express');

const loginr=require('./login');
const messager=require('./message.js')

const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended :true}))
app.use(loginr);
app.use(messager);

app.listen(4000)
