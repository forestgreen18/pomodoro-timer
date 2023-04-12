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

  set mode(mode) {
    this.#mode = mode;
  }

  get mode() {
    return this.#mode;
  }

  work() {
    this.mode = "work";
  }

  shortBreak() {
    this.mode = "shortBreak";
  }

  longBreak() {
    this.mode = "longBreak";
  }
}
