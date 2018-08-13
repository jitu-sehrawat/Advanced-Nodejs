/*
// promisify of util converts callback function to promise functions
var { promisify } = require('util');

var delay = (seconds, callback) => {
  if(seconds > 3) {
    callback(new Error(`${seconds} is too long`))
  } else {
    setTimeout(() => {
      callback(null, `the ${seconds} has passed`);
    }, seconds * 1000)
  }
}

delay(4, (error, message) => {
  if(error) {
    console.log(error);
  } else {
    console.log(message)
  }
})

// converting the aboce callback to promise fn
var promiseDelay = promisify(delay);

promiseDelay(2)
  .then((message) => { console.log(message) })
  .catch((error) => { console.log(error)});
*/


var fs = require('fs');
var { promisify } = require('util');

var writeFile = promisify(fs.writeFile);

writeFile('sample.txt', 'This is a sample')
  .then(() => {
    console.log('File created');
  })
  .catch(() => {
    console.log('Error while creating file');
  });