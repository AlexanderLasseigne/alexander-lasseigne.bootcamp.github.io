// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// .identity Takes any value and returns it unchanged
_.identity = function(value){
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


//.typeOf takes in any value and returns the type

_.typeOf = function(value){  // 
    if (typeof value === 'string'){
        return 'string';
    } if (value === true || value === false){
        return 'boolean';
    } if (Array.isArray(value)){        
        return 'array';
    } if (value === undefined){
        return 'undefined';      
    } if (value === null){
        return 'null';
    } if (!isNaN(value)){
        return 'number'
    } if (typeof value === 'function'){
        return 'function';
    } if (typeof value === 'object'){
    return 'object';
    }
} 


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//.first takes in array and number 
_.first = function(arr, num){ 
        //IF array is not an array return []
        if (!Array.isArray(arr)){ 
            return [];
        } else if (!num){ //if no num given as argument return first element
            return arr[0];
        } 
        return arr.splice(0, num); // else return first num of elements
}
// ___________________________

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
    //test for neg num &&
    //IF array is not an array return []
    if (!Array.isArray(arr) || num <= 0){
        return [];
    } if (num > arr.length){ //if number is greater then the length of                          
        return arr;             //array given
    }
      if (!num || num > arr.length){ //if num is not given.
        return arr[arr.length - 1]; //return last item in array 
    } if (num >= 0){ //IF num is given as paramater
    return arr.slice(-num);//return last number of items in array
    }
    //arr.splice(arr.length - num, num);    

}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val){//take value and array
    //loop array 
    for (let i = 0; i < arr.length; i++){
        //if current element in array is equal to value given
        if (val === arr[i]){
            return i; //return index
        }       
    }
    return -1; //if NOT return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(arr, value){ 
    //used _.indexOf to evaluate if value was present. If it did NOT
    //return -1 then the value exists and contains returns true. 
    //returns false if value does not exist
    return (_.indexOf(arr, value) !== -1) 
        ? true
        : false;

}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    if (Array.isArray(collection)){ //IF 'collection' is and ARRAY then...
        for (let i = 0; i < collection.length; i++){
            //run each item throug func passing it in, the index, and colleciton
            func(collection[i], i, collection);
        } 
    } else {//if (typeof collection === 'object'){

        for (let key in collection){
            //run each item throug func passing it in, the key, and colleciton
            func(collection[key], key, collection);
        }
      }   
}
  
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// Return a new array of all elements from <arr> with duplicates removed
_.unique = function(arr){
    var narr = []; // new array to .push() non-duplicate items into
    for (let i = 0; i < arr.length; i++){ // start iteration through arr
        // Use indexOf() to check new array for duplicate of each item
        // -tests for -1 (not duplicate) && .push()'s non duplicates 
        // into narr
        if (_.indexOf(narr, arr[i]) === -1){
            narr.push(arr[i]);
        }
    }
    return narr; //returns narr
}
 
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// filter() Function takes in an array and a function. Passes each element in
// array through provided function. paramater function takes in parameters, 
// the element, it's index, and the array from filter(). 
// The Annon function .push()'s 'true' results into a new array 
// and returns it.
_.filter = function(arr, func){
    let narr = [];
    for (let i = 0; i < arr.length; i++){
        if (func(arr[i], i, arr)){
            narr.push(arr[i]);
        }               
    }
    return narr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//reject() Function takes in an array and calls given function on each element
//annon func takes in arguements, (element, index, and arr).
//-and IF func results false, .push into new array to return.
_.reject = function(arr, func){
    let narr = [];
    for (let i = 0; i < arr.length; i++){
        if (!func(arr[i], i, arr)){
            narr.push(arr[i]);
        }
    }
    return narr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.to do something and get a specific result, without having to write that code at everyplace in our program that we need to use it.

* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


//***************************************************
 
 _.partition = function(arr, func){ // partition Funcion takes an array and a function in
    var output = []; //  to be our main array to push our 2 partitioned arrays into and return 
    var arrT = []; // array to push in truthy values
    var arrF = []; //array to push in false elements
    //for loop to iterate array and access each element
    for (let i = 0; i <  arr.length; i++){ 

       if (func(arr[i], i, arr)){
          arrT.push(arr[i]); 
        } else {
            arrF.push(arr[i])
          }         
    }
    output.push(arrT, arrF);
    return output;
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(coll, func){
    // initialize output var with emty array
    var output = [];
 
    // IF coll = ARRAY
    if (_.typeOf(coll) === 'array'){
        //call function on each item in 'coll' ARRAY passing in.
        //-element, index, coll
        for (let i = 0; i < coll.length; i++){
        //push result of running func to output array
        output.push(func(coll[i], i, coll));
        }
     
      // IF coll = OBJECT  
    } else {_.typeOf(coll) === 'object'  //else its an object
        for (let key in coll){
            //push result of running func to output array
            output.push(func(coll[key], key, coll))
        }
      }
    return output; 
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// function takes in an array of objects and a property
_.pluck = function(arrObj, prop){
    // map returns new array of each element passed to it's given function 
    return _.map(arrObj, function(e){ 
        return e[prop]; 
    })
      
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function(collection, func){
   
        // determine if 'collection' is an ARRAY
        if (Array.isArray(collection)){
            // IF 'collectin' is an ARRAY then begin to iterate to have access
            // to every ELLEMENT in the ARRAY
            for (let i = 0; i < collection.length; i++){
                if (typeof func === 'function'){
                // determine if the current element in colleciton is falsy with func            
                    if (!func(collection[i], i, collection)){
                        return false; 
                    } 
                } else {
                        if (!collection[i]){
                            return false;
                        } 
                    } 
            }    
            // Test to verify collection is an object
        }   else if (typeof collection === 'object' && collection !== null){  // test if collection is an object
                // Begin FOR IN LOOP to access every key in object 'collection'
                for (let key in collection){
                    //test if function exists
                    if (typeof func === 'function'){
                        if (!func(collection[key], key, collection)){
                            return false; // incriment our countA by one if ELEMENT in ARRAY is TRUTHY.
                        } 
                    } else {
                        if (!collection[key]){
                            return false;
                        } 
                      }
                }
            }
   return true; 
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){
    if (Array.isArray(collection)){
        // IF 'collectin' is an ARRAY then begin to iterate to have access
        // to every ELLEMENT in the ARRAY
        for (let i = 0; i < collection.length; i++){
            if (typeof func === 'function'){
            // determine if the current element in colleciton is true with func            
                if (func(collection[i], i, collection)){
                    return true; 
                } 
            } else {
                    if (collection[i]){
                        return true;
                    } 
                } 
        }    
        // Test to verify collection is an object
    }   else if (typeof collection === 'object' && collection !== null){  // test if collection is an object
            // Begin FOR IN LOOP to access every key in object 'collection'
            for (let key in collection){
                //test if function exists
                if (typeof func === 'function'){
                    if (!func(collection[key], key, collection)){
                        return true; // 
                    } 
                } else {
                    if (!collection[key]){
                        return true;
                    } 
                  }
            }
        }
    return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


_.reduce = function(array, func, seed){
    // declare var acc as accumulator/ return value
    var acc;
    //test for seed presence
    if (seed !== undefined){
        acc = seed; //IF present/ acc shall equal seed
     // begin iterating array  
    for (let i = 0; i < array.length; i++){
        // assign or reassign accumulator variable to passed in function func
        acc = func(acc, array[i], i);
        }
    } else {
        acc = array[0]; //IF seed NOT present/ acc shall equal 1st element||value in array
        //iterate
        for (let i = 1; i < array.length; i++, array){ //Direction didn't mention a 4th parameter of the array in Objectives: 1)
            // assign or reassign accumulator variable to passed in function func
            acc = func(acc, array[i], i, array);
            }  
        } 
    return acc;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to
*   <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// extend takes in an OBJECT and another 1 or more OBJECTS
_.extend = function(destin, ...obs){
   return Object.assign(destin, ...obs) // OMG Object.assign is in
   //the official release and will create a shallow copy of the object!!!
}  //Alex covered this exact scenario in class and I've been sooo
   //confused and playing catch up that it didn't hit me till just now!
   //Thank you ghostDog_alex!!! /bow/ 


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
