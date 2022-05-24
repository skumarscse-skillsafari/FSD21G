// Globals : __dirname, __filename, module, require, process
// __dirname: get the path of current working directory
// __filename: get the current working filename with dir details
// require: function, used to use the modules
// module: get the info about the current module (All the files are treated as module in node.js)
// process: provides the info about the 'env' where the program is being executed

console.log(__dirname); // D:\REACT\FSD21G\Node
console.log(__filename); // D:\REACT\FSD21G\Node\2-globals.js

setInterval(() => {
    console.log('Welcome to Node.js...');
}, 1000); 