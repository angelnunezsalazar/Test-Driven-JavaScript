var express = require("express"),
	http = require('http');

var app = express();
var port = process.env.port || 8010;

app.configure(function() {
	app.engine('html', require('ejs').renderFile);
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/');
	app.set('port', port);
	app.use(express.bodyParser());
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

var randomWord = function() {
		var palabras = ['ahorcado', 'lavadora', 'invierno', 'plastico', 'ordenador', 'colador', 'guantera', 'alimentador', 'calculos'];
		var aleat = Math.random() * palabras.length;
		var index = Math.floor(aleat);
		return palabras[index];
	};

app.get('/', function(req, res) {
	res.render("index.html", {
		environment: app.settings.env
	});
});

app.get('/secretword', function(req, res) {
	res.json({
		secretword: randomWord()
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log("Server listening on port " + app.get('port') + " in " + app.settings.env + " mode");
});