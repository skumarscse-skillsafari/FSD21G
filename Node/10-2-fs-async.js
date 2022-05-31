// Read and write the file using Async/Await
const {readFile, writeFile} = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        const data = `The content of the files first.txt and second.txt: ${first} ${second}`;
        await writeFile('./content/fs-async-await.txt', data, {flag: 'a'});
        console.log('Reading and Writing the files successful.');
    } catch (error) {
        console.log(error);
    }
}

start();