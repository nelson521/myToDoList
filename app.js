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

document.addEventListener('DOMContentLoaded', getTasks);

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    let li = document.createElement('li');
    let text = document.createTextNode(task);
    let link = document.createElement('a');
    li.className = 'collection-item';
    li.appendChild(link);
    li.appendChild(text);
    link.className = 'secondary-content';
    link.innerHTML = '<i class="far fa-trash-alt"></i>';

    task.value === '' ? alert('Please fill out ') : collection.appendChild(li);
  });
}
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

  storeTask(task.value);

  task.value = '';
  e.preventDefault();
});

function storeTask(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

parentEle.addEventListener('click', function (e) {
  if (e.target.parentElement.className === 'secondary-content') {
    e.target.parentElement.parentElement.remove();
  }
});
