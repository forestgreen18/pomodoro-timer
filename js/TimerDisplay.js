import { WORK_MODE } from "./TimerMode";
import { ModeFormatter } from "./utils/ModeFormatter";

export class TimerDisplay {
  #timeElement;
  #timerModeElement;
  #timerBoxElement;
  #defaultValue;

  constructor(
    timeElementId,
    timerBoxElementId,
    timerModeElementId,
    defaultValue
  ) {
    this.#timeElement = document.getElementById(timeElementId);
    this.#timerModeElement = document.getElementById(timerModeElementId);
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

  updateTimerMode(mode) {
    this.timerModeElement = ModeFormatter.format(mode);
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

  set timerModeElement(value) {
    this.#timerModeElement.textContent = value;
  }
}
