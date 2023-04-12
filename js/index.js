import { ElementToggler } from "./ElementToggler";
import { Counter } from "./Counter";
import { TimerMode } from "./TimerMode";

const startBtn = document.querySelector("#btn-start");
const pauseBtn = document.querySelector("#btn-pause");
const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");
const doneBtn = document.querySelector("#btn-done");

let timer;
let timerMode;

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  timer = new Counter(5);
  timerMode = new TimerMode();

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
