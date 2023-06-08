import { SoundPlayer } from "../Timer/SoundPlayer";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoView } from "./TodoView";

const soundPlayer = new SoundPlayer();
const todoList = new TodoList();

const todoInput = document.querySelector("#todoInput");
const todoAddBtn = document.querySelector("#addButton");
const todoListElement = document.querySelector("#todoList");

todoAddBtn.addEventListener("click", () => {
  soundPlayer.playButtonClick();

  const inputValue = todoInput.value;
  const todoItem = new TodoItem(inputValue);
  todoList.addTodoItem(todoItem.todoObject);

  TodoView.renderTodos(todoList.todoItems);
  console.log(todoList.todoItems);
});

todoListElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo__delete-button")) {
    const todoItem = event.target.closest(".todo__item");
    const todoItemId = todoItem.getAttribute("id");
    todoList.deleteTodoItem(todoItemId);
    TodoView.renderTodos(todoList.todoItems);
    console.log(todoItemId);
    console.log(todoList.todoItems);
  }
});
