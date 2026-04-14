class MyFramework {
  constructor(options) {
    this.el = document.querySelector(options.el)
    this.data = options.data
    this.render = options.render

    this.init()
  }

  init() {
    this.update()
  }

  setState(newState) {
    this.data = { ...this.data, ...newState }
    this.update()
  }

  update() {
    this.el.innerHTML = this.render(this.data)
  }
}