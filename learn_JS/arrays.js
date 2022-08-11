// Arrays - variables that hold multiple values

const numbers = new Arrays(1,2,3,4,5);
console.log(numbers);

//or

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);       //all fruits
console.log(fruits[1]);    // oranges

fruits[3]= 'grapes'; //it is possible!
// fruits = []; // it gives error!

// you can add new elt to const but you can't reseign it : fruits =[]; 

fruits.push('mangos');          // add at the end;
console.log(fruits);

fruits.unshift('strawberries'); // add at beginning;
console.log(fruits);

fruits.pop()                    // pop (delete) the last elt;
console.log(fruits);

console.log(Array.isArray(fruits));   //true
console.log(Array.isArray('hello'));  //false

console.log(fruits);
console.log(fruits.indexOf('oranges'));  //2




const others = ['apples', 'oranges', 'pears', 1, 2.3, 5, true]; //it ok !
console.log(others);
