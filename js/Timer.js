import { WORK_MODE } from "./TimerMode";

export class Timer {
  #counter;
  #timerMode;
  #startBtnController;
  #stopBtnController;
  #pauseBtnController;
  #resumeBtnController;
  #doneBtnController;
  #skipBtnController;

  constructor(
    counter,
    timerMode,
    timerDisplay,
    startBtnController,
    stopBtnController,
    pauseBtnController,
    resumeBtnController,
    doneBtnController,
    skipBtnController
  ) {
    this.counter = counter;
    this.timerMode = timerMode;
    this.timerDisplay = timerDisplay; // add this line
    this.startBtnController = startBtnController;
    this.stopBtnController = stopBtnController;
    this.pauseBtnController = pauseBtnController;
    this.resumeBtnController = resumeBtnController;
    this.doneBtnController = doneBtnController;
    this.skipBtnController = skipBtnController;
  }

  start() {
    this.counter.start();
    this.startBtnController.hide();
    this.pauseBtnController.show();
    this.stopBtnController.show();
    this.stopBtnController.enable();
    this.pauseBtnController.enable();
  }

  stop() {
    this.counter.stop();
    this.startBtnController.show();
    this.stopBtnController.disable();
    this.pauseBtnController.hide();
  }

  pause() {
    if (this.timerMode.mode === WORK_MODE) {
      this.doneBtnController.show();
    }
    this.counter.pause();
    this.resumeBtnController.show();
    this.stopBtnController.hide();
    this.pauseBtnController.hide();
  }

  resume() {
    if (this.timerMode.mode === WORK_MODE) {
      this.stopBtnController.show();
    }

    this.resumeBtnController.hide();
    this.doneBtnController.hide();
    const currentTime = new Date();
    this.counter.resume(currentTime);
    this.pauseBtnController.show();
  }

  async done() {
    this.timerMode.changeMode();
    this.timerDisplay.changeColor(this.timerMode.mode);
    await this.timerDisplay.update(this.timerMode.getDefaultTime());
    this.counter.done(this.timerMode.getNumberForMode);
    this.resumeBtnController.hide();
    this.pauseBtnController.show();
    this.stopBtnController.hide();
    this.doneBtnController.hide();
    this.skipBtnController.show();
  }

  skip() {
    this.timerMode.changeMode();
    this.timerDisplay.changeColor(this.timerMode.mode);
    this.counter.skip();
    this.startBtnController.show();
    this.stopBtnController.show();
    this.stopBtnController.disable();
    this.skipBtnController.hide();
    this.pauseBtnController.hide();
    this.resumeBtnController.hide();
  }

  onCounterDone() {
    if (this.timerMode.mode === WORK_MODE) {
      this.done();
    } else {
      this.skip();
    }
  }

  get counter() {
    return this.#counter;
  }

  get timerMode() {
    return this.#timerMode;
  }

  get startBtnController() {
    return this.#startBtnController;
  }

  get stopBtnController() {
    return this.#stopBtnController;
  }

  get pauseBtnController() {
    return this.#pauseBtnController;
  }

  get resumeBtnController() {
    return this.#resumeBtnController;
  }

  get doneBtnController() {
    return this.#doneBtnController;
  }

  get skipBtnController() {
    return this.#skipBtnController;
  }

  set counter(counter) {
    this.#counter = counter;
  }

  set timerMode(timerMode) {
    this.#timerMode = timerMode;
  }

  set startBtnController(startBtnController) {
    this.#startBtnController = startBtnController;
  }

  set stopBtnController(stopBtnController) {
    this.#stopBtnController = stopBtnController;
  }

  set pauseBtnController(pauseBtnController) {
    this.#pauseBtnController = pauseBtnController;
  }

  set resumeBtnController(resumeBtnController) {
    this.#resumeBtnController = resumeBtnController;
  }

  set doneBtnController(doneBtnController) {
    this.#doneBtnController = doneBtnController;
  }

  set skipBtnController(skipBtnController) {
    this.#skipBtnController = skipBtnController;
  }
}
