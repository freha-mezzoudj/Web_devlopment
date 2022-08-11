const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    console.log(nameInput.value);
}


//OR

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
    //time: 01:35:49 / 00:04:40
    //alert('Please enter fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter the values!';
    setTimeout(() => msg.remove(), 3000);  //=3 seconds
    } else{
    
    console.log('success');
}
}
//It don't work for me :(
//or 

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter the values!';

    setTimeout(() => msg.remove(), 3000);  //=3 seconds
    } else{
      const li = document.createElement('li');
      li.appendChild(document.createTextNode('${nameInput.value} : ${emailInput.value}'));
      
      userList.appendChild(li);

      //Clear fields
      nameInput.value = '';
      emailInput.value = '';    
    }
}

//Thanks to Brad :)