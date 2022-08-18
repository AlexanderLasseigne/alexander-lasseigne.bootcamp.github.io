/**
 * VARIABLES:
 * 0.  To hold things in memory during the life-cycle of a 
 * program, we can use variables.  Variables 
 * are named identifiers that can point to values of a 
 * particular type, like a Number, String,
 * Boolean, Array, Object or another data-type. Variables
 * are called so because once created, we
 * can CHANGE the value (and type of value) to which they
 * point.
 * 
 * 1.  There are 2 phases of using variables: declaration
 * and initialization (or assignment).
 * 
 * 2.  To create a variable we use the keyword, var, 
 * followed by a name (id or alias) for our
 * variable.
 * 
 * 3.  Hoisting
 * 
// 1. declaration //
/* 
At the declaration phase, the variable
myName is undefined b/c we have NOT
initialized it to anything
*/
var myName;
console.log(myName); // prints => undefined

// 2. initialization or assignment
// When you assign a value to an undeclared variable.
myName = 'john';
console.log(myName); // prints => john

// 3. Re-assignment
//Changing or updating teh value of a previously assigned variable
myName = 'bob';
console.log(myName); // prints => bob
