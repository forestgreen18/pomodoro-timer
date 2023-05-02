export const WORK_MODE = "work";
export const SHORT_BREAK_MODE = "shortBreak";
export const LONG_BREAK_MODE = "longBreak";
export class TimerMode {
  #mode;
  #timerOrder = 1;

  constructor(mode = "work") {
    if (TimerMode.instance instanceof TimerMode) {
      return TimerMode.instance;
    }

    this.mode = mode;

    Object.freeze(this.#mode);
    Object.freeze(this);
    TimerMode.instance = this;
  }

  #work() {
    this.mode = WORK_MODE;
  }

  changeMode() {
    this.#increaseTimerOrder();
    this.#defineMode();
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
    console.log(`timerOrder ${this.timerOrder}`);
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
