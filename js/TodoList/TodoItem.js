export class TodoItem {
  constructor(value) {
    this.value = value;
    this.id = this.generateID();
    this.isDone = false;
    this.isDeleted = false;
  }

  generateID() {
    const id = Date.now();
    return id;
  }

  get todoObject() {
    return {
      value: this.value,
      id: this.itemID,
      isDone: this.isDone,
      isDeleted: this.isDeleted,
    };
  }

  get itemID() {
    return this.id;
  }
}
