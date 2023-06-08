import { SoundPlayer } from "../Timer/SoundPlayer";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoView } from "./TodoView";

const soundPlayer = new SoundPlayer();
const todoList = new TodoList();

const todoInput = document.querySelector("#todoInput");
const todoAddBtn = document.querySelector("#addButton");

todoAddBtn.addEventListener("click", () => {
  soundPlayer.playButtonClick();

  const inputValue = todoInput.value;
  const todoItem = new TodoItem(inputValue);
  todoList.addTodoItem(todoItem.todoObject);

  TodoView.renderTodos(todoList.todoItems);
  console.log(todoList.todoItems);
});
