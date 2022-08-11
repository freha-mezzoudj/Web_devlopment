alert("hhhh");
const name = 'John';
const age = 30;

/*      STRING    */


//concatenation
console.log ('My name is ' + name + ' and I am ' + age + '.');
//template string
console.log('My name is ${name} and I am {age}');
//or
const hello = 'My name is ${name} and I am {age}';
console.log(hello);

//methods 
const s='Hello World';
//"length" is a propritiy, not a method!
console.log('legth of s : ' + s.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const s1='technology, computers, it, code';
console.log(s1.split(', '));









