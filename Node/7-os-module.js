const os = require('os');

// used to get user information
const user = os.userInfo();
console.log(user.username);

// to get uptime of the system
console.log(`The System Uptime is ${os.uptime()} seconds`);

const osDetails = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(osDetails);