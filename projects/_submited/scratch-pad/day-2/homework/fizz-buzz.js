// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//I: none
//O: prints numbers 1 to 100/ 'Fizz'/ 'Buzz'/ 'FizzBuzz'
//C: prints numbers 1 to 100 with the following exceptions/ replacement strings instead of numbers:
    // for multiples of 3 print 'Fizz' 
    // for multibles of 5 print 'Buzz'
    // for multiples of 3 AND&& 5 print 'FizzBuzz'
//E: if no test conditions are met print counter i
  
  // Begin for loop counter to iterate from 1 to 100
  for (var i = 1; i <= 100; i++){
    // First test for multiples of both 3 & 5. Print Fizzbuzz if true
    if (i % 3 === 0 && i % 5 === 0){
      console.log('FizzBuzz');
      // Second test for multiple of just 3. Print Fizz if true
    } else if (i % 3 === 0){
      console.log('Fizz');
      // Third test for multiple of 5. Print Buzz if true
    } else if (i % 5 == 0){
      console.log('Buzz');
      // Catch statement to print numeric value counter i is if the first 3 tests are not triggered
    } else {console.log(i);
           }
  }

  /*
  BELOW IS ALTERNATE SWITCH STATEMENT SOLUTION
  
    // Begin for loop counter to iterate from 1 to 100
  for (var i = 1; i <= 100; i++){
    //switch statement to test for multiples of 3
    switch(0){
      case i % 3 && i % 5:
        console.log('FizzBuzz');
        break;
      case i % 3:
        console.log('Fizz');
        break;
      case i % 5:
        console.log('Buzz');
        break;
      default:
        console.log(i);
    } 
  }
    // YOUR CODE GOES ABOVE HERE //
}
fizzBuzz();
  */ 

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}