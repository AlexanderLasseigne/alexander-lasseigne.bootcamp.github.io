//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
      for (var keys in object){
        arr.push(object[keys]);
      }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {//why not use += to add to string?
    let outputArray = [];
    for (var key in object) {
        outputArray.push(key)
}
    let returnArray = outputArray.join(' ');
    return returnArray;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var string = [];
    var output = '';
    for (let key in object){
        if (typeof object[key] === 'string'){
            string.push(object[key]);
        }
    } 
    output = string.join(' ');
    return output;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true){
        return 'array';
    } else if (typeof collection !== null && typeof collection === 'object'){
        return 'object';
    } else {
        return null;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var arr = string.split('');
    var first = arr.shift();
      first = (first.toUpperCase());
        arr.unshift(first);
        return arr.join('');
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
   return string.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    }


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
let string = object.name;

return ('Welcome ' + string.charAt(0).toUpperCase() + string.slice(1) + '!');
} 

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let string1 = object.name;
    let string2 = object.species;
        return string1.charAt(0).toUpperCase() + string1.slice(1) + ' is a ' + string2.charAt(0).toUpperCase() + string2.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object){
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

function hasWord(string, word) {
    if (string.includes(word)){
        return true;
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//bottom else for top if
function isFriend(name, object) {
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

function nonFriends(name, array) {
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

function updateObject(object, key, value) {
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

function removeProperties(object, array) {
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

function dedup(array) {
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