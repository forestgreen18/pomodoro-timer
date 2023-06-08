import buttonClickSound from "/audio/click_sound.mp3";
import modeChangeSound from "/audio/time_is_over.mp3";
import startSound from "/audio/start_button_sound.mp3";

export class SoundPlayer {
  #buttonClickSound;
  #modeChangeSound;
  #startSound;
  #isMuted = false;

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

  get isMuted() {
    return this.#isMuted;
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

  set isMuted(value) {
    this.isMuted = value;
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

  mute() {
    this.#isMuted = true;
    this.buttonClickSound.volume = 0;
    this.modeChangeSound.volume = 0;
    this.startSound.volume = 0;
  }

  unmute() {
    this.#isMuted = false;
    this.buttonClickSound.volume = 1;
    this.modeChangeSound.volume = 1;
    this.startSound.volume = 1;
  }

  toggleMute() {
    if (this.#isMuted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}
