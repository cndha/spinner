const spinIt = function(numOfSpins) {
  const spinner = ['|', '/', '-', '|', '\\'];
  let delayTime = 100;

  for (let i = 0; i < numOfSpins; i++) {
    for (const spin of spinner) {
      setTimeout( () => {
        process.stdout.write(`\r ${spin}`)
      }, delayTime);
      delayTime += 50;
    }
  }
};

spinIt(10);