export class TodoView {
  static renderTodos(todos) {
    const todoList = document.querySelector("#todoList");
    todoList.innerHTML = "";

    for (const todo of todos) {
      const todoItem = document.createElement("li");
      todoItem.classList.add("todo__item");
      todoItem.setAttribute("id", todo.id);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("todo__checkbox");
      checkbox.checked = todo.isDone;

      const text = document.createElement("span");
      text.classList.add("todo__text");
      text.textContent = todo.value;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("todo__delete-button");
      deleteButton.textContent = "Delete";

      todoItem.appendChild(checkbox);
      todoItem.appendChild(text);
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);
    }
  }
}
