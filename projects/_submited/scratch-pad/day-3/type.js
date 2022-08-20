// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    // using Array.isArray() to return true if specifically an array, false otherwise.
    // to avoid .typeof returning false b/c it sees complex data types as objects.
    return Array.isArray(value) 

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    // determine if typeof value strictly equals object AND value is not an array 
    // AND value.... see day 3 bootcamp lecture for rest 2:30 teaches clock
    //.. value is not null AND value is not in date format
    if (typeof value === 'object' && Array.isArray(value) === false && value !== null && Object.prototype.toString.call(value) !== "[object Date]"){
        return true;
      } else {
        return false;
      }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // return true if: value is an object AND value does not equal null, AND value is not a date, OR value is an array
    if (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) !== '[object Date]' || Array.isArray(value) === true){
        return true;
        } else {
        return false;  //otherwise return false
        }                             
    
    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof value === 'string'){
        return 'string';
      } else if (Array.isArray(value) === true){
        return 'array';
      } else if (typeof value === 'object' && Array.isArray(value) === false && value !== null && Object.prototype.toString.call(value) !== "[object Date]"){
        return 'object';
      } else if (value === 'undefined'){
        return 'undefined';
      } else if (typeof value === 'number'){
        return 'number';  
      } else if (typeof value === 'boolean'){
        return 'boolean';
      } else if (value === null){
        return 'null';
      } else if (typeof value === 'function'){
        return 'function';
      } else if (Object.prototype.toString.call(value) === "[object Date]"){
        return 'date';
      } else {
        return null;
      }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
