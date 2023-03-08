export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize === 'number') {
      this._maxStudentsSize = maxStudentsSize;
    }
  }
}
