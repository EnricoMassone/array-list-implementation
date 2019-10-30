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
    if (!Number.isInteger(index)) {
      throw new TypeError("Index must be an integer number");
    }

    if (index < 0 || index >= this.length) {
      return undefined;
    }

    const temp = this._data[index];

    for (let i = index + 1; i < this.length; i++) {
      this._data[i - 1] = this._data[i];
    }

    delete this._data[this.length - 1];

    this.length--;

    return temp;
  }
}

exports.ArrayList = ArrayList;
