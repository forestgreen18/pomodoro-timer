import { ElementToggler } from "./ElementToggler";
import { Counter } from "./Counter";
import { TimerMode, WORK_MODE } from "./TimerMode";
import { Timer } from "./Timer";

const startBtn = document.querySelector("#btn-start");
const pauseBtn = document.querySelector("#btn-pause");
const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");
const doneBtn = document.querySelector("#btn-done");
const skipBtn = document.querySelector("#btn-skip");

let counter;
const timerElement = new Timer("time", 25);
const timerMode = new TimerMode();

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);
const skipBtnController = new ElementToggler(skipBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  counter = new Counter(
    timerMode.getNumberForMode,
    (time) => timerElement.update(time),
    () => timerElement.reset(),
    () => timerMode.changeMode()
  );

  counter.start();
  startBtnController.hide();
  pauseBtnController.show();
  stopBtnController.show();
  stopBtnController.enable();
  pauseBtnController.enable();
});

pauseBtn.addEventListener("click", () => {
  if (timerMode.mode === WORK_MODE) {
    doneBtnController.show();
  }
  counter.pause();
  resumeBtnController.show();
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
  if (timerMode.mode === WORK_MODE) {
    stopBtnController.show();
  }

  resumeBtnController.hide();
  doneBtnController.hide();
  const currentTime = new Date();
  counter.resume(currentTime);
  pauseBtnController.show();
});

doneBtn.addEventListener("click", () => {
  timerMode.break();
  counter.done(timerMode.getNumberForMode);
  resumeBtnController.hide();
  pauseBtnController.show();
  stopBtnController.hide();
  doneBtnController.hide();
  skipBtnController.show();
});

skipBtn.addEventListener("click", () => {
  timerMode.work();
  counter.skip();
  startBtnController.show();
  stopBtnController.show();
  stopBtnController.disable();
  skipBtnController.hide();
  pauseBtnController.hide();
  resumeBtnController.hide();
});
