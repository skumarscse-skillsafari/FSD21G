// Promise

/*
// Syntax
let promise = new Promise((resolve, reject) => {
    // Make an async call and return either
    // resolve or reject
})

states:
pending - initial state of a Promise
fulfilled - when the promise is resolved (success)
rejected - when the promise is rejected (error)

let result = true;
let promise = new Promise((resolve, reject) => {
  if (result) {
    resolve("I am from resolve...");
  } else {
    reject(new Error("Something went wrong..."));
  }
});
console.log(promise);


Cosuming the Promise:
then() handle fulfilled
catch() handle rejected
finally() handle other than fulfilled and rejected
promise.then(onFulfilled, onRejected)

let promise = new Promise((resolve, reject) => {
  resolve("I am from resolve...");
});
console.log(promise);
promise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

*/
let result = true;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (result) {
        resolve([
          { name: "SkillSafari", designation: "Full stack developer", age: 30 },
          { name: "EduKeys", designation: "Tester", age: 25 },
          { name: "John", designation: "Analyst", age: 28 }
        ]);
      } else {
        reject(new Error("Something went wrong..."));
      }
    }, 3000);
  });
}

// function onFulfilled(users) {
//   console.log(users);
// }

const promise = getUsers();
// promise.then(onFulfilled)
promise
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("I am from finally..");
  });
