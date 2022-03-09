const express= require('express');
const app=express();
const mongoose= require('mongoose');
const url = 'mongodb://sanju99:justsanju99@cluster0-shard-00-00.jsws6.mongodb.net:27017,cluster0-shard-00-01.jsws6.mongodb.net:27017,cluster0-shard-00-02.jsws6.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-apvpnx-shard-0&authSource=admin&retryWrites=true&w=majority'
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(connectionString, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })
const port = 8000;
app.listen(8000, () => {
    console.log('listening on 8000')
  })
  app.get('/', (req, res) => {
    res.send('Hello World')
  })
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') })  