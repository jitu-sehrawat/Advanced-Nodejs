var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write('\x07');

var delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
})

const doStuffSequentially = async () => {
  console.log('starting');
  await delay(1);
  console.log('waiting');
  await delay(2);
  try {
    await writeFile('file.txt', 'Sample text');
    beep();
  } catch (error) {
    console.log(error);
  }
  console.log('file created');
  await delay(3);
  try {
    await unlink('file.txt');
    beep();
  } catch (error) {
    console.log(error);
  }
  console.log('file removed');

  // When we want to return an promise
  return Promise.resolve();
}

doStuffSequentially();

// When we want to receive a promised result.
// doStuffSequentially()
//  .then(() => console.log());

/*
var fs = require('fs');
var { promisify } = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write('\x07');

var delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
})

const doStuffSequentially = () => Promise.resolve()
  .then(() => console.log('starting'))
  .then(() => delay(2))
  .then(() => 'waiting')
  .then(console.log)
  .then(() => delay(2))
  .then(() => 'some more waiting')
  .then(console.log)
  .then(() => writeFile('file.txt', 'This is a sample file'))
  .then(beep)
  .then(() => 'File created')
  .then(console.log)
  .then(() => delay(2))
  .then(() => unlink('file.txt'))
  .then(beep)
  .then(() => 'File removed')
  .then(console.log)
  .catch((error) => { console.error(error) });

doStuffSequentially();
*/