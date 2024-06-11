const { METHODS } = require("http");

function placeOrder(drink){
    return new Promise (function(resolve, reject){
        if(drink === 'coffee'){
            resolve('order for coffee recieved')
        }
        else{
            reject('other orders rejected')
        }
    })
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed');
        resolve(`${order} and is served`)
    })
}

// we have two METHODS
// 1. chaining of promises, NOT EFFICIENT
// 2. async await, VERY EFFICIENT

// First Method
// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced);
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processedOrder){
//     console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// })
    
// Second method
async function serveOrder(){
    try {
        let orderPlaced = await placeOrder('coffee')
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced);
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}

serveOrder();

