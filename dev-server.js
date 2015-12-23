var express = require('express');

var app = express();

app.use(express.static('dist'));

var port = 3000;

var server = app.listen(port, function() {
    'use strict';
    console.log('Dev-server listening at port', server.address().port);
});
