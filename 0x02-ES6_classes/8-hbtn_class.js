export default class HolbertonClass {
  constructor(size, loc) {
    this._size = size;
    this._location = loc;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
