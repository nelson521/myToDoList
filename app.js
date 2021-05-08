let form = document.querySelector('#form');
let task = document.querySelector('#task');
let collection = document.querySelector('.collection');
let parentEle = document.querySelector('.collection');
/* 
  type something on the input 

  click the submit button to submit the value in the input


  it should appear on the collections area 
  delete the item

*/

form.addEventListener('submit', function addTask(e) {
  /* 
    I want to place the task in the collections area 
    I need to create a li 
    take the value of the input 
    append it to the ul 

  */

  let li = document.createElement('li');
  let text = document.createTextNode(task.value);
  let link = document.createElement('a');
  li.className = 'collection-item';
  li.appendChild(link);
  li.appendChild(text);
  link.className = 'secondary-content';
  link.innerHTML = '<i class="far fa-trash-alt"></i>';

  task.value === '' ? alert('Please fill out ') : collection.appendChild(li);
  e.preventDefault();
  task.value = '';
});

parentEle.addEventListener('click', function (e) {
  if (e.target.parentElement.className === 'secondary-content') {
    e.target.parentElement.parentElement.remove();
  }
});
