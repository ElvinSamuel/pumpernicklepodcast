var http = require('http')
    fs   = require('fs');

http.createServer(function(req, res){

	fs.readFile('public/index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data); //testFile
		res.end();
	});

}).listen(process.env.PORT, function(){
	console.log(`The Bread Is Rising On Port ${process.env.PORT}`);
});
