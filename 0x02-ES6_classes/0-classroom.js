export default class Classroom {
    constructor (maxStudentSize) {
        if (typeof maxStudentSize == 'number') {
            this._maxStudentSize = maxStudentSize;
        }

    }
}
