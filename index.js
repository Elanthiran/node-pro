const express = require('express')
const app = express()
const fs = require('fs')
const parser=require("body-parser")
app.use(parser.json())
const port = process.env.PORT || 4000;

let now = Date.now();

let date_ob = new Date(now);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

let ts=year + "-" + month + "-" + date


console.log(ts);
const timestamp = date_ob.getTime()
fs.writeFile(`./times/${ts}.txt`,`${timestamp}`,(err) => {
    if(err) throw err
    console.log('File Created successfully')

})

app.listen(port,()=>
{
    console.log("server created")
})

var router = express.Router();

   var route=router.get('/', function(req, res) {
    res.json(timestamp)
});


app.use('',route)