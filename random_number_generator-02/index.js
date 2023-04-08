let delayInSeconds = 3;
let remainingTime = delayInSeconds;
let countdownIntervalId;

// Start countdown
countdownIntervalId = setInterval(() => {
  console.log(`Generating random number in ${remainingTime} seconds...`);
  remainingTime--;
}, 1000);

// Generate random number after delay
setTimeout(() => {
  clearInterval(countdownIntervalId);
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(`Random number generated: ${randomNumber}`);
}, delayInSeconds * 1000);
