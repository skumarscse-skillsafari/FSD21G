// All the files are considered as module
// We can import/export the function/variable of one file to another
// instead of import, we need to use require()
// const names = require('./4-variables');
const {firstName, lastName} = require('./4-variables');
const sayHello = require('./5-function-sayhello');
require('./6-require-example');

// console.log(names); // { firstName: 'SkillSafari', lastName: 'EduKeys' }
// console.log(sayHello);

sayHello(firstName, lastName);
