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
let timerMode;
const timerElement = new Timer("time", 25);

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  counter = new Counter(
    25,
    (time) => timerElement.update(time),
    () => timerElement.reset()
  );
  timerMode = new TimerMode();

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
