export const WORK_MODE = "work";
export const SHORT_BREAK_MODE = "shortBreak";
export const LONG_BREAK_MODE = "longBreak";
export class TimerMode {
  #mode;

  constructor(mode = "work") {
    if (TimerMode.instance instanceof TimerMode) {
      return TimerMode.instance;
    }

    this.#mode = mode;

    Object.freeze(this.#mode);
    Object.freeze(this);
    TimerMode.instance = this;
  }

  #getNumberForMode() {
    switch (this.mode) {
      case WORK_MODE:
        return 25;
      case SHORT_BREAK_MODE:
        return 5;
      case LONG_BREAK_MODE:
        return 15;
      default:
        return 0;
    }
  }

  set mode(mode) {
    this.#mode = mode;
  }

  get mode() {
    return this.#mode;
  }

  get getNumberForMode() {
    return this.#getNumberForMode();
  }

  work() {
    this.mode = WORK_MODE;
  }

  shortBreak() {
    this.mode = SHORT_BREAK_MODE;
  }

  longBreak() {
    this.mode = LONG_BREAK_MODE;
  }
}
