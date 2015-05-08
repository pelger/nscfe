'use strict';

var app = require('express')();

app.get('/ping', function(req, res){
  res.send('fish fish fish fish: ' + new Date().toISOString());
});

app.listen(3000);
