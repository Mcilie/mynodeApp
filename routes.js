
module.exports = (app,db) => {

app.post('/quotes', (req, res) => {
  if (req.body.password !== "xkcd"){
  res.redirect('/')
  return ''
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
    var q = result[0];
    q.blogPost = q.blogPost.replace("\r","").replace("\n","<br>")
    res.render('onePost.ejs', {quote: q})//result[0]})
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
