// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

//I: a string or number to base tests against 
//O: return a Function 
//C: function being returned tests wheather the given VALUE is greater than the BASE
//E: 
  // test if value is greater than base
  return function(value){
    if (value > base){
      return true;
    } else {return false;}
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        return value < base
          ? true
          : false;
      }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
//I: single character
//O: function that tests whether a given String matches our startsWith parameter character passed in

    return function(string){
        return string[0].toLowerCase() === startsWith.toLowerCase()
            ? true
            : false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
    return string[string.length - 1].toLowerCase() === endsWith.toLowerCase()
        ? true  
        : false;   
        return string;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
//I: Array of Strings and a Function
//O: return a new modified Array of Strings
//C: all strings in our Array of strings parameter must be run through the modify function
//o:
    var arr = [];
    for (var i = 0; i <= strings.length - 1; i++){
        arr.push(modify(strings[i]));
    }
    return arr;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */



function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //

//I: Array of Strings and a Function
//O: boolean
//C: all strings must pass the test for a true value
//E:
var yes = 0;
    
for (var i = 0; i <= strings.length - 1; i++){
    if (test(strings[i]) === true){
      yes += 1;
    }        
}
if (yes === strings.length){
  return true;
} else {return false;}
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
