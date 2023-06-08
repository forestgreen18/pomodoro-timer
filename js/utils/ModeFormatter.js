import { WORK_MODE, SHORT_BREAK_MODE, LONG_BREAK_MODE } from "../TimerMode";

export class ModeFormatter {
  static format(mode) {
    switch (mode) {
      case WORK_MODE:
        return "Work";
      case SHORT_BREAK_MODE:
        return "Short Break";
      case LONG_BREAK_MODE:
        return "Long Break";
      default:
        return "";
    }
  }
}
