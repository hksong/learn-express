// boilerplate code
var express = require('express'),
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

var vegetables = [
  "carrots",
  "cucumber",
  "peas",
  "lettuce"
];

// 'GET' request for veggies
app.get('/veggies', function (req, res) {
  res.send(vegetables.join(', '));
});

// 'GET' request with URL parameters
app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name);
});

// 'GET' request with query parameters
app.get('/favorite', function(req, res) {
  var food = req.query.food;
  res.send('I love ' + food);
});

// 'GET' request to '/'
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
// 'GET' request to '/' using ejs
app.get('/', function (req, res) {
  res.render('index', {veggies: vegetables});
});


// start server
app.listen(3000, function() {
  console.log('Server running on port:3000');
});

