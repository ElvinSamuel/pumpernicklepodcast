var express = require('express'),
    app     = express();

app.set('view engine', 'html');

app.get('/', function(req, res){
    res.send('working!');
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log(`The Bread Is Rising On Port ${process.env.PORT}`);
});