'use strict';

var app = require('express')();

app.get('/ping', function(req, res){
  res.send(new Date().toISOString());
});

app.listen(3000);
