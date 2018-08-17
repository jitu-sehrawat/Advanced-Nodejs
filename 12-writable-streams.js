const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./ElonMusk.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
  // console.log('Size: ', chunk.length);
  writeStream.write(chunk);
})

readStream.on('error', (error) => {
  console.log('ERROR', error.message);
})

readStream.on('end', () => {
  console.log('read stream finshed');
  writeStream.end();
})

writeStream.on('close', () => {
  process.stdout.write('file copied\n');
})
