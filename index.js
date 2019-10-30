class ArrayList {
  constructor() {
    this.length = 0;
    this._data = {};
  }

  push(value) {
    this._data[this.length] = value;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const temp = this._data[this.length - 1];
    delete this._data[this.length - 1];

    this.length--;

    return temp;
  }

  get(index) {
    if (!Number.isInteger(index)) {
      throw new TypeError("Index must be an integer number");
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    return this._data[index];
  }

  delete(index) {
    throw new Error("Not implemented");
  }
}

exports.ArrayList = ArrayList;
