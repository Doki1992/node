var express = require('express');

var app = express();
var handlebars = require('express3-handlebars')
					.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);

var fortunes = ['mike', 'julio', 'kevin', 'ernesto'];

app.get('/', function(req, res){
	res.render('home', {fortunes: fortunes[0]});
});


app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('about page');
});
//custom 404 page

app.use(function(req, res){
	res.type('text/plain');
	res.status(400);
	res.send('404- Not found');	
});

//custom 500 page

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(5000);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost' + 
		app.get('port') + '; press Ctrl + C to terminate.');
});


