export class Counter {
  static instance;

  #amountOfTime;
  #startTime = new Date();
  #endTime;
  #intervalID = null;
  #stopTime = null;
  #amountOfWorkTime = null;
  #updateCallback;
  #resetCallback;

  constructor(
    amountOfTime = 25,
    timeFormatter,
    updateCallback,
    resetCallback,
    modeChangeCallback,
    doneCallback
  ) {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.amountOfTime = amountOfTime;
    this.amountOfWorkTime = amountOfTime;
    this.doneCallback = doneCallback;
    this.timeFormatter = timeFormatter;
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

      const time = this.timeFormatter.formatTime(secondsLeft);

      if (this.#updateCallback) {
        this.#updateCallback(time);
      }

      if (secondsLeft <= 0) {
        if (this.doneCallback) {
          this.doneCallback();
        }
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
    if (this.resetCallback) {
      this.resetCallback();
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

  skip() {
    this.stop();
    this.amountOfTime = this.amountOfWorkTime;
    console.log("this.amountOfWorkTime", this.amountOfWorkTime);
  }

  #setTime(amountOfTime = 25) {
    this.startTime = new Date();
    this.endTime = new Date(
      this.startTime.getTime() + amountOfTime * 60 * 1000
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
    if (!this.endTime) {
      return 0;
    }
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

  get amountOfWorkTime() {
    return this.#amountOfWorkTime;
  }

  get resetCallback() {
    return this.#resetCallback;
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

  set amountOfWorkTime(amountOfWorkTime) {
    this.#amountOfWorkTime = amountOfWorkTime;
  }

  set resetCallback(resetCallback) {
    this.#resetCallback = resetCallback;
  }
}
