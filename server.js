const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static('public'));

app.get('/banner', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/images/banner.jpg'));  
})
app.get('/bcksound', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/msc.mp3'));  
})
app.get('/favicon', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/images/favicon.ico'));  
})
// Render Html File
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'pulic/index.html'));
});


app.listen(port, () => {
 console.log('server runing in port', port)
})