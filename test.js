const sum = require('./app');

if (sum(2, 3) === 5) {
    console.log("Test passed");
} else {
    console.log("Test failed");
    process.exit(1);
}