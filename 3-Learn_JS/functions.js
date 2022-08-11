function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums();      // NaN
addNums(5,4);   //9


//however, if we use "return", we must console.log (function)

function addNums1(num1, num2){
    return(num1 + num2);
}
console.log(addNums1());      // NaN
console.log(addNums1(5,4));   //9

// It is possible to use variable:
const addNums2 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addNums2(5,6));
console.log(addNums2(5, 6));

//or
const addNums3 = (num1 = 1, num2 = 1) => {
    console.log(num1 + num2);
}
addNums3(4,6);
//or
const addNums4 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums4(4,6);
// or if we use only one paramter:
const addNums5 = num1 => num1 + 5;
console.log(addNums5(4)); //9

//forEach =>
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

todos.forEach((i)=>console.log(i))

//this ...not yet!