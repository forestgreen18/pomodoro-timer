export const WORK_MODE = "work";
export const SHORT_BREAK_MODE = "shortBreak";
export const LONG_BREAK_MODE = "longBreak";
export class TimerMode {
  #mode;
  #timerOrder = 1;

  constructor(timeFormatter, mode = "work") {
    if (TimerMode.instance instanceof TimerMode) {
      return TimerMode.instance;
    }

    this.mode = mode;
    this.timeFormatter = timeFormatter;

    Object.freeze(this.#mode);
    Object.freeze(this);
    TimerMode.instance = this;
  }

  changeMode() {
    this.#increaseTimerOrder();
    this.#defineMode();
  }

  getDefaultTime() {
    const seconds = this.#getNumberForMode() * 60;

    return this.#formatTime(seconds);
  }

  #formatTime(timeInSeconds) {
    return this.timeFormatter.formatTime(timeInSeconds);
  }

  #work() {
    this.mode = WORK_MODE;
  }

  #shortBreak() {
    this.mode = SHORT_BREAK_MODE;
  }

  #longBreak() {
    this.mode = LONG_BREAK_MODE;
  }

  #getNumberForMode() {
    switch (this.mode) {
      case WORK_MODE:
        return 0.4;
      case SHORT_BREAK_MODE:
        return 0.2;
      case LONG_BREAK_MODE:
        return 0.3;
      default:
        return 0;
    }
  }

  #increaseTimerOrder() {
    this.timerOrder += 1;
  }

  #defineMode() {
    if (this.timerOrder % 8 === 0) {
      this.#longBreak();
    } else if (this.timerOrder % 2 === 0) {
      this.#shortBreak();
    } else {
      this.#work();
    }
  }

  get mode() {
    return this.#mode;
  }

  get getNumberForMode() {
    return this.#getNumberForMode();
  }

  get timerOrder() {
    return this.#timerOrder;
  }

  set mode(mode) {
    this.#mode = mode;
  }

  set timerOrder(orderNumber) {
    this.#timerOrder = orderNumber;
  }
}
