var fs = require('fs');
var http = require('http');
var file = './ElonMusk.mp4';

// Buffering video into a variable (data) and sending video as whole
// http.createServer((req, res) => {
//   fs.readFile(file, (error, data) => {
//     if(error) {
//       console.log(`hmmm ${error}`)
//     } else {
//       res.writeHead(200, { 'Content-Type': 'video/mp4'});
//       res.end(data);
//     }
//   })
// }).listen(3000, () => console.log(`Buffer - http://localhost:3000`));

// streaming video into a pipe
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  fs.createReadStream(file)
    .pipe(res)
    .on('error', console.error);
}).listen(3000, () => console.log(`Stream - http://localhost:3000`));