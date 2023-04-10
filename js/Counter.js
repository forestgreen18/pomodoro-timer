import { ElementToggler } from "./ElementToggler";
import { Timer } from "./Timer";

const startBtn = document.querySelector("#btn-start");
const pauseBtn = document.querySelector("#btn-pause");
const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");
const doneBtn = document.querySelector("#btn-done");

const timerElement = new Timer("time", "25:00");

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

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  timer = new Counter();
  timer.start();

  startBtnController.hide();
  pauseBtnController.show();
  stopBtnController.show();
  stopBtnController.enable();
  pauseBtnController.enable();
});

pauseBtn.addEventListener("click", () => {
  timer.pause();
  resumeBtnController.show();
  doneBtnController.show();
  stopBtnController.hide();
  pauseBtnController.hide();
});

stopBtn.addEventListener("click", () => {
  timer.stop();
  startBtnController.show();
  stopBtnController.disable();
  pauseBtnController.hide();
});

resumeBtn.addEventListener("click", () => {
  resumeBtnController.hide();
  doneBtnController.hide();
  const currentTime = new Date();
  timer.resume(currentTime);

  stopBtnController.show();
  pauseBtnController.show();
});
