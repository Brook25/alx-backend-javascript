export default class ClassRoom {
    constructor (maxStudentSize) {
        if (typeof maxStudentSize == 'number') {
            this._maxStudentSize = maxStudentSize;
        }

    }
}
