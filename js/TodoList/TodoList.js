import { TodoItem } from "./TodoItem";

export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  deleteTodoItem(todoItemID) {
    this.todos = this.todos.filter((todo) => todo.id !== Number(todoItemID));
  }

  get todoItems() {
    return this.todos;
  }
}
