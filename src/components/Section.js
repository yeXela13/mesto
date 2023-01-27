export class Section {
    constructor({ items, renderer }, containerSelector) {
      this._renderItems = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    };
  
    renderer() {
      this._renderItems.forEach(this._renderer);
    }
  
    addItem(item) {
      // console.log(item)
      this._container.prepend(item);
    }
  }