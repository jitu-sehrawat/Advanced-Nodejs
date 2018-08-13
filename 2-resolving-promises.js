var delay = (seconds) => new Promise((resolves, rejects) => {
  setTimeout(() => {
    resolves('long delay has ended')
  }, seconds * 1000);
});

delay(1)
  .then((message) => {
    console.log(message)
  })
  .then(() => 42)
  .then((number) => {
    console.log(`Hello : ${number}`)
  });

console.log('end fo first tick');