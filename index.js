// const { json } = require('body-parser')
// const { json } = require('body-parser')
// const { v4: uuidv4 } = require('uuid');
// var express = require('express')
import { v4 as uuidv4 } from 'uuid';

import  express, { query }  from 'express';
var app = express()
var mylist = []
app.use(express.json())

app.get('/',(req,res)=>{
    // res.send("This is get method")
    res.send(mylist)
})

app.post("/posttodo" , (req , res)=>{
    let postmandata = req.body;
    postmandata['id'] = uuidv4();
    mylist.push(postmandata)
    console.log(mylist)
    res.send(postmandata)
    // res.end();
    
})

app.delete("/deletetodo" , (req , res)=>{
    let id = req.query.id;
    mylist = mylist.filter(items => items.id !== `${id}`);
    res.send(mylist)
})

app.put("/put" , (req , res) =>{
    let id = req.query.id;
    let bodym = req.body;
    let index = mylist.findIndex(items => items.id == `${id}`);
    mylist[index].name = bodym.name;
    res.send(mylist)
})
var server = app.listen(2000 , ()=>{
    console.log("server has started")
})