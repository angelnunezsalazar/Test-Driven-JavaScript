var express = require("express"),
	http = require('http');

var app = express();

app.configure(function() {
	app.set('port', 8010);
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

var randomWord=function() {
	var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
	var aleat = Math.random() * palabras.length;
	var index = Math.floor(aleat);
	return palabras[index];
};

app.get('/secretword', function(req, res) {
	res.json({secretword:randomWord()});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Server listening on port " + app.get('port'));
});