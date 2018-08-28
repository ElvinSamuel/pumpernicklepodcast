var express = require('express'),
	path    = require('path'),
	
	app     = express();

// Routes =============

app.use(express.static(path.join(__dirname + '/public')));
// ====================

app.get('*', function(req, res) {
		console.log('Router is working!');
		res.sendFile('index.html');
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`The Bread Is Rising On Port ${process.env.PORT}`); 
});
