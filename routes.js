
module.exports = (app,db) => {

app.post('/quotes', (req, res) => {
  if (req.body.password !== "xkcd"){
  res.redirect('/')
  }
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log(req.body);
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/posts/:id', (req, res) => {
    console.log(req.params.id);
    var id = require('mongodb').ObjectID(req.params.id);
  db.collection('quotes').find({ _id: id}).toArray((err, result) => {
    if (err) return console.log(err)
    console.log(result);
    res.render('onePost.ejs', {quote: result[0]})
    }
    )
})


app.get('/post', (req,res) =>{
    res.render('post.ejs')
})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})})})


}
