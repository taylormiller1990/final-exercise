var express = require('express');
 
var app = express();

app.get('/', function (req, res) {
  res.send('Hello GitHub this is Rob');
});
 
app.listen(process.env.PORT || 80);
 
module.exports = app;
