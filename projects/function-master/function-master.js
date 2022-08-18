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
   return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    }


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { // //$function takes in object
let string = object.name;

return ('Welcome ' + string.charAt(0).toUpperCase() + string.slice(1) + '!');
} 

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { //$function takes in object
    let string1 = object.name;
    let string2 = object.species;
        return string1.charAt(0).toUpperCase() + string1.slice(1) + ' is a ' + string2.charAt(0).toUpperCase() + string2.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){ //$function takes in object
    if(object.noises){
        if(object.noises.length !== 0){
         return object.noises.join(" ");
            }else{
         return "there are no noises";
            } 
            }else{
         return "there are no noises";
            }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { //$function takes in a string of words and a word
    if (string.includes(word)){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { //$function takes in a name string and an object
    object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//bottom else for top if
function isFriend(name, object) { //$function takes in a name string and an object
    if(object.friends){
        if(object.friends.includes(name)){
            return true;
        } else{
            return false;
        }
    } else{
        return false;
    }
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { //$function takes in a name string and an array
    let list = [];
    for (let i = 0; i < array.length; i++){
        if (name !== array[i].name && array[i].friends.indexOf(name) === -1){
            list.push(array[i].name);
        }
    }
    return list;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { //$function takes in object, key, and value
    for (let i in object){
        if (i = key){
            if (object.i !== value){
                object[i] = value;
                    return object;
            }
        }
    }
    object.key = value;
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { //$function takes in object, and array
    for (let key in object){ 
        for (i = 0; i < array.length; i++){
            if (key = array[i]){
                delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { //$function takes in array
    return array.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
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