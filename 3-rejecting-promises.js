var delay = (seconds) => new Promise((resolves, rejects) => {
  // throw new Error('argh');
  if(seconds < 1) {
    rejects(new Error(`${seconds} is smaller than 1`));
  }

  setTimeout(() => {
    resolves('long delay has ended')
  }, seconds * 1000);
});

delay(0)
  .then((message) => {
    console.log(message)
  })
  .then(() => 42) 
  .then((number) => {
    console.log(`Hello : ${number}`)
  })
  .catch((error) => {
    console.log(`${error}`);
  });

console.log('end of first tick');