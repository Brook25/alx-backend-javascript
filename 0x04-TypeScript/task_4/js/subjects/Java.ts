namespace Subjects {
  export interface Teacher {
    expereinceTeachingJava?: number;
  }
  class Java extends Subjects {
  getRequirements() {
    return 'Here is the list of requirements for Java';
  }
  getAvailableTeacher(): string {
    if (this.teacher.expereinceTeachingJava == 0) {
      return 'No available Teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`
  }
  }
}
