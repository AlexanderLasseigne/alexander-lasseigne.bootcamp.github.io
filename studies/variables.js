/**
 * VARIABLES:
 * 0.  To hold things in memory during the life-cycle of a 
 * program, we can use variables.  Variables 
 * are named identifiers that can point to values of a 
 * particular type, like a Number, String,
 * Boolean, Array, Object or another data-type. Variables
 * are called so because once created, we
 * can often CHANGE the value (and type of value) to which they
 * point.
 * 
 * 1. There are 2 phases of using variables: declaration
 * and initialization (or assignment).
 * 
 * 2. The keywords var, let, const.
 * 
 * 3. Hoisting
 * 
 * 
// 

// 1. declaration and initialization (or assignment/reassignment).//
/* 
At the declaration phase, the variable
myName is undefined b/c we have NOT
initialized it to anything
*/
var myName;
console.log(myName); // prints => undefined

// 1.a. initialization or assignment //
// When you assign a value to an undeclared variable. To create a variable 
// in this example, we use the keyword, var, 
// followed by a name (id or alias) for our variable.
myName = 'john';
console.log(myName); // prints => john

// 1.b. Re-assignment //
//Changing or updating the value of a previously assigned variable
myName = 'bob';
console.log(myName); // prints => bob


// 2. The keywords var, let, const. //
/*

*/