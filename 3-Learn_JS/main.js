//some examples on the console
console.log('Hello html, css and JS!');
console.error('Be careful: this is an error :(');
console.warn('This is only a warning :)');
alert('Hello Javascript!');


//Variables: var, let, const:
//"var" is globaly scoped;
//"let" and "const" have a block level scope.
let age = 40;
age = 41;

console.log(age);

/*but with const (constant), we must initialize the variable
 and we can't be changed any more!*/
const age1 = 40;
//age1 = 41;

console.log(age1);

//Data types: strings, Numbers, Boolean, null, undefined, Symbol.
const name="John";
const his_age = 40;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log("Type of name: ", typeof name);
console.log("Type of his_age: ", typeof his_age);
console.log("Type of rating: ", typeof rating);
console.log("Type of isCool: ", typeof isCool);
console.log("Type of x: ", typeof x);
console.log("Type of y: ", typeof y);
console.log("Type of z: ", typeof z);

//time 00:17:05--06/08/2022.

//Google: js null is an object!
/* -In js there 5 data types that can contain values:
string, number, boolean, object, function.

   -there are 6 types of objects: Object, Data, Array,
   String, Number, Boolean.

   - And 2 data types that cannot contain values:
   null and undefined.

   typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" 
typeof null                   // Returns "object"
*/

console.log(typeof "John");   // Returns "string"
console.log(typeof 3.14);     // Returns "number"
console.log(typeof NaN);      // Returns "number"
console.log(typeof false);      // Returns "boolean"
console.log(typeof [1,2,3,4]);  // Returns "object"
console.log(typeof {name:'John', age:34});  // Returns "object"
console.log(typeof new Date()); // Returns "object"
console.log(typeof function () {}); // Returns "function"
console.log(typeof myCar);      // Returns "undefined" *
console.log(typeof null);       // Returns "object"

/*The data type of NaN is number
The data type of an array is object
The data type of a date is object
The data type of null is object
The data type of an undefined variable is undefined *
The data type of a variable that has not been assigned a value is also undefined * */


