const { createReadStream, createWriteStream } = require('fs');
const readStream = createReadStream('./ElonMusk.mp4');
const writeStream = createWriteStream('./copy.mp4', {
  highWaterMark: 1623111
});

readStream.pipe(writeStream).on('error', console.error);