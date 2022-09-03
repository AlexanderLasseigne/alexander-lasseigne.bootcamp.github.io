// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base - define a condition that tells function when to stop
  //test if n is 0 to end recursion
  if (n == 0){
    return 1;
  } if (n < 0){ //test n if negative and return null if so
      return null;
    } else {
  // recursion - what to do when not base case
      //unresolvable expression so n * remains and function factoral is called again with  new parameter
      return n * factorial(n - 1); // new parameter when called is current value of n - 1
    }
}

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) { //expression assigns function to sum and when called will take in array
  //base
  if (array.length === 0){ //test length of array for any remaining values
    return 0; //end if array is empty
  } 

  //recursion
  //the first item in array begins expression of adding it to the possibly unresolvable function
  //if unresolved function is called back until base is met with the remaining array as parameter
  //after the first element keeps getting added to the expression  
  return array[0] + sum(array.slice(1));
};

// ** Hard Blue SKIP for now
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
let isEven = function(n){
  //Base cases
  //test if n is greater than 0
  if (n > 0) {
    return positive(n); //if greater than 0 call positive function 
  } else {
    return negative(n);//else call negative function 
  }
  // test if value is 0
  function negative(num) {
    if (num === 0) { // if value is 0 return true
      return true;
    } else if (num === -1) { // if value is negative 1 return false
      return false;
    } else { //recursion
      return isEven(num + 2); //else return function with value plus 2
    }
  }

  function positive(num) {
    //base cases
    if (num === 0) {// if value is 0 return true
      return true;
    } else if (num === 1) { //if value is 1 return false
      return false;
    } else { //recursion
      return isEven(num - 2); //else return function with value minus 2    
    }                         //-and get that  recursion requirement from  
  }                           //the assignment directions
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //base case of 0 to end recursion once all integers below/above parameter 
  if (n === 0){// -in value are added to pending execution
    return 0;
  }
  //recursion
  if (n > 0){ // test for positive and decrement down to 0 base case if T
  return (n - 1) + sumBelow(n - 1); // in recursion.  
  } 
  if (n < 0){ // test for negative and increment up to 0 base case if T
    return (n + 1) + sumBelow(n + 1);
  }

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // base case
  var isInc = true; //isInc (my 'catch', 'default', or 'seed') set to true initially
  if (x > y) { // test direction of range. if first value greater flip them
    var temp = x;       // temporarilly assign and reassign 
    x = y;              //flippity do-da>
    y = temp; // flip the range to make value of x the lower number to correct range direction 
              // from left to right
    isInc = false; //toggle default if this IF statement is executed
  }
  if (x === y) return [];// if give values are equal return empty array
  if (x+1 === y) return [];// if first value plus 1 equals second value return empty array
  //recursion                          
  var res = range(x, y-1); // res variable initialized with  callback
  res.push(y-1); // push 
  //
  if (isInc){ // if projected value range is in correct direction
    return res; //<= return array 
  } else if (!isInc){ // if not correct direction
    return res.reverse();//-reverse it and return
    }
}





// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //base                2,    4

  //recursion
  var isNeg = false;
  if (exp < 0) {
    isNeg = true;
    exp *= -1;
  }
  if (exp === 0) return 1;
  var res = base * exponent(base, exp-1);
  return !isNeg ? res : 1/res;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (n%2 !== 0) {
    return false;
  }
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //base 
  if (string.length <= 1){
    return string; //test for empty string. end if empty.
  } else {
  //recursion 
  //console.log(string);
  // expression starts/continues if we reach this point with the last character in string
    return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));
    }                                           // -calls reverse with new paramater of string without that last value.
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(stringIn) {
  let string = stringIn.split(' ').join('')
  if (string.length === 1) return true; //if string is 1 char return true
  if (string.length === 2) return string[0].toLowerCase() === string[1].toLowerCase(); // if string 2 chars, if they are same then true
  // if first char 
  if (string[0].toLowerCase() === string.slice(-1).toLowerCase()){ 
    return palindrome(string.slice(1, -1));
  }  

   
  // if lowercase of first char does NOT match last char lowercase version of itself 
  return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
//**** must use recursion for these so use 2 + 2 + 2 for 2 * 4
var multiply = function(x, y) {
  var isNeg = false;
  if (x < 0) {
    isNeg = !isNeg;
    x = -x;
  }
  if (y < 0) {
    isNeg = !isNeg;
    y = -y;
  }
  if (y === 0 || x === 0) return 0;
  if (y === 1) return x;
  var res = x + multiply(x, y-1)
  return isNeg ? -res : res;
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1[0] !== str2[0]) return false;
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  if (str.length === 1) return [str[0]];
  var list = createArray(str.substring(1));
  list.unshift(str[0]);
  return list;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  if (array.length === 1){
    return [array[0]];
  }
  var list = reverseArr(array.slice(1, array.length));
  list.push(array[0]);
  return list;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) return [];
  var list = buildList(value, length-1);
  list.push(value);
  return list;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) return 0;
  if (array[0] === value) return 1 + countOccurrence(array.slice(1, array.length), value);
  return countOccurrence(array.slice(1, array.length), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 0) return [];
  var list = rMap(array.slice(1, array.length), callback);
  list.unshift(callback(array[0]));
  return list;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) return [];
  var list = capitalizeWords(array.slice(1, array.length));
  list.unshift(array[0].toUpperCase());
  return list;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) return [];
  var list = capitalizeFirst(array.slice(1, array.length));
  list.unshift(array[0][0].toUpperCase() + array[0].substring(1));
  return list;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
 
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(string, occ=1) {
  //base case: if first char doesn't exist (string is empty) return 0 end function
  if (!string[0]){
    return 0;
  } 
  //recursion case: if first char DOES exist
  
  //add char to obj as key
  //compare first char to each character in string

  //IF it matches any character increment occur += 1(charAt 1-? )

  //else do nothing
  //return occurances + letterTally(rest of string, occ)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  if (list.length === 0) return [];
  var res = compress(list.slice(1));
  if (list[0] !== res[0]) {
    res.unshift(list[0]);
  }
  return res;
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if (array.length === 0) return [];
  var list = minimizeZeroes(array.slice(1));
  if ((array[0] === 0 ^ list[0] === 0) || array[0] !== 0) {
    list.unshift(array[0]);
  }
  return list;

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) return [];
  var list = alternateSign(array.slice(0, array.length-1));
  var lng = array.length;
  if (lng%2 === 0) {
    if (array[lng-1] > 0) {
      array[lng-1] = -array[lng-1];
    }
  } else {
    if (array[lng-1] < 0) {
      array[lng-1] = -array[lng-1];
    }
  }
  list.push(array[lng-1]);
  return list;
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) return '';
  var tempStr = numToText(str.substring(0, str.length-1));
  var replace;
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  return tempStr + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
