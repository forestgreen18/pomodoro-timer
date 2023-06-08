import { TodoItem } from "./TodoItem";

export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  //   deleteTodoItem(todoItemID) {}

  get todoItems() {
    return this.todos;
  }
}
