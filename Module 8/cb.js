const fs = require('fs');

// <-----------Synchronous>

// console.log('First Line');

// let data = fs.readFileSync('t1.txt');

// console.log('Data from text file is ->' + data);

// console.log('Last Line');




// <-----------ASynchronous Behaviour------------------->

// console.log('first Line');

// fs.readFile('t1.txt', cb1)

// function cb1(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log('file 1 data ->' + data);
// }

// fs.readFile('t2.txt', cb2)

// function cb2(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log('file 2 data ->' + data);
// }


// console.log('Last Line');



 
// <----------------Serial Execution of async Code----------------->

// console.log('first Line');

// fs.readFile('t1.txt', cb1)

// function cb1(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log('file 1 data ->' + data);
//     fs.readFile('t2.txt', cb2)
// }

// function cb2(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log('file 2 data ->' + data);
// }


// console.log('Last Line');





