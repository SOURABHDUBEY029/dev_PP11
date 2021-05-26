let fs = require("fs");

function myPromisifiedFun(filePath){
    return new Promise( function(scb , ucb){
        
        // async func
        fs.readFile( filePath , function(error , data){
            if(error){
                ucb("Data nhi aaya !!");
            }
            else{
                // scb("testing success callback !!!");
                scb(data);
            }
        })

    }); //it will create a new promise object !!!   
}

let pendingPromise = myPromisifiedFun("./f1.txt");

pendingPromise.then(scb);
pendingPromise.catch(ucb);

function scb(data){
    console.log(data+"");
}
function ucb(error){
    console.log(error);
}