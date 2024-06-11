// <------------Promises in Javascript------------->
// how to produce a promise 

const { fail } = require("assert");

let myPromise = new Promise(function(resolve, reject){
    const a = 4;
    const b = 3;

    setTimeout(()=>{
        if(a===b){
            resolve('the values are eqaul')
        }
        else{
            reject('the values were not equal')
        }
    }, 2000)
})

// Pending state -> aayega sabse pehle kyunki console.log chalega pehle and function ne kuchh kaam nhi kiya tab tak
// console.log(myPromise);

// fulfilled State -> then method

// myPromise.then(function(result){
//     console.log(result);
// }) // fulfilled state

// catch method to catch the error happening in our fn 
myPromise.catch(function(failedResult){
    console.log(failedResult);
})  // rejected state

// after that our promise is fulfilled