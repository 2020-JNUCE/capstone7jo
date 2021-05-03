const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

app.use (express.urlencoded())
app.use (express.json());

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

var router = require('./router.js')(app);

var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});