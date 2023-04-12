import { Timer } from "./Timer";

const timerElement = new Timer("time", "25:00");
export class Counter {
  #amountOfTime;
  #startTime = new Date();
  #endTime;
  #intervalID = null;
  #stopTime = null;

  constructor(amountOfTime = 25) {
    this.amountOfTime = amountOfTime;
    this.endTime = new Date(
      this.startTime.getTime() + this.amountOfTime * 60 * 1000
    );
  }

  #counterDown() {
    this.intervalID = setInterval(() => {
      const secondsLeft = this.secondsLeft;
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;

      const time = `${minutes}:${seconds}`;
      console.log(`${time}`);
      timerElement.update(time);
    }, 1000);
  }

  start() {
    this.#counterDown();
  }

  pause() {
    this.stopTime = new Date();
    clearInterval(this.intervalID);
  }

  stop() {
    this.startTime = null;
    this.endTime = null;
    timerElement.reset();
    clearInterval(this.intervalID);
  }

  resume(currentTime) {
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
}
