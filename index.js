express = require('express');

app = express();

app.set('view engine','ejs');

// app.use(express.static('public'))

app.get('/',(req,res) => {
    
    res.render('index',{name: 'jidesh',age:23,day : ['sunday','mondat','tuesday','wed','thur','fri','sat']});
})
app.get('/contact/',(req,res) => {
    // res.sendFile(app.use(express.static('public')));
    res.render('contact')


})
app.get('/contact/:number',(req,res) => {
    // res.sendFile(app.use(express.static('public')));
res.send('this is contact number is'+req.params.number)


})
app.get('/aboutus',(req,res) => {
    res.render('about');


})

app.listen(3000,function() {console.log("server is running")});