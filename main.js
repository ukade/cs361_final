var express = require('express');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var cors = require('cors');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3767)

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(cors({
  credentials: true,
}));


app.get('/', function(req, res, next) {
    fetch('http://flip2.engr.oregonstate.edu:3000/image?query=http://www.prevention.com/health/g33011148/common-bug-bite-pictures/')
  .then(response => response.json())
  .then(data => {
   var context = {};
   context.image = data.image_url;
    res.render('index', context)})
  });

app.get('/quiz', function(req, res, next) {
    res.render('quiz')
  }); 

app.get('/glossary', function(req, res, next) {
    res.render('glossary')
  });

app.use(function(req,res){
    res.status(404);
    res.render('404');
  });
  
  app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
  });
