export class Timer {
  #timeElement;
  #defaultValue;

  constructor(timeElementId, defaultValue) {
    this.#timeElement = document.getElementById(timeElementId);
    this.#defaultValue = defaultValue;
  }

  set timeElement(value) {
    this.#timeElement.textContent = value;
  }

  reset() {
    this.timeElement = this.#defaultValue;
  }

  update(time) {
    this.timeElement = time;
  }
}
