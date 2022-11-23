let alarm = process.argv.slice(2);

const timer = () => {
  for (let i in alarm) {
    if (alarm[i] > 0 && !isNaN(alarm[i])) {

      setTimeout(() => {
        process.stdout.write('\x07');
      }, alarm[i] * 1000);
    }
  }
};

timer(alarm);


