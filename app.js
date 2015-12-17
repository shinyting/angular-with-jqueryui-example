var express = require('express');
var cons = require('consolidate');
var app = express();

// app.get('/', function(req, res) {
// 	res.render('index');
// 	res.send('Hello World! world world world');
// });

app.engine('html', cons.swig);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
	res.render('index', {
		title: 'apple'
	});
});

app.get('/a', function (req, res) {
	res.render('about');
});

var server = app.listen(8000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});

app.use(express.static('public'));