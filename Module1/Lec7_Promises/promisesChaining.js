// Promises Chaining => To avoid promise hell !

// Initial State is Pending 
// Either the Pending Promise can be resolved or rejected 
// if Pending Promise is Resolved => success callback is invoked
// if Pending Promise is Rejected => unsuccess callback is invoked

// scb can be attached to pending promise using then function
// ucb can be attached to pending promises using catch function

// then and catch can only be called on pending promises

// then() and catch() functions are async functions !
// then and catch also returns a pending promise also known as thenKaPromise

// const fs = require("fs");

// let f1KaPromise = fs.promises.readFile("./f1.txt");

// f1KaPromise.then(function(f1KaData){
//     console.log(f1KaData+"");
//     let f2KaPromise = fs.promises.readFile("./f2.txt");
//     return f2KaPromise;
// })
// .then(function(f2KaData){
//     console.log(f2KaData+"");
//     let f3KaPromise = fs.promises.readFile("./f3.txt");
//     return f3KaPromise;
// })
// .then(function(f3KaData){
//     console.log(f3KaData+"");
// })


const fs = require("fs");

let f1Promise = fs.promises.readFile("./f1.txt");
f1Promise.then(function(data){
    console.log(data+"");
    return fs.promises.readFile("./f2.txt");
})

.then(function(data){
    console.log(data+"");
    return fs.promises.readFile("./f3.txt");
})

.then(function(data){
    console.log(data+"");
})

.then(function(data){
    console.log(data+"");
})












// let thenKaPromise = f1KaPromise.then(function(data){
//     console.log(data+"");
//     console.log(f1KaPromise);
// })
// thenKaPromise.then(function(returnValueOfScb1){
//     console.log(returnValueOfScb1);
//     console.log(thenKaPromise);
//     console.log("i ran after first scb !!");
// })


