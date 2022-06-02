const {writeFileSync} = require('fs');

for (let i = 1; i < 10000; i++) {
    writeFileSync('./file.txt', `Hello, I'm from line number ${i}\n`, {flag: 'a'});
}

