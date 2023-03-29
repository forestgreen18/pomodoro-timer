const startBtn = document.querySelector("#btn-start");
const stopBtn = document.querySelector("#btn-stop");
const resetBtn = document.querySelector("#btn-reset");

class Counter {
  #startTime = new Date();
  #endTime = new Date(this.startTime.getTime() + 25 * 60 * 1000);
  #intervalID = null;
  #stopTime = null;

  constructor() {}

  #counterDown() {
    this.intervalID = setInterval(() => {
      const secondsLeft = this.secondsLeft;
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      console.log(`${minutes}:${seconds}`);
    }, 1000);
  }

  start() {
    this.#counterDown();
  }

  stop() {
    this.stopTime = new Date();
    clearInterval(this.intervalID);
  }

  reset() {
    this.startTime = null;
    this.endTime = null;
    clearInterval(this.intervalID);
  }

  continue(currentTime) {
    const pauseTime = currentTime - this.stopTime;
    this.endTime = new Date(this.endTime.getTime() + pauseTime);
    this.#counterDown();
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
}

let timer;

startBtn.addEventListener("click", () => {
  if (timer?.startTime) {
    const currentTime = new Date();
    timer.continue(currentTime);
  } else {
    timer = new Counter();
    timer.start();
  }
});

stopBtn.addEventListener("click", () => {
  timer.stop();
});

resetBtn.addEventListener("click", () => {
  timer.reset();
});
