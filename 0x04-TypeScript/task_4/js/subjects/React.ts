///  <reference path="Teacher.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }
  class React extends Subjects {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }
  getAvailableTeacher(): string {
    return `Available Teacher: ${this.teacher.firstName}`
  }
}
}
