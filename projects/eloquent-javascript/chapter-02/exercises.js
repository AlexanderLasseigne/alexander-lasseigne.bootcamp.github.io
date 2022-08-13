
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//prints 1 - 7 pound signs on new lines forming a triangle in console
function triangles(num) {
  var pound = '#'; //declare var pound to update count of pounds printed
    for (var i = 1; i <= num; i++){  
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

//Function takes in an integer for a parameter
function drawChessboard(size){
var board = ''; //string for building each row by adding a '#', ' ', or '\n'
  for (let x = 0; x < size; x++){ //outer loop 'x' runs innerloop 'y' to completion then adds new line 
    for (let y = 0; y < size; y++){ //inner loop 'y' makes each string of '#' and ' '
      if ((x + y) % 2 === 0){ //alternates even & odd and adds characters based on this
        board += (' '); //statement starts even so prints ' '       
      }   
      else {
        board += ('#'); //next iteration alternates so '#' prints
      }            
    }
    board += '\n'; // adds new line break once inner loop is run
  }
  console.log(board); //logs entire board with alternating ' ', '#', '\n'
}


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
