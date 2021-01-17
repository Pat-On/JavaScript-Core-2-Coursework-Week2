//Selectors
let toDoContainer = document.querySelector("#todo-list");
let inputField = document.querySelector(".form-control")
let ticks = document.querySelectorAll('i:last-child');
let deletes = document.querySelectorAll('i:first-child');
let liTicksDeleteContainer = document.querySelectorAll('li');
let addNewTodoContainer = document.querySelector('.add-todo')
let ulEntire = document.querySelectorAll('ul')
let btnDelete = document.querySelector('.btn__delete')


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// This function is creating new todo element
function addNewTodo(event) {
  if (inputField.value.length) {
    // The code below prevents the page from refreshing when we click the 'Add Todo' button.
    event.preventDefault();
    let newToDo = inputField.value;
    toDoContainer.insertAdjacentHTML('beforeend', paternOfToDo(newToDo));
    let lastTodo = document.querySelector('li:last-child')
    lastTodo.addEventListener("click", deleteLineTick)
    inputField.value = '';
  }
}

// pater of todo element in html
const paternOfToDo = function (item) {
  let text = ` <li class="list-group-item d-flex justify-content-between align-items-center">${item}
 <span class="badge bg-primary rounded-pill">
<!-- each of these <i> tags will need an event listener when we create them in Javascript -->
<i data-role="0" class="fa fa-check" aria-hidden="true" ></i>
<i data-role="1" class="fa fa-trash" aria-hidden="true" ></i>
</span>
</li>`
  return text
}

// function to delete and line-through 
const deleteLineTick = function (e) {
  e.preventDefault();
  if (e.target.dataset.role === "0") {
    if (e.target.parentNode.parentNode.style.textDecoration !== "line-through") {
      e.target.parentNode.parentNode.style.textDecoration = "line-through"
    } else {
      e.target.parentNode.parentNode.style.textDecoration = ""
    }
  } else if (e.target.dataset.role === "1") {
    e.target.parentNode.parentNode.remove()
  }
}

//function creating todo from the list of objects
function populateTodoList(todos) {
  // let list = document.getElementById("todo-list");
  for (let item of todos) {
    let tempText = paternOfToDo(item.task)
    toDoContainer.insertAdjacentHTML('beforeend', tempText);
    let lastTodo = document.querySelector('li:last-child')
    lastTodo.addEventListener("click", deleteLineTick)
  }
}

let container

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones 
//(we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  e.preventDefault();
  let tempLiList = document.querySelectorAll('li');
  for (let item of tempLiList) {
    if (item.style.textDecoration === "line-through") item.remove()
  }
}

btnDelete.addEventListener('click', deleteAllCompletedTodos)
addNewTodoContainer.addEventListener('click', deleteLineTick)
populateTodoList(todos);