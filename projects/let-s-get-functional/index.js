// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./alexander-lasseigne.bootcamp.github.io/projects/let-s-get-functional
 *    
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */



var maleCount = function(array) {
   
    var males =  _.filter(array, function(customer){
     
        return customer.gender === 'male';
        });   
        console.log(males);
     return males.length; 
    
}; 

var femaleCount = function(array){
_.reduce(customers, function(acc, n){
    return 
}, 0);
return ;  
};

var oldestCustomer;

var youngestCustomer;


//*************FIX      FIX */
 var averageBalance = function(arr){
//     //use map to access each object
//     let avg = arr.map(function(customer){
//         let str = customer.balance.
//     })
 };



var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags = function(arr){
    let tmp = [];
    for (let i = 0; i < arr.length; i++){
        for (let ii = 0; ii < arr[i].tmp.length; ii++){
            //nested loop pushes 
            tmp.push(arr[i].tmp[ii]);

        }
        
    }
}

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
