export class Counter {
  static instance;

  #amountOfTime;
  #startTime = new Date();
  #endTime;
  #intervalID = null;
  #stopTime = null;
  #updateCallback;
  #resetCallback;

  constructor(amountOfTime = 25, updateCallback, resetCallback) {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.amountOfTime = amountOfTime;
    this.endTime = new Date(
      this.startTime.getTime() + this.amountOfTime * 60 * 1000
    );
    this.updateCallback = updateCallback;
    this.resetCallback = resetCallback;

    Counter.instance = this;
  }

  #counterDown() {
    if (!this.startTime || !this.endTime) {
      this.#setTime(this.amountOfTime);
    }

    this.intervalID = setInterval(() => {
      const secondsLeft = this.secondsLeft;
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      const time = `${minutes}:${seconds}`;
      if (this.#updateCallback) {
        this.#updateCallback(time);
      }
    }, 1000);
  }

  start() {
    this.#counterDown();
  }

  pause() {
    this.stopTime = new Date();
    this.#clearIntervalAndReset();
  }

  stop() {
    this.startTime = null;
    this.endTime = null;
    if (this.#resetCallback) {
      this.#resetCallback();
    }
    this.#clearIntervalAndReset();
  }

  resume(currentTime) {
    const pauseTime = currentTime - this.stopTime;
    this.endTime = new Date(this.endTime.getTime() + pauseTime);
    this.#counterDown();
  }

  done(timeForBreak = 5) {
    this.stop();
    this.amountOfTime = timeForBreak;
    this.start();
  }

  #setTime(amountOfTime = 25) {
    this.#startTime = new Date();
    this.#endTime = new Date(
      this.#startTime.getTime() + amountOfTime * 60 * 1000
    );
  }

  #clearIntervalAndReset() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

  get startTime() {
    return this.#startTime;
  }

  get endTime() {
    return this.#endTime;
  }

  get stopTime() {
    return this.#stopTime;
  }

  get currentTime() {
    return new Date();
  }

  get secondsLeft() {
    const timeRemaining = this.endTime.getTime() - this.currentTime.getTime();
    const secondsRemaining = Math.round(timeRemaining / 1000);

    return secondsRemaining;
  }

  get intervalID() {
    return this.#intervalID;
  }

  get amountOfTime() {
    return this.#amountOfTime;
  }

  set startTime(startTime) {
    this.#startTime = startTime;
  }

  set stopTime(currentTime) {
    this.#stopTime = currentTime;
  }

  set intervalID(intervalID) {
    this.#intervalID = intervalID;
  }

  set endTime(endTime) {
    this.#endTime = endTime;
  }

  set amountOfTime(time) {
    this.#amountOfTime = time;
  }

  set updateCallback(callback) {
    this.#updateCallback = callback;
  }

  set resetCallback(callback) {
    this.#resetCallback = callback;
  }
}
