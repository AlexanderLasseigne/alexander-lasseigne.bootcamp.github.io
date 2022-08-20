//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//$func takes in an object
function objectValues(object) {
    var arr = []; //declare an arr to update and return
      for (var keys in object){ //iterate over object to access each keys' value
        arr.push(object[keys]); //.push each value into back of arr
      }
    return arr; // return arr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { //$funtion takes in an object
    let outputArray = []; //empty arry declared as empty array to collect values
    for (var key in object) { //loop over object for every key 
        outputArray.push(key) //push each key into outputArray
}
    //let returnArray = 
    return outputArray.join(' '); //join all strings pushed into $out
    //seperated with spaces
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { //$function takes in an object
    var string = []; // string to push vals into and return
    for (let key in object){ //itt over object 
        if (typeof object[key] === 'string'){ //and IF each object is
            // a string, .push into our string var
            string.push(object[key]);
        }
    } 
    return string.join(' '); // join all .pushed strings into one string w/ spaces
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { //$function takes in one argument
    if (Array.isArray(collection) === true){  // tests if passed in element
        //is an array and return 'array' if true
        return 'array';
      // if NOT array test if collection is considered an 'object' with 
      ///typeof AND that collection is not null 
    } else if (typeof collection !== null && typeof collection === 'object'){ 
        return 'object'; // if both cases are true return 'object'
    }// else {
        //return null; //otherwise return null 
    //}
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { //$function takes in a string
    var arr = string.split(''); // split string parameter and assign 
    //result to arr of an array made up of strings containing each letter
    // of the string parameter
    var first = arr.shift(); // ititiate first var to value of first letter
    // after removing it from string
      first = (first.toUpperCase()); // reassign first to capital of itself
        arr.unshift(first); // insert first into front of array
        return arr.join(''); // join array of string letters into one string
}       //and return

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { //$function takes in a string
    //and return a string with all the words capitalized
    var output = string.split(' '); //spits string into array of strings of words
                                    //seperated @ spaces
    var capd = []; // var array to hold our cpaitalized words
        for (i = 0; i < output.length; i++){ //iterate over output array
            capd.push(capitalizeWord(output[i])); //capitalize first 
            //letter of each word and push into our capd var
        }
        return (capd.join(' ')); // return our joined strings as one string
        //of words with first letter capped.
    }

//return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { // //$function takes in object
let string = object.name; // access name property value. assign to string.
    //logs 'Welcome ' then first letter capitalized, then rest of name, then exclamation
    //string.charAt(0).toUpperCase() takes first letter and caps and logs it in msg.
    //string.slice(1) accessess the rest of name and logs it. then just '!'
return ('Welcome ' + string.charAt(0).toUpperCase() + string.slice(1) + '!');
} 

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { //$function takes in object
    let string1 = object.name; //assigns name value in taken object to string 1
    let string2 = object.species;// " species ""
        //capitalizes and logs first letter in name
        //+ rest of name + ' is a ' + capitalized first letter in species + remaining species string
        return string1.charAt(0).toUpperCase() + string1.slice(1) + ' is a ' + string2.charAt(0).toUpperCase() + string2.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){ //$function takes in object
    if(object.noises){ //tests an object has a noises property array
        if(object.noises.length !== 0){ //tests array is not empty if there
         return object.noises.join(" "); // if it passes returns as string w/ spaces
            }else{
         return "there are no noises"; // if fails inside loop test return this
            } 
        }else{
            return "there are no noises"; // if fails outer loop test return this
            }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { //$function takes in a string of words and a word
    return (string.includes(word)) //used .includes to simply check,
    //return the returned true or false from .includes if string pased in matches word passed in.
 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { //$function takes in a name string and an object
    object.friends.push(name); //adds the passed in name to the objects friends array
        return object; //returns the modified object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//bottom else for top if
function isFriend(name, object) { //$function takes in a name string and an object
    if(object.friends){ //test friends property exists in object
        if(object.friends.includes(name)){ //tests if name exists in objects 
            //friend array and returns true if so
            return true;
        } else{
            return false; //returns false if not contained
        }
    } else{
        return false; //returns false if friends array does not exist in object
    }
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { //$function takes in a name string and an array
    let list = []; //initialize list as empty array to hold and return list of non-friends
    for (let i = 0; i < array.length; i++){ //itterate over array
        //if current array index objects name value does NOT match name && current value 
        // -objects friends value does not contain name passed in- 
        if (name !== array[i].name && array[i].friends.indexOf(name) === -1){
            list.push(array[i].name); //then push current opjects name prop value to list
        }
    }
    return list; //return built list
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { //$function takes in object, key, and value
    for (let i in object){ //iterate object keys
        if (i = key){ //if current key in object matches key passed in...
            if (object.i !== value){ //test if value passed in is NOT a key in object
                object[i] = value; // assign value to current key
                    return object; //return object stopping loop
            }
        }
    }
    object.key = value; //create key given in object if object does not contain it
    //and assign the value that was given
        return object; //return modified obj
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { //$function takes in object, and array
    for (let key in object){ //itterate over all keys in object
        for (i = 0; i < array.length; i++){ //itterate over all items in array
            if (key = array[i]){ // if current key is current array item then
                delete object[key]; //delete that current objects key
            }
        }//once done checking all items in list for matches and deleting,
        //return to outside for loop to iterate to next key in object and check it 
        //against each item in array
    }//once all keys tested return modified object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { //$function takes in array
//returns an array with all duplicates removed
    var outputarr = [];
    for(i=0; i<array.length; i++){
        if(outputarr.indexOf(array[i]) === -1){
            outputarr.push(array[i]);
        }
    }
    return outputarr;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}

/*
var output = [];
    var hold = array[0];
    console.log(hold);
    for (let i = 0; i < array.length; i++){
    
            if (hold !== array[i]){
               output.push(hold);                
            } 
            
    } //console.log(array)
    output.unshift(hold);
    console.log(output);
    return output;


// returns a new array of filtered items run through the function index 
    // that 
    return array.filter((item, index) => array.indexOf(item) === index);

    */