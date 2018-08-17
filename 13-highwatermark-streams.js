const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./ElonMusk.mp4');
const writeStream = createWriteStream('./copy.mp4', {
  highWaterMark: 1623111
});

readStream.on('data', (chunk) => {
  const result = writeStream.write(chunk);
  if(!result) {  // result will have True if highwatermark is not full and false it is full
    console.log('back pressure');
    readStream.pause();
  }
})

readStream.on('error', (error) => {
  console.log('ERROR : ', error.message);
})

readStream.on('end', () => {
  console.log('read stream finshed');
  writeStream.end();
})

writeStream.on('drain', () => {   // drain event is called when stream is open, but not data is being streamed
  console.log('drained');
  readStream.resume();
})

writeStream.on('close', () => {
  process.stdout.write('file copied\n');
})
