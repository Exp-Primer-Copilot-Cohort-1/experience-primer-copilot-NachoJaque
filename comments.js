// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.json());

// Read comments from file
app.get('/comments', function (req, res) {
    fs.readFile('comments.json', 'utf8', function (err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Save comments to file
app.post('/comments', function (req, res) {
    fs.writeFile('comments.json', JSON.stringify(req.body), function (err) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(req.body));
    });
});

// Start server
app.listen(3000, function () {
    console.log('Server is running on 3000');
});