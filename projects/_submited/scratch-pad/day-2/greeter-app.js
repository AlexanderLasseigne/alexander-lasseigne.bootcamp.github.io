// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
 //I: a whole number representing time
 //o: one of the following 4 msgs printed to screen 
 //   // hour is 0-11
 // * Good Morning!
 //   // hour is 12-16
 // * Good Afternoon! 
 //   // hour is 17-21
 // * Good Evening!
 //   // hour is 22-24 
 // * Good Night!
 //c:  Messages according to whether or not the hour given falls within it's range
 //e:  Message strings must b case sensitive
 
 // if hour entered is 0 or greater AND&& less than 12 print 'Good Morning!'
if (hour >= 0 && hour < 12){
    console.log('Good Morning!');
  } 
  // if hour entered is 12 or greater AND&& less than 17 print 'Good Afternoon!'
  else if (hour >= 12 && hour < 17){
    console.log('Good Afternoon!');
  } 
  // if hour is 17 or greater AND&& less than 22 print 'Good Evening!'
  else if (hour >= 17 && hour < 22){
    console.log('Good Evening!')    
    // if hour is 22 or greater AND&& less than 25 print 'Good Night!'
  } else if (hour >= 22 && hour < 25){
    console.log('Good Night!')
    // Print 'You have entered an incorrect hour' if anything else
  } else {console.log('You have entered an incorrect hour')} 
  

    
    
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}