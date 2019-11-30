'use strict'
require('dotenv').config();

var express = require('express');
var app = express();
var path = require('path');

//STATIC PATH
app.set('port', (process.env.PORT));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT, ()=>{
    console.log(`Running on port ${process.env.PORT}`);
});

function viewPath(pathname){
    return path.join(__dirname, `${pathname}`);
}

//EXPRESS ROUTES
app.get('/', (req,res)=>{
    return res.sendFile(viewPath('views/index.html'));
});

app.get('/user', (req,res)=>{
    return res.sendFile(viewPath('views/user.html'));
});

