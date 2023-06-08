import { LONG_BREAK_MODE, WORK_MODE } from "./TimerMode";
import { ModeFormatter } from "./utils/ModeFormatter";

export class TimerDisplay {
  #timeElement;
  #timerModeElement;
  #timerBoxElement;
  #timerMainBlock;
  #muteSoundBtnElement;

  #defaultValue;

  constructor(
    timeElementId,
    timerBoxElementId,
    timerModeElementId,
    timerMainBlockId,
    muteSoundBtnElementId,
    defaultValue
  ) {
    this.#timeElement = document.getElementById(timeElementId);
    this.#timerModeElement = document.getElementById(timerModeElementId);
    this.#timerMainBlock = document.getElementById(timerMainBlockId);
    this.#muteSoundBtnElement = document.getElementById(muteSoundBtnElementId); // add this line
    this.timerBoxElement = document.getElementById(timerBoxElementId);
    this.defaultValue = defaultValue;
  }

  reset() {
    this.timeElement = this.defaultValue;
  }

  update(time) {
    this.timeElement = time;
    this.defaultValue = time;
  }

  updateTimerMode(mode) {
    this.timerModeElement = ModeFormatter.format(mode);
  }

  changeColor(mode) {
    if (mode === WORK_MODE) {
      this.#changeToWorkColor();
    } else if (mode === LONG_BREAK_MODE) {
      this.#changeToLongBreakColor();
    } else {
      this.#changeToShortBreakColor();
    }
  }

  updateMuteSoundBtn(isMuted) {
    if (isMuted) {
      this.#muteSoundBtnElement.classList.add("muted");
      this.#muteSoundBtnElement.classList.remove("unmuted");
    } else {
      this.#muteSoundBtnElement.classList.add("unmuted");
      this.#muteSoundBtnElement.classList.remove("muted");
    }
  }

  #changeToWorkColor() {
    this.timerMainBlock.classList.remove("timer__mode-short-break");
    this.timerMainBlock.classList.remove("timer__mode-long-break");
    this.timerMainBlock.classList.add("timer__mode-work");
  }

  #changeToShortBreakColor() {
    this.timerMainBlock.classList.remove("timer__mode-work");
    this.timerMainBlock.classList.remove("timer__mode-long-break");
    this.timerMainBlock.classList.add("timer__mode-short-break");
  }

  #changeToLongBreakColor() {
    this.timerMainBlock.classList.remove("timer__mode-work");
    this.timerMainBlock.classList.remove("timer__mode-short-break");
    this.timerMainBlock.classList.add("timer__mode-long-break");
  }

  get defaultValue() {
    return this.#defaultValue;
  }

  get timerBoxElement() {
    return this.#timerBoxElement;
  }

  get timerMainBlock() {
    return this.#timerMainBlock;
  }

  set timeElement(value) {
    this.#timeElement.textContent = value;
  }

  set timerBoxElement(timerBoxElementId) {
    this.#timerBoxElement = timerBoxElementId;
  }

  set timerMainBlock(timerMainBlockId) {
    this.#timerMainBlock = timerMainBlockId;
  }

  set defaultValue(defaultValue) {
    this.#defaultValue = defaultValue;
  }

  set timerModeElement(value) {
    this.#timerModeElement.textContent = value;
  }
}
