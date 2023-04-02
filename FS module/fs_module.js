var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

  fs.appendFile('demofile1.html', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Opened!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Wrote!');
  });

  fs.rename('mynewfile2.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

  fs.unlink('mynewfile3.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

}).listen(8080);