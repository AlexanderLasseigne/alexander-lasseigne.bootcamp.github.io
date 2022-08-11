
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//prints 1 - 7 pound signs on new lines forming a triangle in console
function triangles() {
  var pound = '#'; //declare var pound to update count of pounds printed
    for (var i = 1; i <= 7; i++){  
      console.log(pound);
      pound += '#'; 
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//prints 1 - 100. Exceptions:1- print 'Fizz' if number divisible by 3
//** Had to change to numbers 1 - 15 b/c directions bunk
//print 'Buzz' if divizible by 5 but not 3. and 'FizzBuzz' if divisible by 3 & 5 
function fizzBuzz() {
  for (var i = 1; i <= 15; i++){//counter i increment from 1 - 100 and do:
    if (i % 3 == 0 && i % 5 == 0){//test if divis by BOTH 3 & 5
      console.log('fizzbuzz');//print 'FizzBuzz' if true **had to change F to f
    } else if (i % 3 == 0){//test if divis by 3
        console.log('fizz');//print 'Fizz' if true **had to change F to f
    } else if (i % 5 == 0 && i % 3 !== 0){//test if divis by 5 but NOT 3
        console.log('buzz');//print 'Buzz' if true **had to change B to b
    } else if (!Number.isNaN(i)){
        console.log(i);//print current value of i in loop count 
    } else {
      return null;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function chess(size){
  let p = '#';
  let board = p;

  for (var i = 1; i <= size; i += 1){
    console.log(board);
    
  }
}  
chess(8);

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
