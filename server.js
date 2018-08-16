var express = require('express');
var fortunes = require('./lib/fortune.js');
var app = express();

app.use(express.static(__dirname + '/public'));
var handlebars = require('express3-handlebars')
					.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.set('port', process.env.PORT || 3000);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){
res.locals.showTests = app.get('env') !== 'production' &&
req.query.test === '1';
next();
});


app.get('/', function(req, res){
	res.render('login', {fortunes: fortunes.getFortune(),
		pageTestScript: '/qa/tests-login.js'
	});
});

app.post('/home', function(req, res){
	var log = login(req.body.name,req.body.pass);
	if(log)
	{
		res.render('home', {fortunes: fortunes.getFortune()});	
	}
	else{
		res.redirect('/');
	}
	
});


app.get('/about', function(req, res){
	res.render('home', {fortunes: fortunes.getFortune()});
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
	console.log(__dirname + '/public');
});

function login(name, pass)
{
	for(var i = 0; i < fortunes.getFortune().length; i++){
		//console.log(fortunes.getFortune()[i].name);
		if(name == fortunes.getFortune()[i].name && pass == fortunes.getFortune()[i].pass)
		{
			return true;
		}
	}
	return false;
}
