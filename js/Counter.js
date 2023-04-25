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
  #modeChangeCallback;

  constructor(
    amountOfTime = 25,
    updateCallback,
    resetCallback,
    modeChangeCallback
  ) {
    if (Counter.instance) {
      return Counter.instance;
    }

    this.modeChangeCallback = modeChangeCallback;
    this.amountOfTime = amountOfTime;
    this.amountOfWorkTime = amountOfTime;
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

      if (secondsLeft <= 0) {
        this.#restart();
      }

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
  }

  #restart() {
    let timeForNextMode;
    if (this.modeChangeCallback) {
      timeForNextMode = this.modeChangeCallback();
    }

    this.done(timeForNextMode);
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

  get modeChangeCallback() {
    return this.#modeChangeCallback;
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

  set resetCallback(callback) {
    this.#resetCallback = callback;
  }

  set amountOfWorkTime(amountOfWorkTime) {
    this.#amountOfWorkTime = amountOfWorkTime;
  }

  set modeChangeCallback(callback) {
    this.#modeChangeCallback = callback;
  }

  set resetCallback(resetCallback) {
    this.#resetCallback = resetCallback;
  }
}
