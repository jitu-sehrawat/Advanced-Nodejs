function deplay(seconds, callback) {
  setTimeout(callback, seconds * 1000);
}

console.log('Starting deplay');
deplay(2, () => {
  console.log('two seconds');
  deplay(1, () => {
    console.log('three seconds');
    deplay(1, () => {
      console.log('four seconds');
    })
  })
});
