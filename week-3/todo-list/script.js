function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((item) => {
    const listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = item.task;
    const span = document.createElement("span");
    listItem.appendChild(span);
    span.classList.add("badge", "bg-primary", "rounded-pill");
    const firstI = document.createElement("i");
    firstI.classList.add("fa", "fa-check");
    span.appendChild(firstI);
    const secondI = document.createElement("i");
    secondI.classList.add("fa", "fa-trash");
    span.appendChild(secondI);
    secondI.addEventListener("click", () => {
      listItem.remove();
    });
    firstI.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  });
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addNewTodo());

function addNewTodo() {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const input = document.getElementById("input-todo").value;
  console.log(input);
}
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
