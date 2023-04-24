import { ElementToggler } from "./ElementToggler";
import { Counter } from "./Counter";
import { TimerMode } from "./TimerMode";
import { Timer } from "./Timer";

const startBtn = document.querySelector("#btn-start");
const pauseBtn = document.querySelector("#btn-pause");
const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");
const doneBtn = document.querySelector("#btn-done");

let counter;
const timerElement = new Timer("time", 25);
const timerMode = new TimerMode();

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  counter = new Counter(
    timerMode.getNumberForMode,
    (time) => timerElement.update(time),
    () => timerElement.reset()
  );

  counter.start();
  startBtnController.hide();
  pauseBtnController.show();
  stopBtnController.show();
  stopBtnController.enable();
  pauseBtnController.enable();
});

pauseBtn.addEventListener("click", () => {
  counter.pause();
  resumeBtnController.show();
  doneBtnController.show();
  stopBtnController.hide();
  pauseBtnController.hide();
});

stopBtn.addEventListener("click", () => {
  counter.stop();
  startBtnController.show();
  stopBtnController.disable();
  pauseBtnController.hide();
});

resumeBtn.addEventListener("click", () => {
  resumeBtnController.hide();
  doneBtnController.hide();
  const currentTime = new Date();
  counter.resume(currentTime);

  stopBtnController.show();
  pauseBtnController.show();
});

doneBtn.addEventListener("click", () => {
  timerMode.shortBreak();
  counter.done(timerMode.getNumberForMode);
  resumeBtnController.hide();
  pauseBtnController.show();
});
