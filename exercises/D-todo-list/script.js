function todoList(todos) {
  // Write your code here...
  let emptyStr = '';
  for (let item of todos) emptyStr += `${todosCreator(item)}`
  document.querySelector("#content").insertAdjacentHTML("afterbegin", `<ul>${emptyStr}</ul>`)
}

const todosCreator = function (item) {
  let text = `<li>${item.todo}</li>`
  return text;
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);

const lineThroughStyle = function (item) {
  item.style.textDecoration = "line-through";
}

const toggleLineThrough = function (item) {
  if (item.style.textDecoration !== "line-through") {
    lineThroughStyle(item)
  }
  else {
    item.style.textDecoration = "none";
  }
}


let everySingleTodo = document.querySelectorAll('li')

for (let item of everySingleTodo) {
  item.addEventListener('click', function (e) {
    toggleLineThrough(e.target)
  })
}


