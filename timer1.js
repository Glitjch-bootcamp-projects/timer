
// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

// const start = Date.now();
const numberOnNode = process.argv.slice(2);
const timer = function(listOfAlarms, callback) {

  for (const alarm of listOfAlarms) {
    let seconds = alarm *1000;
    if (Math.abs(alarm) && typeof Number(alarm) === "number") {

      setTimeout(() => {
        process.stdout.write(`\x07 beep!`);
      },
      seconds
      );
      
      callback(seconds);
    }
  }
};

const newLine = function(endEventLoop) {
  setTimeout(() => {
    process.stdout.write(`\n`);
  },
  endEventLoop);
};

timer(numberOnNode, newLine);