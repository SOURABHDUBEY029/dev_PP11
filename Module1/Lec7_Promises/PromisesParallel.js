// // parallely read contents of f1 f2 and f3 using promisified function
// const fs = require("fs");

// let f1KaPromise = fs.promises.readFile("./f1.txt");
// f1KaPromise.then(function(data){
//     console.log(data+"");
// });

// let f2KaPromise = fs.promises.readFile("./f2.txt");
// f2KaPromise.then(function(data){
//     console.log(data+"");
// });

// let f3KaPromise = fs.promises.readFile("./f3.txt");
// f3KaPromise.then(function(data){
//     console.log(data+"");
// });

const fs = require("fs");

let f1Promise = fs.promises.readFile("./f1.txt");
f1Promise.then(function(data){
    console.log(data+"");
})

let f2Promise = fs.promises.readFile("./f2.txt");
f2Promise.then(function(data){
    console.log(data+"");
})

let f3Promise = fs.promises.readFile("./f3.txt");
f3Promise.then(function(data){
    console.log(data+"");
})