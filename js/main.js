const startBtn = document.querySelector("#btn-start");
const stopBtn = document.querySelector("#btn-stop");

class Counter {
  constructor() {
    this.startTime = new Date();
    this.endTime = new Date(this.startTime.getTime() + 25 * 60 * 1000);
    this.intervalID = null;
  }

  counterDown() {
    this.intervalID = setInterval(() => {
      const secondsRemain = this.remainingSeconds;
      const minutes = Math.floor(secondsRemain / 60);
      const seconds = secondsRemain % 60;

      console.log("minutes", minutes);
      console.log("seconds", seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalID);
  }

  get start() {
    return this.startTime;
  }

  get end() {
    return this.endTime;
  }

  get currentTime() {
    return new Date();
  }

  get remainingSeconds() {
    const timeRemaining = this.end.getTime() - this.currentTime.getTime();
    const secondsRemaining = Math.round(timeRemaining / 1000);

    return secondsRemaining;
  }
}

let timer;

startBtn.addEventListener("click", () => {
  timer = new Counter();
  timer.counterDown();
});

stopBtn.addEventListener("click", () => {
  timer.stop();
});
