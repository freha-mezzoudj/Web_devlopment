//create an abject using a constractor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    //dob: date of birthday.
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2.lastName);
console.log(person2.dob);


//Embaded object: if we define date as an object using "new".

function MyPerson(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    //dob: date of birthday.
}

/*
Person {firstName: 'John', lastName: 'Doe', dob: '4-3-1980'}
oop.js:14 Smith
oop.js:15 3-6-1970 */

// Instantiate object
const person3 = new MyPerson('Johnny', 'Doey', '4-3-1980');
const person4 = new MyPerson('Marry', 'Smithy', '3-6-1970');

console.log(person3);
console.log(person4.lastName);
console.log(person4.dob);
console.log(person4.dob.getFullYear);  
console.log(person4.dob.getDay());      //lot of Date's functions 
/* MyPerson {firstName: 'Johnny', lastName: 'Doey', dob: Thu Apr 03 1980 00:00:00 GMT+0100 (heure normale d’Europe centrale)}
oop.js:32 Smithy
oop.js:33 Fri Mar 06 1970 00:00:00 GMT+0100 (heure normale d’Europe centrale) */

//New functions in the constructor function:
function Personne(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName =function(){
        //return '${this.firstName} ${this.lastName}'; //don't works :(
        return this.firstName + ' ' + this.lastName;             //it works    :) 
    }
} 

const person5 = new Personne('Freha', 'Mzg', '2-4-1974');
const person6 = new Personne('Mouad', 'Bmz', '10-24-2006');

console.log(person5.dob.getFullYear());
console.log(person5.getBirthYear());
console.log(person5.getFullName());

//Prototypes

console.log(person6);
/*
Personne {firstName: 'Mouad', lastName: 'Bmz', dob: Tue Oct 24 2006 00:00:00 GMT+0200 (heure d’été d’Europe centrale), getBirthYear: ƒ, getFullName: ƒ}    
firstName: "Mouad"
getBirthYear: ƒ ()
getFullName: ƒ ()
lastName: "Bmz"
[[Prototype]]: Object 
    constructor: ƒ Personne(firstName, lastName, dob)
    [[Prototype]]: Object
*/

function MaPersonne(firstName,lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

MaPersonne.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

MaPersonne.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

const person7 = new MaPersonne('Hind', 'Bmz', '2-19-1999');
const person8 = new MaPersonne('Anes', 'Bmz', '5-15-2005');

console.log(person7.getFullName());  //Hind Bmz
console.log(person8);
/*
 MaPersonne {firstName: 'Anes', lastName: 'Bmz', 
 dob: Sun May 15 2005 00:00:00 GMT+0200 (heure d’été d’Europe centrale)}
 dob: Sun May 15 2005 00:00:00 GMT+0200 (heure d’été d’Europe centrale) {}
    firstName: "Anes"
    lastName: "Bmz"
    [[Prototype]]: Object

    getBirthYear: ƒ ()
        arguments: null
        caller: null
        length: 0
        name: ""
        prototype: {constructor: ƒ}
        [[FunctionLocation]]: oop.js:86
        [[Prototype]]: ƒ ()
        [[Scopes]]: Scopes[2]
    getFullName: ƒ ()
    constructor: ƒ MaPersonne(firstName,lastName, dob)
    [[Prototype]]: Object

    The fuctions (getFull name() and getBirthYear()) don't appear in the constroctor;
    but appear in the prototype...
 ==> this was OOP with Javascript5, with Javascript6 ...
 */
//--------------------------------------------------------------
 //With js6, the classes are added...
 
 //to create a class, we don't need to use the prototype.
 // this such as we do in java.
 class Personnn{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName; 
        
    }
 }

 const person9 = new Personnn('Omi', 'Mah', '6-15-1952');
 console.log(person9);

 /*
 Personnn {firstName: 'Omi', lastName: 'Mah', dob: Sun Jun 15 1952 00:00:00 GMT+0100 (heure d’été d’Europe centrale)}
dob: Sun Jun 15 1952 00:00:00 GMT+0100 (heure d’été d’Europe centrale) {}
firstName: "Omi"
lastName: "Mah"
[[Prototype]]: Object
    constructor: class Personnn
    getBirthYear: ƒ getBirthYear()
    getFullName: ƒ getFullName()
    [[Prototype]]: Object
*/