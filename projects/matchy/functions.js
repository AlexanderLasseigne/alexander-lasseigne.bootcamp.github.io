/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    let obj;
    for (let i = 0; i <= animals.length - 1; i++){
    obj = animals[i];
      if (obj.name === name){ 
        return obj;//output = obj;           
      }   
    }
return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for (let i = 0; i <= animals.length - 1; i++){
        if (animals[i].name === name){
            animals[i] = replacement;
        }
    }
}

//return animals;
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    let obj;
    for (let i = 0; i < animals.length; i++){
    obj = animals[i];
      if (obj.name === name){ 
        animals.splice(i, 1);           
      }   
    }
return animals;
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
  for (let i = 0; i < animals.length; i++){
    if (animals[i].name === animal.name){
      return animals;
    } 
  }
  if (animal.name.length > 0 && animal.species.length > 0){
    animals.push(animal);
    return animals;
  }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
