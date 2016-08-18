process.on('exit', function() {
  setTimeout(function () {
    console.log('This will not run');
  }, 100);
  cosnole.log('Bye.');
});

//Because the loop isn’t going to run again, the setTimeout() code will never be evaluated.
