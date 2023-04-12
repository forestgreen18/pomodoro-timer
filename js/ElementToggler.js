export class ElementToggler {
  #element;
  constructor(element) {
    this.#element = element;
  }

  show() {
    this.element.style.visibility = "visible";
    this.element.style.position = "static";
  }

  hide() {
    this.element.style.visibility = "hidden";
    this.element.style.position = "absolute";
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
