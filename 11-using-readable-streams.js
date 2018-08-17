const fs = require('fs');
const readStream = fs.createReadStream('./ElonMusk.mp4');

readStream.on('data', (chunk) => {
  console.log('reading chunks\n', chunk);
  console.log('Size of chunks\n', chunk.length);
})

readStream.on('end', () => {
  console.log('read stream finshed');
})

readStream.on('error', (error) => {
  console.log('ERROR', error);
})





// Pause and resume of streams

// readStream.on('data', (chunk) => {
//   console.log('reading chunks\n', chunk);
//   console.log('Size of chunks\n', chunk.length);
// })

// readStream.on('end', () => {
//   console.log('read stream finshed');
//   process.stdin.end();
// })

// readStream.on('error', (error) => {
//   console.log('ERROR', error);
// })

// readStream.pause();
// process.stdin.on('data', (chunk) => {
//   if (chunk.toString().trim() === 'finished') {
//     readStream.resume();
//   }
//   readStream.read();
// })