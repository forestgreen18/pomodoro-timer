import buttonClickSound from "/audio/click_sound.mp3";
import modeChangeSound from "/audio/time_is_over.mp3";
import startSound from "/audio/start_button_sound.mp3";

export class SoundPlayer {
  #buttonClickSound;
  #modeChangeSound;
  #startSound;

  constructor() {
    this.buttonClickSound = new Audio(buttonClickSound);
    this.modeChangeSound = new Audio(modeChangeSound);
    this.startSound = new Audio(startSound);
  }

  get buttonClickSound() {
    return this.#buttonClickSound;
  }

  set buttonClickSound(value) {
    this.#buttonClickSound = value;
  }

  get modeChangeSound() {
    return this.#modeChangeSound;
  }

  set modeChangeSound(value) {
    this.#modeChangeSound = value;
  }

  get startSound() {
    return this.#startSound;
  }

  set startSound(value) {
    this.#startSound = value;
  }

  playButtonClick() {
    this.buttonClickSound.play();
  }

  playModeChange() {
    this.modeChangeSound.play();
  }

  playStart() {
    this.startSound.play();
  }
}
