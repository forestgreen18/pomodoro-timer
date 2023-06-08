import { ElementToggler } from "./ElementToggler";
import { Counter } from "./Counter";
import { TimerMode } from "./TimerMode";
import { TimerDisplay } from "./TimerDisplay";
import { Timer } from "./Timer";
import { SoundPlayer } from "./SoundPlayer";

const startBtn = document.querySelector("#btn-start");
const pauseBtn = document.querySelector("#btn-pause");
const stopBtn = document.querySelector("#btn-stop");
const resumeBtn = document.querySelector("#btn-resume");
const doneBtn = document.querySelector("#btn-done");
const skipBtn = document.querySelector("#btn-skip");

let counter;
let timer;

const soundPlayer = new SoundPlayer();
const timerElement = new TimerDisplay("time", 77);

let timerMode;
let timerDisplay;

document.addEventListener("DOMContentLoaded", () => {
  timerMode = new TimerMode();
  timerDisplay = new TimerDisplay(
    "time",
    "timer__box",
    "timer__mode",
    timerMode.getDefaultTime()
  );

  // update the timer display with the default time value
  timerDisplay.reset();
});

const stopBtnController = new ElementToggler(stopBtn);
const startBtnController = new ElementToggler(startBtn);
const resumeBtnController = new ElementToggler(resumeBtn);
const pauseBtnController = new ElementToggler(pauseBtn);
const doneBtnController = new ElementToggler(doneBtn);
const skipBtnController = new ElementToggler(skipBtn);

pauseBtnController.disable();

startBtn.addEventListener("click", () => {
  if (!timer) {
    // add this line
    counter = new Counter(
      timerMode.getNumberForMode,
      (time) => timerDisplay.update(time),
      () => timerDisplay.reset(),
      () => timerMode.changeMode(),
      () => timer.onCounterDone()
    );

    timer = new Timer(
      counter,
      timerMode,
      timerDisplay,
      startBtnController,
      stopBtnController,
      pauseBtnController,
      resumeBtnController,
      doneBtnController,
      skipBtnController
    );
  }

  soundPlayer.playStart();
  timer.start();
});

pauseBtn.addEventListener("click", () => {
  soundPlayer.playButtonClick();
  timer.pause();
});

stopBtn.addEventListener("click", () => {
  soundPlayer.playButtonClick();

  timer.stop();
});

resumeBtn.addEventListener("click", () => {
  soundPlayer.playButtonClick();

  timer.resume();
});

doneBtn.addEventListener("click", () => {
  soundPlayer.playModeChange();
  timer.done();
});

skipBtn.addEventListener("click", () => {
  soundPlayer.playModeChange();
  timer.skip();
});
