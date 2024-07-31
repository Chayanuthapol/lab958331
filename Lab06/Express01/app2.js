const express = require('express')
let url = require('url');

const app = express()
app.get('/Hi', function(req, res){
        var q = url.parse(req.url, true).query;
        var txt = q.name + " : " + q.Name + " "  + q.Surname + "<br>" +q.date + " : " + q.Month + " " + q.Day + " " + q.Year ;
        res.send(txt)
        })        
app.listen(9999,function(){
console.log("Server is running on PORT 9999")
})