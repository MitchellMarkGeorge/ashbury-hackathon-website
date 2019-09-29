var express = require('express')
var path = require('path')

var app = express();

var port = 3000 || process.env.PORT;

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.resolve('public', 'index.html'));
});

app.listen(port, function() {
    console.log(`server is runnig at port ${port}`);
    //console.log(path.resolve('public', 'index.html'));
});