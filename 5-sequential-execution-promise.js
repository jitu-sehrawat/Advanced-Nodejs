var fs = require('fs');
var {promisify} = require('util');
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write('\x07');

var delay = (seconds) => new Promise((resolve) => {
  setTimeout(resolve, seconds*1000);
})

const doStuffSequentially = () => Promise.resolve()
  .then(() => console.log('starting') )
  .then(() => delay(2) )
  .then(() => 'waiting' )
  .then(console.log)
  .then(() => delay(2) )
  .then(() => 'some more waiting' )
  .then(console.log)
  .then(() => writeFile('file.txt', 'This is a sample file') )
  .then(beep)
  .then(() => 'File created' )
  .then(console.log)
  .then(() => delay(2) )
  .then(() => unlink('file.txt'))
  .then(beep)
  .then(() => 'File removed' )
  .then(console.log)
  .catch((error) => {console.error(error)});

  doStuffSequentially();






/* Using callback Hell
var fs = require('fs');
var beep = () => process.stdout.write('\x07');

const doStuffSequentially = () => {
  console.log('starting');
  setTimeout(() => {
    console.log('waiting');
    setTimeout(() => {
      console.log('some more waiting');
      setTimeout(() => {
        fs.writeFile('file.txt', 'This is a ssample', error => {
          if(error) {
            console.error(error);
          } else {
            beep();
            console.log('File Created');
            setTimeout(() => {
              beep();
              fs.unlink('file.txt', error => {
                if(error) {
                  console.error(error);
                } else {
                  console.log('File removed');
                  console.log('Sequence Ends');
                }
              })
            }, 1000);
          }
        });
      }, 2000);
    }, 1000)
  }, 1000)
}

doStuffSequentially();
*/