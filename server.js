var express = require('express'),
	index   = require('./routes/index.js'),
	path    = require('path'),
	
	app     = express();

// Routes =============
app.use(express.static(path.join(__dirname + '/public')));


// ====================
app.use('/', index);
// ====================


app.listen(process.env.PORT, process.env.IP, function(){
	console.log(`The Bread Is Rising On Port ${process.env.PORT}`); 
});
