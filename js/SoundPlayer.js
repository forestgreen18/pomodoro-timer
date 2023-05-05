import buttonClickSound from "/audio/click_sound.mp3";
import modeChangeSound from "/audio/time_is_over.mp3";

export class SoundPlayer {
  constructor() {
    this.buttonClickSound = new Audio(buttonClickSound);
    this.modeChangeSound = new Audio(modeChangeSound);
  }

  playButtonClick() {
    this.buttonClickSound.play();
  }

  playModeChange() {
    this.modeChangeSound.play();
  }
}
