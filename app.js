let form = document.querySelector('#form');
let task = document.querySelector('#task');
let collection = document.querySelector('.collection');

/* 
  type something on the input 

  click the submit button to submit the value in the input

  it should appear on the collections area 
  delete the item

*/

form.addEventListener('submit', function addTask(e) {
  if (task.value === '') {
    alert('Please fill out');
  } else {
    console.log(task.value);
  }
  e.preventDefault();
});
