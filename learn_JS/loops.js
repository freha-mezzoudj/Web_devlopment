//loops: for loop, while loop, do/while loop
//for loop:
//Instead of writing:

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
/*
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";
*/
//we write:
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }
 console.log(text); 

  //for loop with arrays:
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

console.log(txt);

//------------------------
// for loop:
for(let i=0; i<=10; i++){
    console.log('Numbers: ' + i);
}
//while loop:
let i = 0;
while (i < 10){
    console.log('Number :' + i);
    i++;
}
// loop + object
const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist appt',
    isCompleted: false
},
]; 

for(let todo of todos){
    console.log("for loop: " + todo.text);
}
//forEach, map, filter
//1- forEach:
todos.forEach(function(todo){
    console.log("forEach loop: " + todo.text);
});

//2-map: return an array!
const todoText = todos.map(function(i){
    return i.text;
});
console.log(todoText);

// ['Take out trash', 'Meeting with boss', 'Dentist appt']

//3- filter:

const todoTextDone = todos.filter(function(i){
    return i.isCompleted == true;
});
console.log("filter job: " + todoTextDone);

//filter job: [object Object],[object Object]
//if we need to have "text", you have to do:
const TextDone = todos.filter(function(i){
    return i.isCompleted === true; // == or === ? ===.
}).map(function(i){
    return i.text;
        });
console.log("filter job Text: " + TextDone);
//filter job Text: Take out trash,Meeting with boss

// if conditionnal
/*== don't matter with the type of data, 
(x == 10) and (x == '10') as well!*/

const x = 10;
if(x == 10){
    console.log('x is 10');
} // It is ok,

const x1 = '10';
if(x == 10){
    console.log('x is 10');
}  // it is also ok.
//===

const y = 10;
if(y === 10) {
    console.log('y1 is 10');
} // it is ok: same type of data.


const y1 = '10';
if(y1 === 10) {
    console.log('y1 is 10');
} // it isn't ok: string and number don't match!

// the  === is safe to use!
// if & else:
const z = 10;
if(z === 10){
    console.log('z is 10');
} else {console.log('not true');
       } 

// we use || for "or" 
// we use && for "and" 

//? :
const c = 10;
const color = c > 10 ? 'red': 'blue';
console.log(color);  //blue

//switch case break default
switch (color){
    case 'red': 
        console.log('color is red!');
        break;
    case 'blue':
        console.log('color is blue!');
        break;
    default:
        console.log('color is not red or blue!'); 
        break;  


}