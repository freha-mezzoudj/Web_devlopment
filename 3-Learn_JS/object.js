// object

const person = {
    firstName:'Marwa',
    lastName:'Bmz',
    age:30,
    hobbies:['books', 'sports', 'movies'],
    adress:{street:'08 Hammou Blis', city: 'Oran', state: 'Algeria'}
}
alert(person);
console.log(person); 
console.log(person.firstName);                         //Marwa
console.log(person.firstName, person.lastName);        //Marwa Bmz  

//how to have "movies" ?
console.log(person.hobbies[2]);
//how to have "city"?
console.log(person.adress.city);

//to ceate variables and
//to pool firstName and lastName out of personn;
const {firstName, lastName} = person; 
console.log(firstName);   //Marwa  

//for embedding object such as adress:
//const {firstName, lastName, adress:{city}} = person;
//console.log{firstName};

//we can added proprities:
person.email = 'marwab@gmail.com';
console.log(person);

//array of object
const todos = [
   {id: 1,
    text: 'Take out trash',
    isComleted: true
   },
   {
    id:2,
    text:'Meeting with boss',
    isCompleted: true
   },
   {
    id: 3,
    text:'Dentist appt',
    isCompleted:false
   }  
];

console.log(todos);

//How to have "Meeting with boss" ?
console.log(todos[1].text);  // "Meeting with boss"

//json, when you send data to the server or receive it, it is in a Json Frormat.

//to formate todos to json foramt automaticly: inorder to send it to a server;

const todoJSON = JSON.stringify(todos);
console.log (todoJSON);

// Loops : 00:37;47/ 01:02:42
