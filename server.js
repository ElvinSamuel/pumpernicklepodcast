var express = require('express'),
    app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(index);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`The Bread Is Rising On Port ${process.env.PORT}`);
});