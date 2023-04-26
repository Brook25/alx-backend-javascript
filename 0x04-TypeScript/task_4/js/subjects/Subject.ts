/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subjects {
    teacher: Teacher;
      set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}
