    const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const MongoClient = require('mongodb').MongoClient
var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
var db = require('./db')

MongoClient.connect(db.url, (err, database) => {
  // ... start the server
  if (err) return console.log(err)
  require('./routes')(app,database)
  app.listen(port, () => {
    console.log('Running on http://localhost:3000/')
  })
})
