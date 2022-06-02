const {createReadStream} = require('fs');

//stream default size is 64kb
// Ex: 100kb => 64kb + 36kb
const stream = createReadStream('./file.txt', {highWaterMark: 90000, encoding: 'utf-8'});

stream.on('data', (result) => {
    console.log(result);
});