// let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

// const fs = require("fs");

// for(let i=0 ; i<files.length ; i++){
//     let fileKaPromise = fs.promises.readFile(files[i]);
//     fileKaPromise.then(function(data){
//         console.log(data+"");
//     })
// }

let files = ["../f1.txt", "../f2.txt", "../f3.txt"];

const fs = require("fs");

for(let i=0; i<files.length; i++){
    let filePromise = fs.promises.readFile(files[i]);
    filePromise.then(function(data){
        console.log(data+"");
    })
}