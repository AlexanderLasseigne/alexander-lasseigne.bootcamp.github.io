// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
// FACTORY FUNCTION 
function makeContact(id, nameFirst, nameLast) {
  // initialize obj to be our contact object
  var obj = {};
  // add keys from parameter names and add values from arguments given
  obj.id = id;
  obj.nameFirst = nameFirst;
  obj.nameLast = nameLast
  // return obj
  return obj;
} 


 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // done in class day 4 - addContacts pushes it's parameter into our contacts array
        addContact: function(contact){
            contacts.push(contact);
        },
        // takes a full name string like 'Max Gaudin' and returns the contact object if found in list
        // else return 'undefined'
        findContact: function(fullName){
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        

        // take contact object to be removed from the contact-list
        removeContact: function(contact){
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i].id === contact.id){
                     contacts.splice(contacts[i], 1);
                }
            }
        },
        
        // returns a String formated with all the full-names separated with a line-break
        printAllContactNames: function(){
         //string to store concatenated names
         var string = '';
         //allNames to work on string format
         var allNames = '';   
         //FOR entire length of array contacts loop and iterate 1
         for (var i = 0; i < contacts.length; i++){
             //add string to itself and '.' + objects firstname ' ' lastname looping through our array of objects
             string += '.' + contacts[i].nameFirst + ' ' + contacts[i].nameLast;  
         }              
         //Replace all '.' in string with line break
         allNames = string.split('.').join('\n');
           //return first name ' ' last name each on own line and remove the first line break     
           return allNames.slice(1);
   }    
}
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
