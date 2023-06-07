import { WORK_MODE } from "./TimerMode";

export class TimerDisplay {
  #timeElement;
  #timerBoxElement;
  #defaultValue;

  constructor(timeElementId, timerBoxElementId, defaultValue) {
    this.#timeElement = document.getElementById(timeElementId);
    this.timerBoxElement = document.getElementById(timerBoxElementId);
    this.defaultValue = defaultValue;
  }

  reset() {
    this.timeElement = this.defaultValue;
  }

  update(time) {
    this.timeElement = time;
    this.defaultValue = time;
  }

  changeColor(mode) {
    if (mode === WORK_MODE) {
      this.#changeToWorkColor();
    } else {
      this.#changeToBreakColor();
    }
  }

  #changeToWorkColor() {
    this.timerBoxElement.classList.add("timer__mode-work");
    this.timerBoxElement.classList.remove("timer__mode-break");
  }

  #changeToBreakColor() {
    this.timerBoxElement.classList.add("timer__mode-break");
    this.timerBoxElement.classList.remove("timer__mode-work");
  }

  get defaultValue() {
    return this.#defaultValue;
  }

  get timerBoxElement() {
    return this.#timerBoxElement;
  }

  set timeElement(value) {
    this.#timeElement.textContent = value;
  }

  set timerBoxElement(timerBoxElementId) {
    this.#timerBoxElement = timerBoxElementId;
  }

  set defaultValue(defaultValue) {
    this.#defaultValue = defaultValue;
  }
}
