export class ElementToggler {
  #element;
  constructor(element) {
    this.#element = element;
  }

  show() {
    this.element.style.visibility = "visible";
  }

  hide() {
    this.element.style.visibility = "hidden";
  }

  enable() {
    this.element.removeAttribute("disabled");
  }

  disable() {
    this.element.setAttribute("disabled", "");
  }

  get element() {
    return this.#element;
  }
}
